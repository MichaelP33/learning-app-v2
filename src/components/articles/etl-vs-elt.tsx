import React from "react";

export default function EtlVsElt() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Foundations & Terminology</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>ETL</strong> (Extract &rarr; Transform &rarr; Load) performs computation prior to loading into the warehouse, often in an external engine such as an <code>ETL server</code>, <code>Spark</code>, or a managed job system.
              </li>
              <li>
                <strong>ELT</strong> (Extract &rarr; Load &rarr; Transform) lands raw data first, then uses warehouse-native compute (<code>Snowflake</code>, <code>BigQuery</code>, <code>Databricks SQL</code>) to transform with SQL/DBT after loading.
              </li>
              <li>
                <strong>Schema-on-write vs schema-on-read</strong>: ETL generally enforces structure before storage (write), while ELT favors storing raw data then applying structure at query/transform time (read).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where Transformation Occurs</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>ETL engines</strong> (outside the warehouse) centralize compute for heavy joins, enrichments, and data quality rules. They can keep your warehouse usage low but add an extra runtime to operate.
              </li>
              <li>
                <strong>Warehouse-native ELT</strong> leverages elastic SQL engines and orchestration (e.g., <code>dbt</code>) so teams model data with familiar SQL and materialize views incrementally.
              </li>
              <li>
                <strong>Staging layers</strong>: both patterns benefit from <code>raw</code> &rarr; <code>staging</code> &rarr; <code>prod</code> zones to isolate untrusted data, apply validations, and publish curated tables.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Latency, Cost, and Complexity Trade‑offs</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Latency</strong>: ETL often runs as scheduled jobs (e.g., hourly), while ELT can run more frequently and exploit warehouse autoscaling; streaming ELT is possible but requires careful <code>exactly-once</code> semantics.
              </li>
              <li>
                <strong>Cost</strong>: ETL shifts compute away from the warehouse (saving <code>query credits</code>) but introduces separate infra. ELT consolidates compute in the warehouse where <code>storage is cheap</code> and compute is elastic.
              </li>
              <li>
                <strong>Complexity</strong>: ETL increases operational surface area (runtimes, clusters). ELT centralizes tooling but may require stronger governance for <code>resource monitors</code>, <code>role-based access</code>, and 
                <code>query optimization</code>.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Start with ELT when your team is SQL‑centric and wants faster iteration on models; add ETL for heavy pre-processing (e.g., <code>PII tokenization</code>, <code>ML feature generation</code>).
              </li>
              <li>
                Use a layered zone strategy (<code>raw</code>, <code>staging</code>, <code>prod</code>) and enforce contracts at zone boundaries with <code>expectations</code> and row-count checks.
              </li>
              <li>
                Choose file formats that match how you query data (<code>Parquet</code> with <code>column pruning</code>, partitioning by <code>ingest_date</code> for backfills).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-600 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">ROI Drivers and Risks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Time-to-insight</strong>: ELT shortens feedback loops; analysts adjust models quickly using <code>pull requests</code> and <code>dbt tests</code>.
              </li>
              <li>
                <strong>Cost predictability</strong>: ETL may fix compute budgets outside the warehouse; ELT scales with usage and needs <code>query cost visibility</code> and guardrails.
              </li>
              <li>
                <strong>Risk</strong>: centralizing raw data raises governance needs (data classification, <code>masking policies</code>, access tiers) to avoid &ldquo;landfill&rdquo; warehouses.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Team Skills & Operating Model</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                ELT aligns with analytics engineers who work in SQL and versioned models; ETL favors data platform engineers comfortable with <code>Spark</code>/<code>Airflow</code>.
              </li>
              <li>
                Platform teams should offer paved paths: <code>connectors</code>, <code>templates</code>, and data quality checks, plus guidance on data contracts and SLAs.
              </li>
              <li>
                Establish stewardship for sensitive datasets and define &ldquo;gold&rdquo; vs &ldquo;silver&rdquo; layers with ownership and refresh cadence.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Publish cost dashboards (e.g., <code>credits by model</code>, <code>top queries</code>, <code>warehouse queues</code>) and set budgets with alerts.
              </li>
              <li>
                Define refresh policies: near‑real‑time for key KPIs, daily for long‑tail reporting, and backfill procedures documented in runbooks.
              </li>
              <li>
                Provide self‑service staging sandboxes with anonymized data so exploratory work never contaminates production tables.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reference Architecture</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Ingest via managed connectors (<code>Fivetran</code>/<code>Airbyte</code>) or custom <code>CDC</code> into <code>raw</code>; materialize <code>staging</code> with validations; publish <code>gold</code> marts via <code>dbt</code>.
              </li>
              <li>
                Use <code>Terraform</code>/<code>Pulumi</code> to provision warehouses, roles, resource monitors, and <code>object tagging</code> for classification.
              </li>
              <li>
                Gate changes with CI: <code>dbt test</code>, <code>data-diff</code>, and sample-level <code>expectations</code>; require approvals for PII changes.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operations & Guardrails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Implement <code>idempotent</code> loads with <code>merge</code> or <code>upsert</code>; track high‑water marks (<code>max(updated_at)</code>) for incremental ELT.
              </li>
              <li>
                For ETL, isolate heavy preprocessing (e.g., <code>pyspark</code>) and push curated outputs to the warehouse; manage retries and <code>dead-letter queues</code> for bad records.
              </li>
              <li>
                Instrument with <code>OpenTelemetry</code> traces, <code>query tags</code>, and <code>lineage</code> metadata; page on SLA breaches and warehouse queue saturation.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Start with ELT + dbt for speed; add ETL nodes for CPU‑intensive transforms or when isolating secrets/compliance logic.
              </li>
              <li>
                Keep <code>raw</code> immutable with retention; publish <code>staging</code> as <code>incremental models</code> and <code>gold</code> as well‑documented views.
              </li>
              <li>
                Maintain 
                &ldquo;backfill playbooks&rdquo; that document parameterized runs, cost expectations, and rollback steps.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}