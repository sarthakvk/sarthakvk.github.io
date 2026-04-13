---
draft: "true"
---
## Functional Requirements
- A logger is able to collect logs from a application
- A user is able to view near realtime logs(5 sec delay)
- User can search through logs
- User can filter logs based on: time range, keywords, and log stream

## Non Functional Requirements
- **Scale**
  - 1 Million Registered services
  - 1 Million events per service per day
  - 100k DAU
- System will target high availability for log ingestion — Which means the system will be always available for accepting new logs, with eventual consistency for log reads (<5 secs)
- Low latency for log queries (<500ms)
- High throughput for ingestion, must be able to ingest peak traffic logs
- A log text can be at max 1 Kb

## Core Entities
1. Logs {timestamp, type, service_id, instance_id, log}
2. Users


## Access Pattern
- Paginated Logs Query (50 events per query) ~50KB

## BOE estimates
**System level**
- At 1 Million services generating 1 million logs per day ~ 12 Million events/sec at 5x peak ~60 Million events/sec
- We generate ~ 1PB data generated daily.
- Each DAU does 10 queries thats 1 Million queries/day ~ 12 QPS at 5x peak ~ 60 QPS

**Service Level**
- 60 events/sec at peak
- 1 GB data daily generated
- reads scale at service level is negligible (100 Queries per day)

## Component Diagram

