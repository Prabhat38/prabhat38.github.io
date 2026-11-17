'use client';

import { useRef, useMemo, useEffect, useState } from 'react';

const CATEGORY_COLORS: Record<string, string> = {
  backend:      '#3d7fff',
  messaging:    '#eecc00',
  databases:    '#9933ff',
  testing:      '#22cc88',
  observability:'#ff6611',
  cloud:        '#55eebb',
  ai:           '#ff44bb',
};

const SKILLS_FLAT = [
  { name: 'Java',           category: 'backend'       },
  { name: 'Node.js',        category: 'backend'       },
  { name: 'Python',         category: 'backend'       },
  { name: 'Spring Boot',    category: 'backend'       },
  { name: 'Flask',          category: 'backend'       },
  { name: 'Hibernate/JPA',  category: 'backend'       },
  { name: 'Microservices',  category: 'backend'       },
  { name: 'Apache Kafka',   category: 'messaging'     },
  { name: 'MySQL',          category: 'databases'     },
  { name: 'Cassandra',      category: 'databases'     },
  { name: 'Elasticsearch',  category: 'databases'     },
  { name: 'DynamoDB',       category: 'databases'     },
  { name: 'Aerospike',      category: 'databases'     },
  { name: 'Redis',          category: 'databases'     },
  { name: 'JUnit',          category: 'testing'       },
  { name: 'Mockito',        category: 'testing'       },
  { name: 'SonarQube',      category: 'testing'       },
  { name: 'Prometheus',     category: 'observability' },
  { name: 'Grafana',        category: 'observability' },
  { name: 'Datadog',        category: 'observability' },
  { name: 'New Relic',      category: 'observability' },
  { name: 'AWS',            category: 'cloud'         },
  { name: 'Jenkins',        category: 'cloud'         },
  { name: 'spaCy',          category: 'ai'            },
  { name: 'NER Models',     category: 'ai'            },
];

function fibSphere(n: number): [number, number, number][] {
  const pts: [number, number, number][] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const t = phi * i;
    pts.push([Math.cos(t) * r, y, Math.sin(t) * r]);
  }
  return pts;
}

export function SkillSphere({ asBackground = false }: { asBackground?: boolean } = {}) {
  const animRef = useRef({ ry: 0, rx: 0.18, paused: false });
  const frameRef = useRef(0);
  const tickRef = useRef(0);
  const [tick, setTick] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);

  const unitPositions = useMemo(() => fibSphere(SKILLS_FLAT.length), []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const state = animRef.current;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!state.paused) {
        state.ry += dt * 0.3;
        state.rx += dt * 0.08;
      }
      // Throttle to ~30fps React re-renders
      tickRef.current++;
      if (tickRef.current % 2 === 0) setTick((t) => t + 1);
      frameRef.current = requestAnimationFrame(loop);
    };
    frameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  void tick; // consumed to trigger re-render

  // Spread wider as a backdrop so it reaches behind the full card grid
  const R = asBackground ? 330 : 180;
  const { ry, rx } = animRef.current;
  const cosY = Math.cos(ry), sinY = Math.sin(ry);
  const cosX = Math.cos(rx), sinX = Math.sin(rx);

  const items = SKILLS_FLAT.map((skill, i) => {
    const [ux, uy, uz] = unitPositions[i];
    // Rotate Y
    const x1 = ux * cosY + uz * sinY;
    const z1 = -ux * sinY + uz * cosY;
    // Rotate X
    const y2 = uy * cosX - z1 * sinX;
    const z2 = uy * sinX + z1 * cosX;

    const depth = (z2 + 1) / 2; // 0=back, 1=front
    const isHov = hovered === skill.name;
    const color = CATEGORY_COLORS[skill.category] ?? '#aaa';

    return {
      ...skill,
      sx: x1 * R,
      sy: -y2 * R,
      z2,
      opacity: asBackground
        ? Math.max(0.06, depth * 0.5 + 0.06)
        : isHov ? 1 : Math.max(0.06, depth * 0.9 + 0.06),
      scale:   isHov ? 1.3 : 0.72 + depth * 0.45,
      color,
      isHov,
    };
  }).sort((a, b) => a.z2 - b.z2);

  return (
    <div
      className={`relative w-full flex items-center justify-center select-none ${
        asBackground ? 'h-full pointer-events-none' : ''
      }`}
      style={asBackground ? undefined : { height: 420 }}
    >
      {/* Central glow */}
      <div
        className="absolute rounded-full pointer-events-none z-10"
        style={{
          width: 20, height: 20,
          background: '#00D9FF',
          boxShadow: '0 0 0 6px rgba(0,217,255,0.12), 0 0 60px 30px rgba(0,217,255,0.18), 0 0 120px 60px rgba(0,217,255,0.06)',
        }}
      />
      {/* Ring hint */}
      <div
        className="absolute rounded-full border border-white/5 pointer-events-none"
        style={{ width: R * 2, height: R * 2 }}
      />

      {items.map((item) => (
        <span
          key={item.name}
          className="absolute font-mono cursor-default"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(calc(-50% + ${item.sx}px), calc(-50% + ${item.sy}px)) scale(${item.scale})`,
            color: item.color,
            opacity: item.opacity,
            fontSize: 12,
            fontWeight: item.isHov ? 700 : 500,
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
            textShadow: item.isHov || item.z2 > 0.3
              ? `0 0 10px ${item.color}99`
              : 'none',
            transition: 'opacity 0.15s, transform 0.15s, font-weight 0.1s',
            zIndex: Math.round(item.z2 * 10) + 10,
          }}
          onMouseEnter={asBackground ? undefined : () => {
            animRef.current.paused = true;
            setHovered(item.name);
          }}
          onMouseLeave={asBackground ? undefined : () => {
            animRef.current.paused = false;
            setHovered(null);
          }}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}
