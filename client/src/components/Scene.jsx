import { useEffect, useRef } from 'react';

export default function Scene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let w = 0;
    let h = 0;

    const COUNT = 150;
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: 180 };

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random(),
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          alpha: 0.15 + Math.random() * 0.45,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = 'rgba(16,185,129,0.035)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16,185,129,${0.09 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Connection to mouse
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(52,211,153,${0.25 * (1 - mdist / mouse.radius)})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Draw dots
      for (const p of particles) {
        const size = 1.2 + p.z * 2.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16,185,129,${p.alpha * p.z})`;
        ctx.fill();
      }
    }

    function update() {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }
    }

    function loop() {
      update();
      draw();
      animId = requestAnimationFrame(loop);
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    resize();
    init();
    loop();

    const onResize = () => { resize(); init(); };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.07)_0%,transparent_75%)]" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
      />
    </div>
  );
}
