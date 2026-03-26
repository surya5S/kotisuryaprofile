import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Burst {
  x: number;
  y: number;
  life: number;   // 0 → 1 (progress)
  rays: { angle: number; length: number }[];
}

const BASE_SPEED = 0.4;
const HOVER_SPEED = 1.2;
const CONNECT_DISTANCE = 120;
const PARTICLE_COUNT = 120;
const BURST_DURATION = 55; // frames

function makeBurst(x: number, y: number): Burst {
  const RAY_COUNT = 8;
  return {
    x,
    y,
    life: 0,
    rays: Array.from({ length: RAY_COUNT }, (_, i) => ({
      angle: (i / RAY_COUNT) * Math.PI * 2 + Math.PI / 8,
      length: 28 + Math.random() * 20,
    })),
  };
}

function drawStar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  outerR: number,
  innerR: number,
  points: number,
  color: string
) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const px = x + Math.cos(angle) * r;
    const py = y + Math.sin(angle) * r;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

export default function ParticleBackground({
  hovered,
  clickPos,
}: {
  hovered: boolean;
  clickPos: { x: number; y: number } | null;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoveredRef = useRef(false);
  hoveredRef.current = hovered;

  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const burstsRef = useRef<Burst[]>([]);
  const prevClickRef = useRef<{ x: number; y: number } | null>(null);

  // Spawn burst when clickPos changes
  if (
    clickPos &&
    (prevClickRef.current?.x !== clickPos.x ||
      prevClickRef.current?.y !== clickPos.y)
  ) {
    prevClickRef.current = clickPos;
    burstsRef.current.push(makeBurst(clickPos.x, clickPos.y));
  }

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * BASE_SPEED * 2,
      vy: (Math.random() - 0.5) * BASE_SPEED * 2,
      radius: Math.random() * 1.5 + 0.8,
    }));

    const isDark = () => document.documentElement.classList.contains("dark");

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const speed = hoveredRef.current ? HOVER_SPEED : BASE_SPEED;
      const dark = isDark();
      const dotColor = dark ? "rgba(167,139,250," : "rgba(109,40,217,";
      const lineColor = dark ? "rgba(139,92,246," : "rgba(124,58,237,";
      const burstColor = dark ? [196, 148, 255] : [139, 58, 237];

      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;

      // Update & draw particles
      for (const p of particles) {
        const mag = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (mag > 0) {
          const scale = speed / mag;
          p.vx += (p.vx * scale - p.vx) * 0.05;
          p.vy += (p.vy * scale - p.vy) * 0.05;
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > w) { p.x = w; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > h) { p.y = h; p.vy *= -1; }
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DISTANCE) {
            const alpha = (1 - dist / CONNECT_DISTANCE) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `${lineColor}${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}0.35)`;
        ctx.fill();
      }

      // Draw & update bursts
      const [r, g, b] = burstColor;
      burstsRef.current = burstsRef.current.filter((burst) => {
        const t = burst.life / BURST_DURATION; // 0→1
        const easeOut = 1 - t * t;             // fast out, slow fade
        const alpha = easeOut * 0.9;

        // Outer glow ring
        const ringR = t * 48;
        const grad = ctx.createRadialGradient(
          burst.x, burst.y, 0,
          burst.x, burst.y, ringR
        );
        grad.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.35})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(burst.x, burst.y, ringR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Rays
        ctx.save();
        ctx.lineWidth = 1.5;
        for (const ray of burst.rays) {
          const len = ray.length * t;
          const ex = burst.x + Math.cos(ray.angle) * len;
          const ey = burst.y + Math.sin(ray.angle) * len;
          const rayGrad = ctx.createLinearGradient(burst.x, burst.y, ex, ey);
          rayGrad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
          rayGrad.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.beginPath();
          ctx.strokeStyle = rayGrad;
          ctx.moveTo(burst.x, burst.y);
          ctx.lineTo(ex, ey);
          ctx.stroke();

          // Sparkle dot at ray tip
          ctx.beginPath();
          ctx.arc(ex, ey, 1.5 * easeOut, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.8})`;
          ctx.fill();
        }
        ctx.restore();

        // 4-pointed star at center
        const starR = 5 * easeOut;
        drawStar(
          ctx,
          burst.x,
          burst.y,
          starR,
          starR * 0.4,
          4,
          `rgba(${r},${g},${b},${alpha})`
        );

        burst.life += 1;
        return burst.life < BURST_DURATION;
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}
