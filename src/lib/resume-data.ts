import type { ExperienceEntry, Project, SkillCategory, ContactLink, Certification } from '@/types';

export const ABOUT = {
  name: 'Prabhat Kumar',
  title: 'Technical Lead · Senior Software Engineer',
  company: 'Paytm',
  location: 'Erfurt, Thüringen, Germany',
  summary:
    'Seven years at Paytm. Three roles. I joined as a fresh graduate in 2018 and earned my way to ' +
    'Technical Lead by taking ownership of the systems I built — designing them, operating them, ' +
    'and staying accountable for them long after launch. Now pursuing a Masters in Software Engineering.',
  metrics: [
    { label: 'Years at Paytm',          value: '7',   suffix: '+' },
    { label: 'Roles Progressed Through', value: '3',   suffix: ''  },
    { label: 'Systems Owned End-to-End', value: '8',   suffix: ''  },
    { label: 'NER Model Accuracy',       value: '80',  suffix: '%' },
  ],
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'msc-erfurt',
    type: 'education',
    role: 'MSc Software Engineering',
    company: 'Fachhochschule Erfurt',
    location: 'Erfurt, Thüringen, Germany',
    period: 'Oct 2026 – Present',
    current: true,
    bullets: [],
    metrics: [],
    tags: [],
  },
  {
    id: 'career-break',
    type: 'break',
    role: 'Career Break',
    company: '',
    period: 'Aug 2025 – Sep 2026',
    current: false,
    bullets: ['Post-layoff career break'],
    metrics: [],
    tags: [],
  },
  {
    id: 'tl-paytm',
    type: 'work',
    role: 'Technical Lead',
    company: 'Paytm',
    period: 'Apr 2023 – Jul 2025',
    current: false,
    bullets: [
      'Designed real-time SMS parsing pipeline ingesting 10K msg/sec with custom-trained NER models (80% accuracy), generating ₹5M revenue in first 6 months',
      'Architected Platform Fee Calculation Service using Elasticsearch Percolator — 1,000 RPS at P99 <10ms, enabling ₹100M+ annual fee revenue',
      'Built Recharge Plan Service for 1.5M–3M DAU at 2,000 RPS; dynamic plans drove 10% revenue increase',
      'Designed Autopay Notification Service using ES Percolator rule engine; increased user engagement by 20%',
      'Led Spring Boot 2 → 3 migration of payment-critical services with zero downtime; mentored 3 engineers',
      'Built Aerospike-backed distributed rate limiter for BFF service — atomic per-user counters, 24h rolling window, cache-first design; eliminates external API floods during cache failures',
      'Led Kafka-based payment mandate service onboarding 50M+ mandates annually, contributing ₹10M in annual revenue',
    ],
    metrics: [
      { label: 'Throughput', value: '10K', suffix: ' msg/s' },
      { label: 'Revenue Impact', value: '₹100M', suffix: '+' },
      { label: 'P99 Latency', value: '<10', suffix: 'ms' },
    ],
    tags: ['Kafka', 'Python', 'Java', 'Node.js', 'Spring Boot 3', 'Aerospike', 'Elasticsearch', 'Resilience4j'],
  },
  {
    id: 'sse-paytm',
    type: 'work',
    role: 'Senior Software Engineer',
    company: 'Paytm',
    period: 'Nov 2021 – Mar 2023',
    current: false,
    bullets: [
      'Built Digital Catalog Service at 5,000 RPS — 3-tier fallback (Aerospike → ES → MySQL) at P99 6–25ms; zero unplanned downtime over 3 years',
      'Built Mobile Number Detection Service using parallel Telecom API calls with early cancellation; 20% recharge conversion improvement',
      'Implemented Merchant Notification Service for ~1,300 enterprise merchants with per-merchant failure isolation and config-driven retry consumer',
      'Implemented circuit breaker patterns (Resilience4j) and Kafka notification pipelines with at-least-once delivery',
    ],
    metrics: [
      { label: 'RPS', value: '5,000', suffix: '' },
      { label: 'Conversion Gain', value: '20', suffix: '%' },
      { label: 'Merchants', value: '1,300', suffix: '+' },
    ],
    tags: ['Kafka', 'Cassandra', 'Java', 'Node.js', 'Spring Boot', 'Resilience4j', 'Aerospike', 'MySQL'],
  },
  {
    id: 'swe-paytm',
    type: 'work',
    role: 'Software Engineer',
    company: 'Paytm',
    period: 'Sep 2018 – Oct 2021',
    current: false,
    bullets: [
      'Developed REST APIs for recharge and bill payment flows serving millions of daily active users',
      'Applied CQRS pattern to separate read/write paths, improving query performance significantly',
      'Optimized Elasticsearch indices and queries — achieved 25% P99 latency reduction',
      'Improved service reliability by 50% through systematic root-cause analysis and Prometheus/Grafana monitoring',
    ],
    metrics: [
      { label: 'Latency Reduction', value: '25', suffix: '%' },
      { label: 'Reliability Gain', value: '50', suffix: '%' },
    ],
    tags: ['Java', 'Node.js', 'Spring Boot', 'Elasticsearch', 'Prometheus', 'Grafana', 'MySQL'],
  },
  {
    id: 'btech-geu',
    type: 'education',
    role: 'B.Tech — Computer Science',
    company: 'Graphic Era University',
    location: 'Dehradun, Uttarakhand, India',
    period: 'Jul 2014 – Jun 2018',
    current: false,
    bullets: ['CGPA 8.61'],
    metrics: [],
    tags: [],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend',
    icon: '⟨/⟩',
    skills: ['Java', 'Node.js', 'Python', 'Spring Boot', 'Flask', 'Hibernate/JPA', 'REST APIs', 'Microservices', 'Distributed Systems', 'SOA'],
  },
  {
    id: 'messaging',
    name: 'Messaging & Event-Driven',
    icon: '↔',
    skills: ['Apache Kafka', 'Change Data Capture', 'Event-Driven Architecture', 'Async Processing'],
  },
  {
    id: 'databases',
    name: 'Databases & Storage',
    icon: '◫',
    skills: ['SQL', 'MySQL', 'Cassandra', 'Elasticsearch', 'DynamoDB', 'Aerospike', 'Redis', 'Data Modeling', 'Query Optimization'],
  },
  {
    id: 'testing',
    name: 'Testing & Quality',
    icon: '✓',
    skills: ['JUnit', 'Mockito', 'Integration Testing', 'SonarQube'],
  },
  {
    id: 'observability',
    name: 'Observability & Ops',
    icon: '◎',
    skills: ['Prometheus', 'Grafana', 'Datadog', 'New Relic', 'Incident Management', 'RCA'],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: '☁',
    skills: ['AWS (EC2, S3, Lambda)', 'Jenkins', 'CI/CD'],
  },
  {
    id: 'ai',
    name: 'AI-assisted Development',
    icon: '✦',
    skills: ['GitHub Copilot', 'Claude', 'ChatGPT', 'AI-Assisted Coding', 'Test Generation', 'Debugging Assistance'],
  },
  {
    id: 'product',
    name: 'Product Engineering',
    icon: '◈',
    skills: ['Feature Rollouts', 'Experimentation', 'Customer-Centric Development', 'Metrics-Driven Decision Making'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'digital-catalog',
    title: 'Digital Catalog Service',
    description: 'Revenue-critical metadata service at 5,000 RPS with a 3-tier fallback — zero unplanned downtime over 3 years.',
    longDescription:
      'Pre-transaction metadata service handling 5,000 RPS at P99 6–25ms, directly unblocking ₹15M/day in bill payment transactions. Three-tier fallback: Aerospike → Elasticsearch → MySQL. Full ownership for 7 years including JVM heap crisis resolution and ES latency incident response.',
    metrics: [
      { label: 'Throughput', value: '5K', suffix: ' RPS' },
      { label: 'P99 Latency', value: '6–25', suffix: 'ms' },
      { label: 'Daily Revenue', value: '₹15M', suffix: '' },
    ],
    techStack: ['Java', 'Node.js', 'Spring Boot', 'MySQL', 'Elasticsearch', 'Aerospike', 'Kafka', 'AWS S3'],
    category: 'backend',
    size: 'large',
    accentColor: 'cyan',
    archDiagramPath: '/arch-animations/project-1-digital-catalog.html',
    contributions: [
      {
        heading: 'Ownership & Leadership',
        points: [
          'Lead engineer on a 3-person team; full technical ownership for 7 years — accountable for all architectural decisions, incident response, and cross-team coordination',
          'Maintained zero unplanned downtime over 3 years on a service directly unblocking ₹15M/day in bill payment revenue',
        ],
      },
      {
        heading: 'Architecture & Reliability',
        points: [
          'Engineered a three-tier fallback: Aerospike primary cache → Elasticsearch → Aerospike 24h stale-safe fallback → MySQL as last resort',
          'Fallback triggers automatically on ES connection failure or timeout, keeping latency-sensitive client traffic away from MySQL',
          'Sustained P99 latencies of 6–25ms at 5,000 RPS using Aerospike as distributed cache',
        ],
      },
      {
        heading: 'Feature Implementation',
        points: [
          'Admin CRUD APIs with full audit logging: captures previous state, new state, actor identity, and timestamp — stored in ES with monthly index rotation',
          '100MB / 100K-record CSV bulk upload pipeline: S3 storage → MySQL tracking → async processor → ES propagation via Kafka → email notification on completion',
          'Kafka-based ES sync with manual offset commits and ID-based partition routing: prevents premature acknowledgement, guarantees per-biller message ordering',
          'Bulk image upload pipeline: images stored in S3, paths persisted in MySQL, propagated to ES via Kafka — same pipeline as CRUD',
          'Cron-driven automation for scheduled biller activation/deactivation and periodic ES–MySQL data consistency reconciliation',
        ],
      },
      {
        heading: 'Observability & Incident Response',
        points: [
          'Diagnosed and resolved a production JVM heap crisis: horizontal scale-out for immediate stabilisation, root-caused via GC log analysis, permanently fixed via heap parameter tuning',
          'Investigated ES latency anomaly (P99 spiking from 25ms to 10–50s): correlated Grafana dashboards and debug logs to isolate root cause to ES layer, ruled out network, coordinated node restart',
          'Configured full observability stack: Prometheus, Grafana, Datadog, PagerDuty, CloudWatch, and Slack alert channels',
        ],
      },
    ],
  },
  {
    id: 'sms-parsing',
    title: 'Real-time SMS Parsing',
    description: 'End-to-end ML pipeline ingesting 10K msg/sec with custom NER model; 80% extraction accuracy up from 10% baseline.',
    longDescription:
      'Full pipeline: Kafka ingestion → custom Spacy NER → MySQL storage → Reminder pipeline. Shut down initial regex approach at 10% accuracy; rebuilt with self-hosted NER model (compliance-driven, no third-party LLMs). Two-stage classification+NER pipeline for multi-category support. Config-driven hot-swap model deployment. Credit card category generated ₹5M in first 6 months.',
    metrics: [
      { label: 'Throughput', value: '10K', suffix: ' msg/s' },
      { label: 'Accuracy', value: '80', suffix: '%' },
      { label: '6-month Revenue', value: '₹5M', suffix: '' },
    ],
    techStack: ['Java', 'Spring Boot', 'Kafka', 'Python', 'Flask', 'Spacy', 'MySQL', 'AWS S3'],
    category: 'ml',
    size: 'large',
    accentColor: 'purple',
    archDiagramPath: '/arch-animations/project-4-sms-parsing.html',
    contributions: [
      {
        heading: 'Ownership & Leadership',
        points: [
          'Designed and built the entire Java ingestion layer independently; co-designed and co-built the Python ML service with one teammate',
          'Led compliance navigation, stakeholder demos, and cross-team integration with the downstream Reminder Service',
        ],
      },
      {
        heading: 'Architecture Decisions',
        points: [
          'ChatGPT blocked by compliance (customer SMS data cannot leave the platform) → built a fully self-hosted NER model instead',
          'Shut down the initial regex approach (10% accuracy) after one week rather than continue sending incorrect bill reminders to users — recommended by me, agreed by stakeholders',
          'Researched NER independently, built a POC, and presented a live demo to all stakeholders before securing sign-off to rebuild',
        ],
      },
      {
        heading: 'ML Pipeline',
        points: [
          '500K manually labelled training messages + 250K held-out test set; 80% extraction accuracy consistent with production accuracy',
          'Extended from single-stage NER to two-stage pipeline for multi-category support: classification model determines category, NER model extracts category-specific entities — both in a single API call',
          'Config-driven hot-swap model deployment: S3-versioned bundles polled by Python servers, loaded without restart; rollback by reverting config; 1-week monitoring window before deleting prior bundle',
          'Retraining triggered when production accuracy drops below 80%; TechOps labels corrections from daily email report; validated on held-out set before upload',
        ],
      },
      {
        heading: 'Fault Tolerance',
        points: [
          'Multi-stage retry pipeline: in-place exponential backoff → retry topic (with metadata: last retry time, count, next retry) → DLQ; DLQ messages reprocessed when Python API recovers',
          'Async ingest REST API returns immediately to Android client, then batches and publishes to Kafka; Kafka consumers autoscale on lag metrics',
        ],
      },
    ],
  },
  {
    id: 'platform-fee',
    title: 'Platform Fee Calculation',
    description: 'ES Percolator rule engine at 1,000 RPS, P99 <10ms — enabling ₹100M+ annual fee revenue with zero code changes for rule updates.',
    longDescription:
      'Evaluated 4 rule engine approaches (MySQL, Drools, custom, ES Percolator) before selecting Percolator for inverted-index rule matching. Supports AND/OR composition, slab fees, priority resolution, and a mandatory review-before-activation lifecycle. Zero production incidents since launch — validated through rigorous pre-launch load testing.',
    metrics: [
      { label: 'Annual Revenue', value: '₹100M', suffix: '+' },
      { label: 'P99 Latency', value: '<10', suffix: 'ms' },
      { label: 'Throughput', value: '1K', suffix: ' RPS' },
    ],
    techStack: ['Java', 'Spring Boot', 'Elasticsearch (Percolator)'],
    category: 'backend',
    size: 'large',
    accentColor: 'cyan',
    archDiagramPath: '/arch-animations/project-3-platform-fee.html',
    contributions: [
      {
        heading: 'Ownership & Architecture',
        points: [
          'Sole architect on a 2-person team; designed the entire service end-to-end — zero code changes required for any rule update, handled entirely through the Admin panel',
          'Conducted a full POC evaluating four rule engine approaches before selecting ES Percolator: MySQL (index explosion under dynamic schemas), Drools (prohibitive heap overhead), custom engine (maintenance cost) — all rejected',
        ],
      },
      {
        heading: 'Rule Engine Design',
        points: [
          'ES Percolator selected for its inverted-index architecture: rules are indexed as queries; incoming transaction documents are matched against hundreds of complex conditions simultaneously at sub-10ms P99',
          'Rule schema: multi-field AND/OR composition (array membership, numeric ranges, equality), slab-based + flat fee actions, explicit skip mechanism for exclusion and override logic',
          'Priority auto-calculated from rule field specificity; highest-priority applicable rule selected; default rule applies (fee = 0) when no rule matches',
        ],
      },
      {
        heading: 'Rule Lifecycle & Safety',
        points: [
          'Mandatory review-before-activation: all new rules saved with "review" status — never immediately active in a service generating ₹100M+ annually',
          'Impact preview API: before activation, ops applies the rule\'s fee logic to a sample transaction amount and reviews the calculated output',
          'Admin CRUD APIs (internal, bypassing API Gateway) with role-based access for full rule lifecycle management',
        ],
      },
      {
        heading: 'Reliability & Audit',
        points: [
          'Full audit logging for every rule mutation: previous state, new state, actor identity, timestamp — stored in ES with monthly index rotation',
          'Load and performance tested before production launch to validate autoscaling policy, cluster sizing, and ES node config — zero production incidents since go-live',
        ],
      },
    ],
  },
  {
    id: 'recharge-plan',
    title: 'Recharge Plan Service',
    description: '2,000 RPS plan service for 1.5M–3M DAU. Dynamic operator plans drove 10% revenue increase; P99 held at 500ms–1s against 5s telecom APIs.',
    longDescription:
      'Merges live telecom operator recommendations with static catalog plans. Dual-layer Aerospike caching (30min telecom + 15min client). Resilience4j circuit breaker at 80% failure threshold with 2s timeout. Parallel Elasticsearch + Digital Catalog search via CompletableFuture. Custom thread pool (50 core/200 max) for async ES writes.',
    metrics: [
      { label: 'Daily Users', value: '3M', suffix: '' },
      { label: 'Revenue Lift', value: '10', suffix: '%' },
      { label: 'P99 Latency', value: '500', suffix: 'ms' },
    ],
    techStack: ['Java', 'Spring Boot', 'Elasticsearch', 'Aerospike', 'Resilience4j'],
    category: 'backend',
    size: 'medium',
    accentColor: 'purple',
    archDiagramPath: '/arch-animations/project-2-recharge-plan.html',
    contributions: [
      {
        heading: 'Ownership & Architecture',
        points: [
          'Designed and built from scratch on a 3-person team; sole architect and current owner — all features, incident response, and observability',
          'Designed the full system: dual-layer Aerospike caching, circuit breaker config, telecom/static plan merge logic, async ES write pipeline',
        ],
      },
      {
        heading: 'Core Plan API',
        points: [
          'Merges real-time telecom operator plan recommendations with static catalog plans; dynamic details always override static while preserving original priority/ranking order',
          'Dual Aerospike caching strategy: telecom API response cache (30min TTL, keyed by user+operator+mobile) + client response cache (15min TTL, keyed by full request params)',
          'Per-operator timeout configuration to handle operators with significantly different response time profiles',
        ],
      },
      {
        heading: 'Circuit Breaker & Resilience',
        points: [
          'Resilience4j: 80% failure threshold, 2-second timeout, 1 request in half-open state; falls back transparently to static plans — no degradation visible to the user',
          'Cold start (no cache, live telecom API call) is the primary driver of the 1s P99 end; 2s timeout is the hard ceiling protecting against telecom APIs that can take up to 5s at peak',
          'Plan search built with CompletableFuture: parallel queries to Elasticsearch (dynamic) and Digital Catalog Service (static); returns partial results if either source fails',
        ],
      },
      {
        heading: 'Observability & Incident Response',
        points: [
          'Custom thread pool (core 50 / max 200 / queue 1,000) for async ES indexing with 3-retry × 5s delay; cron enforces 3-day TTL on ES indexes via index created_time',
          'Detected and mitigated a 10–15x traffic bombardment spike from a frontend bug that cascaded into ES failures; manually scaled, then added API Gateway rate limit and load-tested autoscaling policy as permanent fixes',
        ],
      },
    ],
  },
  {
    id: 'mobile-detection',
    title: 'Mobile Number Detection',
    description: 'Auto-detects telecom operator on number entry — 500ms P99 via parallel API calls with early cancellation. 20% recharge conversion improvement.',
    longDescription:
      'Parallel calls to 3 telecom operator APIs with early cancellation on first match — bounded by fastest, not slowest. Per-operator Resilience4j circuit breakers. Cassandra primary-key lookups eliminate cache layer complexity. Kafka backfill from confirmed recharge events handles Mobile Number Portability (MNP) automatically.',
    metrics: [
      { label: 'Conversion Lift', value: '20', suffix: '%' },
      { label: 'P99 Latency', value: '500', suffix: 'ms' },
      { label: 'Operators', value: '3', suffix: ' parallel' },
    ],
    techStack: ['Java', 'Spring Boot', 'Cassandra', 'Kafka', 'Resilience4j'],
    category: 'backend',
    size: 'medium',
    accentColor: 'cyan',
    archDiagramPath: '/arch-animations/project-8-mobile-number-detection.html',
    contributions: [
      {
        heading: 'Ownership',
        points: [
          'Designed from scratch and sole developer — full ownership of REST API, Cassandra data model, external API integration, Kafka pipeline, and observability',
        ],
      },
      {
        heading: 'REST API & Freshness Logic',
        points: [
          'Three-tier response path: fresh Cassandra data (<15 days) served directly; stale data triggers external refresh with stale-as-fallback on failure; missing data triggers parallel external calls with manual selection as last resort',
          '15-day freshness window ensures the DB stays current with operator changes (including MNP) without calling external APIs on every request',
        ],
      },
      {
        heading: 'Parallel External API Calls',
        points: [
          'Three telecom operator APIs called simultaneously; first confirmation cancels remaining in-flight calls immediately — response time bounded by fastest operator, not slowest',
          'Per-operator Resilience4j circuit breakers + timeouts; one degraded operator never delays calls to the others → 500ms P99 maintained',
        ],
      },
      {
        heading: 'Cassandra & Kafka Backfill',
        points: [
          'Mobile number as Cassandra primary key: point-lookup performance eliminates the need for an additional in-memory cache layer at this access pattern and RPS',
          'Kafka consumer reads confirmed recharge success events and overwrites Cassandra unconditionally — a completed recharge is the strongest signal of correct operator ownership',
          'Handles Mobile Number Portability (MNP) automatically: user who ported and recharged is updated to the confirmed new operator on the next successful event',
        ],
      },
    ],
  },
  {
    id: 'autopay-notification',
    title: 'Autopay Notification Service',
    description: 'ES Percolator-driven notification routing extracted from Autopay core — zero code changes for rule updates. 20% user engagement increase.',
    longDescription:
      'Extracted notification routing from Autopay service to make rules fully dynamic. Kafka consumers match events against ~100 ES Percolator rules, apply channel/template actions, and publish enriched payloads to the Reminder pipeline. Covers payment success, failure, retry, and retries-exhausted touchpoints.',
    metrics: [
      { label: 'Engagement Lift', value: '20', suffix: '%' },
      { label: 'Active Rules', value: '100', suffix: '+' },
      { label: 'Touchpoints', value: '4', suffix: '/journey' },
    ],
    techStack: ['Java', 'Node.js', 'Spring Boot', 'Elasticsearch (Percolator)', 'Kafka'],
    category: 'notification',
    size: 'medium',
    accentColor: 'purple',
    archDiagramPath: '/arch-animations/project-5-autopay-notification.html',
    contributions: [
      {
        heading: 'Ownership & Business Driver',
        points: [
          'Sole developer end-to-end from architecture to production',
          'Built to eliminate the iteration cost of hardcoded notification rules: previously required code change + QA + deployment for every new rule; now handled through Elasticsearch without touching code',
        ],
      },
      {
        heading: 'ES Percolator Rule Engine',
        points: [
          '~100 rules in production; each autopay event matched against all rules simultaneously; highest-priority rule selected; no-match events logged and skipped',
          'Rule actions specify: notification channels (push/SMS/email/WhatsApp), per-channel message template, and additional fields to inject into the enriched outgoing payload',
          'Applied the same ES Percolator mechanism as the Platform Fee Service — a cross-project pattern built once and applied independently',
        ],
      },
      {
        heading: 'Kafka Architecture',
        points: [
          'Consumers read all autopay lifecycle events from a single inbound topic: payment success, failure, retry, and retries-exhausted',
          'Enriched payloads published to the shared Reminder pipeline topic (same Reminder Service used by the SMS Parsing Service)',
        ],
      },
      {
        heading: 'Design Trade-offs',
        points: [
          'No DLQ: deliberate decision given low traffic volume and lower criticality of a missed notification vs. a financial pipeline; retry with exponential backoff is the safety net',
          'Rules managed by developers (no admin CRUD UI): intentional simplicity tradeoff for a small, low-change rule set at this scale',
        ],
      },
    ],
  },
  {
    id: 'merchant-notification',
    title: 'Merchant Notification Service',
    description: 'Near real-time EBPS payment notifications for 1,300+ enterprise merchants with per-merchant failure isolation and config-driven retry.',
    longDescription:
      'Kafka consumers read EBPS events, resolve per-merchant API config from MySQL, apply failure flags for known-down endpoints, and deliver to each merchant\'s notification API. In-place retries + retry topic. Config-driven retry consumer activates on ops trigger when merchant API recovers — no continuous background process.',
    metrics: [
      { label: 'Merchants', value: '1,300', suffix: '+' },
      { label: 'Notification Types', value: '4', suffix: '' },
      { label: 'Delivery', value: 'Near', suffix: ' real-time' },
    ],
    techStack: ['Java', 'Node.js', 'Spring Boot', 'Kafka', 'MySQL'],
    category: 'notification',
    size: 'medium',
    accentColor: 'cyan',
    archDiagramPath: '/arch-animations/project-7-merchant-notification.html',
    contributions: [
      {
        heading: 'Ownership',
        points: [
          'Sole developer implementing end-to-end from tech lead\'s design document — full coding ownership from doc to production',
        ],
      },
      {
        heading: 'Kafka Pipeline',
        points: [
          'Reads EBPS bill payment events from Kafka; resolves per-merchant API config from MySQL; standardised request contract across all 1,300+ merchants regardless of endpoint or credentials',
          'Events with missing merchant config are dropped with a metric — intentional given progressive merchant onboarding over time',
        ],
      },
      {
        heading: 'Retry & Failure Isolation',
        points: [
          'Up to 3 in-place retries on merchant API failure; on exhaustion, event routed to retry topic with metric + PagerDuty/Slack alert',
          'Per-merchant failure flag set by ops on sustained failures: routes all that merchant\'s events directly to the retry topic, skipping API calls — other merchants are never affected by one merchant\'s downtime',
          'Failure flag cleared when ops confirms the merchant API has recovered, resuming normal delivery',
        ],
      },
      {
        heading: 'Config-Driven Retry Consumer',
        points: [
          'Not continuously running: activated by ops via retry flag only when a merchant API is confirmed healthy — prevents retrying into a still-down endpoint',
          'Drains the retry topic, then self-stops and resets the retry flag to false automatically — a deliberate recovery-gated design, not a background process',
        ],
      },
    ],
  },
  {
    id: 'rate-limiter',
    title: 'Distributed Rate Limiter',
    description: 'Aerospike-backed per-user rate limiter built post cache-failure incident — atomic counters, 24h rolling window, cache-first placement.',
    longDescription:
      'Built after a cache server failure caused unbounded operator API calls during bill fetch. Atomic Aerospike increment (get+write in one transaction) prevents race conditions. Rate check placed after cache lookup — only limits on cache miss where an external call would be made. Dynamic threshold config reloaded without deployment. Reusable utility across any BFF endpoint.',
    metrics: [
      { label: 'Counter Op', value: 'Atomic', suffix: '' },
      { label: 'Window', value: '24', suffix: 'h rolling' },
      { label: 'Design', value: 'Cache', suffix: '-first' },
    ],
    techStack: ['Java', 'Spring Boot', 'Aerospike'],
    category: 'infra',
    size: 'medium',
    accentColor: 'purple',
    archDiagramPath: '/arch-animations/project-6-rate-limiter.html',
    contributions: [
      {
        heading: 'Origin & Problem',
        points: [
          'A cache server failure caused complete cache miss: every bill fetch request hit external operator APIs simultaneously; operators reported uncontrolled traffic surge with no per-user bound',
          'Rate limiter was the direct remediation — also permanently caps blast radius of any future cache failure: even with cache down, per-user external calls are bounded',
        ],
      },
      {
        heading: 'Cache-First Design',
        points: [
          'Rate limit check intentionally placed after cache lookup: a cache hit requires no external API call, so rate limiting it would unnecessarily penalise the user',
          'Only triggered on a cache miss — exactly where an external operator API call would otherwise be made',
        ],
      },
      {
        heading: 'Aerospike Atomic Counter',
        points: [
          'Per-user counter with 24h TTL: resets automatically without explicit cleanup at the end of each window',
          'Single-operation get+increment prevents race conditions: avoids the read-modify-write scenario where two concurrent requests both read the same count and write back the same value',
          'First request in a 24h window initialises the counter from zero and increments atomically in the same call — no separate initialisation logic needed',
        ],
      },
      {
        heading: 'Generic Utility',
        points: [
          'Implemented as a reusable utility class: any BFF controller passes API identifier + user ID to invoke — not limited to bill fetch',
          'Threshold stored in DB and periodically reloaded into running config — adjustable without deployment or restart',
        ],
      },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [];

export const CONTACT: ContactLink[] = [
  {
    type: 'email',
    href: 'bWFpbHRvOmtwcmFiaGF0OTg1QGdtYWlsLmNvbQ==',
    label: 'a3ByYWJoYXQ5ODVAZ21haWwuY29t',
    encoded: true,
    encodedLabel: true,
  },
  {
    type: 'linkedin',
    href: 'aHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vcHJhYmhhdGt1bWFyMzg=',
    label: 'Q29ubmVjdCBvbiBMaW5rZWRJbg==',
    encoded: true,
    encodedLabel: true,
  },
  {
    type: 'github',
    href: 'aHR0cHM6Ly9naXRodWIuY29tL1ByYWJoYXQzOA==',
    label: 'VmlldyBvbiBHaXRIdWI=',
    encoded: true,
    encodedLabel: true,
  },
];
