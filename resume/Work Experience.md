---
draft: "true"
Last updated at: 2026-04-13
---


Sanitized work-experience context for AI-assisted resume tailoring.
This version removes internal codenames and uses external-facing terminology.

# Experience at Meta (Apr 2024 - Mar 2026)

## Contribution Scale
- 178 code reviews/changes across platform, simulation, data, and testing workstreams.
- 112,392 lines changed across production and test code.
- 146 completed tasks across feature delivery, infrastructure, reliability, data processing, testing, and performance optimization.
- 6+ recognitions from senior engineers and technical leads.
- 5 design/analysis documents authored and shared across teams.

## High-Signal Resume Themes
- Built and scaled an audio simulation platform for synthetic data generation used by speech and sound-understanding teams.
- Designed a next-generation, config-driven scene generation framework with dependency-aware generation and deterministic traversal.
- Improved throughput and reliability of distributed data pipelines, including major write-path and scheduling performance gains.
- Established robust automated testing and regression infrastructure for simulation correctness and release confidence.
- Added researcher-facing visualization and diagnostics capabilities to reduce dependence on platform engineers.

## Selected Impact Stories

### 1) Core simulation platform ownership
- Modernized core simulation flow to support multi-configuration execution in a single run (for multiple listener/device profiles).
- Built structured signal and label handling, including stable timestamp precision and end-to-end label validation.
- Added configuration validation, concurrency safety, and memory-safe metadata handling in large simulation jobs.
- Extended simulation I/O support across common acoustic formats and improved interoperability for downstream tooling.

### 2) Next-generation scene generation system
- Built a generator-based scene creation engine with dependency graph resolution, cycle detection, and topological execution.
- Implemented both random sampling and cartesian product generation modes for exploratory and exhaustive experiments.
- Added probabilistic placement controls, 3D field-of-view constraints, and standardized orientation handling.
- Improved developer experience with actionable configuration error reporting and unified CLI support for YAML-driven jobs.

### 3) Scalability, distributed systems, and performance
- Re-architected workflow execution to stream scene batches and schedule simulation incrementally instead of batch accumulation.
- Parallelized object-storage write paths with bounded concurrency, improving throughput from 1.16 to 24.44 scenes/sec (21x) and reducing 100-scene runtime from 86.54s to 4.09s.
- Built distributed write coordination for multi-worker metadata publishing, removing single-writer bottlenecks.
- Introduced memory-conscious pipeline patterns for large runs (100K+ outputs), preventing OOM and oversized serialization failures.
- Improved graph traversal performance by replacing recursive traversal with Kahn's algorithm (~9% throughput gain at scale).

### 4) Data integration and tooling
- Integrated externally generated acoustic impulse response datasets into the simulation ecosystem, including format conversion and metadata standardization.
- Built reusable loaders/converters for dataset onboarding and long-term maintainability across multiple data drops.
- Added calibration-aware post-processing features (e.g., noise mixing and event-preserving transforms) for higher-fidelity synthetic outputs.

### 5) Testing and engineering quality
- Built broad regression and end-to-end coverage across simulation modes, data formats, and edge-case configurations.
- Automated expectation generation/updates for regression tests, replacing manual artifact workflows.
- Stabilized flaky tests and fixed CI reliability issues across multiprocessing and reproducibility-sensitive paths.

### 6) Researcher self-service and observability
- Built visualization pipelines for scene placement, waveform, and frequency-domain diagnostics.
- Added run-level metrics and output-size estimation for better capacity planning and operational visibility.
- Increased researcher autonomy by making debugging and dataset inspection workflows self-serve.

### 7) LLM-powered internal productivity tooling
- Built **Team Brain**, an internal context engine that ingested Jira activity, code changes, Google Drive docs, meeting notes, and planning artifacts; used LLM synthesis to maintain a live team context and auto-generate weekly status summaries via cron.
- Surfaced current ownership and workstream visibility across the team without requiring direct check-ins, reducing async communication overhead by **3--4 hours per engineer per week**.
- Built an LLM-backed infrastructure debugging assistant for the simulation platform that reasoned over failed-run logs, prior known issues, and current system configuration to recommend optimal fixes.
- The assistant autonomously resolved **99\% of support/debugging queries**, removing most ad-hoc troubleshooting load from the engineering team.

## Technical Focus Areas (for JD matching)
- `Python`
- `Distributed systems`
- `Data pipelines`
- `Workflow orchestration`
- `Simulation systems`
- `Signal processing`
- `Performance optimization`
- `Concurrency / multiprocessing`
- `Testing and CI reliability`
- `Observability and metrics`
- `Data format interoperability`
- `Large-scale synthetic data generation`

## Optional Resume Bullet Bank (Reusable)
- Built a config-driven simulation platform that generated large-scale synthetic audio datasets for ML model training and evaluation.
- Designed dependency-aware generation workflows with deterministic execution and cycle-safe graph traversal.
- Improved pipeline throughput by 21x through bounded-concurrency write parallelization and streaming workflow architecture.
- Implemented distributed coordination mechanisms for multi-worker metadata publishing and scalable table ingestion.
- Established automated regression infrastructure covering multiple simulation modes, edge cases, and format compatibility.
- Added visualization and observability tooling that reduced debugging time and improved researcher self-service.

# Experience at Highbreed (Principal Engineer)
- Built end-to-end AWS infrastructure for deployment, operations, and observability.
- Containerized services with Docker, deployed images through ECR, and set up autoscaling-backed delivery workflows.
- Implemented fully automated CI/CD pipelines using Jenkins.
- Set up ELK-based observability for centralized logs and operational monitoring.
- Integrated Elasticsearch-backed application search with eventual-consistency sync from the relational database.
- Designed the relational data model for core product workflows.
- Mentored a team of 3 engineers through code reviews and design discussions.
- Tech stack: FastAPI, Python, React, PostgreSQL, SQLAlchemy, AWS, ELK, Jenkins.

# Experience at impress.ai
- Reduced ATS synchronization time by **90\%** through pipeline optimization and parallelized processing.
- Built a transactional email service handling **100K+ daily emails** with automated bounce and spam handling using AWS SES, SQS, and SNS.
- Owned and maintained ATS integrations, including Greenhouse and Workday.
- Tech stack: Django, Python, AWS, Redis.

# Personal Projects
- **gokey** | Go | github.com/sarthakvk/gokey  
  Fault-tolerant distributed key-value store using HashiCorp Raft; implemented FSM operations (`Apply`, `Snapshot`, `Restore`), cluster membership management, and an HTTP API for multi-node deployments with leader election and log replication.
- **algo-trade** | Python, AWS S3/EC2 | github.com/sarthakvk/algo-trade  
  Streams full-mode tick data for NSE instruments through 3 parallel broker WebSocket connections; producer-consumer pipeline with bounded backpressure writes ZSTD-compressed Parquet (Hive-style date partitions), queryable via DuckDB.  
  Fully autonomous daily lifecycle: pre-market startup, intraday collection, S3 upload with SHA-256 verification, and post-close shutdown; includes reverse-engineered TOTP authentication for headless execution.
- **Real-time bidirectional translation** | Python | github.com/sarthakvk/rtt  
  FastAPI WebSocket backend that streams chunked audio through Azure Cognitive Services STT \(\rightarrow\) translation \(\rightarrow\) TTS with async concurrency for low-latency multi-device playback.
- **Graph Pathfinder Visualizer** | TypeScript | github.com/sarthakvk/pathfinder-visualizer  
  Interactive grid visualizer for pathfinding algorithms, including A*, BFS, DFS, and Dijkstra.
