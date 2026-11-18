# GRACE-Mem workflow provenance

Source: user-supplied `Mem_KG.pdf`, 22-page GRACE-Mem research manuscript. Text and rendered Figures 1–2 were reviewed. The user subsequently requested the complete original manuscript on the website. An unchanged, SHA-256-verified copy is included at `assets/papers/grace-mem.pdf`. Both the GRACE-Mem card and the research section link to it; the research section also has an expandable embedded PDF reader. The project repository link is the user-confirmed https://github.com/gbtailab-tech/GRACE-Mem. Process summaries remain separate from the full original.

| UI content | Source | Preserved detail |
| --- | --- | --- |
| Ingestion and updates | §3.1, pp. 3–4; Figure 1, p. 4; Table 8, p. 14 | Original text/time/session/message provenance; complementary compressed/entity/relation views; reconcile entities with ADD/UPDATE before committing relation endpoints; graph and separate vector indexes |
| Hybrid graph retrieval | §3.2, pp. 3–5 | Full-question dense entity retrieval; keyword BM25 entity retrieval; keyword-vector relation retrieval; query-conditioned spreading activation |
| Two-stage reranking | §3.3, p. 5 | Independently rerank entities/relations, link to compressed records, merge with direct compressed-record search, deduplicate, rerank the merged pool into provenance-linked seeds |
| Corpus-agent curation | §3.4, pp. 5–6; Figure 2, p. 6; Algorithm 1, p. 5 | Bounded GREP/READ/VEC access, FINAL submission of provenance IDs, trajectory validation of non-seed additions |
| Conditional coverage recovery | Algorithm 1; §3.4, p. 6 | Only configured categories, available capacity, and omitted seeds; answer-blind and strictly additive; no new open-ended search |
| Identity fallback | Algorithm 1; §3.4, pp. 5–6 | Missing/invalid/empty FINAL or an empty validated set returns complete upstream compressed seed context; exhausted access budget requests FINAL without further corpus access |
| Normal answer path | §3.4, p. 6 | Rebuild raw dialogue spans using validated provenance IDs, then supply the evidence context to the answer model |
| Reported defaults | Table 9, p. 14 | 2 hops, top-16 compressed-record pool/seeds, 10 evidence-access calls, at most 16 final IDs; these are manuscript defaults, not a browser demo |
| Existing benchmark labels | Table 1, p. 7 | 86.9% LoCoMo and 80.2% LongMemEval correspond to the OSS-120B configuration. Other backbones have different results. |

The ordinary curated path reconstructs raw evidence. Fallback preserves compressed seeds; the site avoids claiming that raw reconstruction always succeeds or that compressed text can never become answer context.

The native expandable panels are available in English and Traditional Chinese. CLI workflow answers read the same panel content from the DOM and include the manuscript section/figure attribution. Queries can target retrieval, ingestion, or validation/fallback. These are architecture explanations, not live execution of GRACE-Mem or a connection to the research corpus.

## Embedded original figures

- Figure 1, PDF p. 4: extract the original embedded image (xref 6), 1401 × 739, to lossless WebP.
- Figure 2, PDF p. 6: extract the original embedded image (xref 15), 2094 × 709, to lossless WebP.
- Figure 3, PDF p. 12: render the original vector plot at 4×, clip rectangle (105, 190, 485, 410) PDF points, 1520 × 880.
- Figure 4, PDF p. 13: render the original vector plot at 4×, clip rectangle (105, 72, 485, 292) PDF points, 1520 × 880.

All plot labels, legends, colors, axes, and values remain as in the original. Figures 3 and 4 are presented together to preserve the contrast between LongMemEval gains and model-dependent LoCoMo behavior; the captions do not claim universal improvements. Each figure links to the corresponding page of the original PDF. Bilingual alt text provides the plotted values for readers who cannot inspect the images. The original manuscript remains unchanged.
