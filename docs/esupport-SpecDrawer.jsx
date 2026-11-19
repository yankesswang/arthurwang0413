import { useEffect, useRef, useState } from 'react'
import { X, ExternalLink, Columns2, Loader2 } from 'lucide-react'
import { getSpecData } from '../services/api'
import './SpecDrawer.css'

// Highlight tiles per category: the four values an FAE reaches for first.
const HIGHLIGHTS = {
  motherboard: ['Chipset', 'Socket', 'Memory', 'Form Factor'],
  laptop: ['Video Graphics', 'Display', 'CPU', 'Battery'],
}

const clean = (v) => String(v ?? '').replace(/[\s ]*®/g, '®').trim()

// "Intel® Core™ Ultra 9 Processor 275HX (36MB cache, …)" → main + sub
function split(value) {
  const lines = clean(value).split('\n').map((l) => l.trim()).filter(Boolean)
  const first = lines[0] || '—'
  const paren = first.indexOf(' (')
  if (paren > 0 && lines.length === 1) {
    return { main: first.slice(0, paren), sub: first.slice(paren + 2).replace(/\)$/, '') }
  }
  // A short first line ("16\" 16:10") carries little; fold in the head of the next line.
  if (first.length < 14 && lines[1]) {
    const [head, ...tail] = lines[1].split(/,\s+/)
    return { main: `${first} · ${head}`, sub: [tail.join(', '), ...lines.slice(2, 3)].filter(Boolean).join(' · ') }
  }
  return { main: first, sub: lines.slice(1, 3).join(' · ') }
}

function SpecDrawer({ models = [], active, onClose }) {
  const [tab, setTab] = useState(active || models[0])
  const [data, setData] = useState({})
  const closeRef = useRef(null)

  useEffect(() => { setTab(active || models[0]) }, [active, models])

  useEffect(() => {
    let alive = true
    models.forEach((name) => {
      if (data[name]) return
      getSpecData({ productLine: '', productName: name })
        .then((res) => { if (alive) setData((d) => ({ ...d, [name]: res })) })
        .catch(() => { if (alive) setData((d) => ({ ...d, [name]: { error: true } })) })
    })
    return () => { alive = false }
  }, [models]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const comparing = tab === '__compare__'
  const current = comparing ? null : data[tab]
  const loaded = models.map((m) => data[m]).filter((d) => d && !d.error)

  return (
    <div className="spec-drawer-root" role="presentation">
      <button className="spec-drawer-scrim" type="button" aria-label="Close specifications" onClick={onClose} />
      <aside className="spec-drawer" role="dialog" aria-modal="true" aria-label="Product specifications">
        <header className="sd-top">
          <div className="sd-tabs" role="tablist">
            {models.map((m) => (
              <button key={m} type="button" role="tab" aria-selected={tab === m} className={tab === m ? 'is-on' : ''} onClick={() => setTab(m)}>
                {m}
              </button>
            ))}
            {models.length > 1 && (
              <button type="button" role="tab" aria-selected={comparing} className={`sd-compare-tab ${comparing ? 'is-on' : ''}`} onClick={() => setTab('__compare__')}>
                <Columns2 size={14} /> Compare
              </button>
            )}
          </div>
          <button ref={closeRef} className="sd-close" type="button" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </header>

        <div className="sd-scroll">
          {comparing ? (
            <CompareView products={loaded} />
          ) : !current ? (
            <div className="sd-loading"><Loader2 size={16} className="spin" /> Loading spec record…</div>
          ) : current.error ? (
            <div className="sd-loading">No spec record for this product.</div>
          ) : (
            <ProductView record={current} />
          )}
        </div>
      </aside>
    </div>
  )
}

function ProductView({ record }) {
  const { product = {}, specifications: specs = {} } = record
  const keys = (HIGHLIGHTS[product.category] || Object.keys(specs).slice(0, 4)).filter((k) => specs[k])
  const rest = Object.keys(specs)
  return (
    <>
      <section className="sd-hero">
        <div className="sd-photo">{product.image ? <img src={product.image} alt={product.model || product.name} /> : null}</div>
        <div className="sd-id">
          <span className="sd-cat">{product.category}</span>
          <h2>{product.name}</h2>
          <p>
            Spec snapshot <b>{product.snapshot_date}</b>
            {product.source && (
              <a href={product.source} target="_blank" rel="noopener noreferrer">Product page <ExternalLink size={12} /></a>
            )}
          </p>
        </div>
      </section>

      <section className="sd-tiles" aria-label="Key specifications">
        {keys.map((k) => {
          const { main, sub } = split(specs[k])
          return (
            <div key={k} className="sd-tile">
              <span className="sd-tile-label">{k}</span>
              <strong>{main}</strong>
              {sub && <small>{sub}</small>}
            </div>
          )
        })}
      </section>

      <section className="sd-table" aria-label="All specifications">
        <h3>All fields <span>{rest.length}</span></h3>
        <dl>
          {rest.map((k) => {
            const lines = clean(specs[k]).split('\n').map((l) => l.trim()).filter(Boolean)
            return (
              <div key={k} className="sd-row">
                <dt>{k}</dt>
                <dd>
                  {lines.length > 1 ? (
                    <ul>{lines.map((l, i) => <li key={i}>{l.replace(/^\*\s?/, '')}</li>)}</ul>
                  ) : lines[0]}
                </dd>
              </div>
            )
          })}
        </dl>
      </section>
    </>
  )
}

function CompareView({ products }) {
  if (products.length < 2) {
    return <div className="sd-loading"><Loader2 size={16} className="spin" /> Loading spec records…</div>
  }
  const keys = [...new Set(products.flatMap((p) => Object.keys(p.specifications || {})))]
  const rows = keys.map((k) => {
    const vals = products.map((p) => clean(p.specifications?.[k] ?? '—'))
    return { k, vals, same: vals.every((v) => v === vals[0]) }
  })
  const diff = rows.filter((r) => !r.same)
  const same = rows.filter((r) => r.same)
  const grid = { gridTemplateColumns: `minmax(96px, 0.7fr) repeat(${products.length}, minmax(0, 1fr))` }
  return (
    <>
      <section className="sd-cmp-head" style={grid}>
        <span />
        {products.map((p) => (
          <div key={p.product.name} className="sd-cmp-prod">
            {p.product.image && <img src={p.product.image} alt="" />}
            <b>{p.product.model || p.product.name}</b>
          </div>
        ))}
      </section>
      <p className="sd-cmp-summary"><b>{diff.length}</b> fields differ · <b>{same.length}</b> identical</p>
      <section className="sd-cmp">
        {[...diff, ...same].map((r) => (
          <div key={r.k} className={`sd-cmp-row ${r.same ? 'is-same' : 'is-diff'}`} style={grid}>
            <span className="sd-cmp-key">
              {r.k}
              <em>{r.same ? 'same' : 'differs'}</em>
            </span>
            {r.vals.map((v, i) => {
              const { main, sub } = split(v)
              return (
                <span key={i} className="sd-cmp-val">
                  <strong>{main}</strong>
                  {sub && <small>{sub}</small>}
                </span>
              )
            })}
          </div>
        ))}
      </section>
    </>
  )
}

export default SpecDrawer
