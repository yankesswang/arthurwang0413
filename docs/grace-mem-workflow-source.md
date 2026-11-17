# GRACE-Mem workflow provenance

Source: user-supplied `Mem_KG.pdf`, 22-page GRACE-Mem research manuscript. Text and rendered Figures 1–2 were reviewed. The PDF itself is not included in the website. The public UI contains concise process summaries, not a reproduction of the manuscript.

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
