import React from "react";

export default function GraphDatabases() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Nodes, edges, and properties</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Graph databases model entities as nodes and relationships as edges, with properties on both. This structure prioritizes relationships as first‑class citizens (relational joins become direct traversals guided by indexes on adjacency lists). Instead of flattening relationships into foreign keys, graphs store them explicitly so hops are cost‑predictable (friend‑of‑friend queries read edges directly rather than scanning join tables repeatedly).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Properties keep metadata close to the connections they describe: an edge can carry &ldquo;since&rdquo; timestamps or weights for ranking (recommendations rely on these weights to compute relevance efficiently). Constraints and indexes on labels and properties bound traversal search spaces, keeping queries fast even as datasets grow (cardinality estimates guide planners to the tightest starting set).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Traversals and query models</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Query languages like Cypher, Gremlin, and openCypher describe pattern matches over nodes and edges (the query reads like a shape with variable bindings). Traversals can be breadth‑first for shortest paths or depth‑first for exploratory graph walks (limit depth and uniqueness to avoid cycles that revisit the same nodes under complex patterns). Path predicates and variable‑length edges capture real‑world relationships compactly.
            </p>
            <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Anchor queries with selective indexes on labels and key properties. Start from the smallest candidate set and expand; do not begin traversal from high‑degree hubs (hubs explode search space and produce timeouts under concurrency).
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define labels and property indexes early; enforce uniqueness where applicable.</li>
              <li>Bound traversal depth and set time limits; prevent runaway graph expansion.</li>
              <li>Keep large blobs off nodes/edges; store references to external object storage.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common patterns: friend‑of‑friend, recommendations, and risk</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Graphs shine when relationships drive value: social feeds, fraud rings, knowledge graphs, and supply networks. Friend‑of‑friend suggests connections beyond immediate neighbors, while weighted paths power recommendations (content discovery benefits from &ldquo;people who follow similar creators&rdquo; computed from edge similarity). Risk and compliance use graph cycles and centrality to flag suspicious clusters quickly.
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Compared to relational joins, traversals avoid repeated join planning across many tables (high‑degree nodes can still cause hotspots if not bounded and indexed carefully). Multi‑hop queries that are awkward in SQL map naturally to concise patterns in graph DSLs (teams iterate faster when the query matches mental models of relationships).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cost, scaling, and organizational fit</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Graphs reward narrow, relationship‑heavy use cases. For bulk analytics and scans, warehouses remain superior. Operationally, teams plan for memory‑heavy caches of adjacency lists and careful sharding across labels (cross‑partition traversals are expensive and require thoughtful keys). Introduce graphs where they replace multiple brittle join tables with simpler traversals and clearer schemas (scope narrowly to start and expand as wins accumulate).
            </p>
            <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Educate stakeholders with concrete graphs of your domain. Visualizing nodes and edges clarifies why a graph unlocks simpler queries (hands‑on diagrams accelerate buy‑in and keep scope realistic during early adoption).
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Target a single relationship‑heavy feature first; avoid platform rewrites.</li>
              <li>Define SLAs around traversal depth and response time; monitor per‑label metrics.</li>
              <li>Document graph data ownership and refresh strategies to prevent drift.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Query models, indexes, and traversal safety</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Author Cypher queries as readable patterns and verify with explain profiles that the starting set is selective (begin from a label+property index and expand). Add uniqueness constraints to avoid duplicating nodes during merges, and use &ldquo;exists&rdquo;/type checks on properties to keep traversals precise (data hygiene directly improves query latency and stability during growth).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Implement guardrails: maximum traversal depth, total relationship expansions, and query timeouts. Cache small subgraphs that are requested frequently (e.g., user‑centric neighborhoods) to reduce repeated traversals on hot paths. Batch writes and prefer idempotent upserts to keep the graph consistent after retries or partial failures in upstream services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Integration patterns and data pipelines</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Build ingestion pipelines that transform relational or document data into graph structures with stable IDs (ETL jobs should map keys consistently so merges remain deterministic). For bidirectional sync, publish change events with enough context to update affected subgraphs quickly (downstream consumers apply idempotent updates and invalidate caches with fine granularity).
            </p>
            <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Treat the graph as a serving layer for relationship‑centric queries, not a dumping ground. Keep raw facts in systems of record and project them into the graph (clear ownership boundaries simplify audits and rollback strategies).
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create label/property indexes; profile queries to confirm selective start sets.</li>
              <li>Enforce traversal limits and timeouts; cache small neighborhoods for hot users.</li>
              <li>Ingest via stable IDs; treat the graph as a projection of authoritative systems.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
