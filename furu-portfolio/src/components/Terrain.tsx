import { useEffect, useRef } from "react";

/** Decorative terrain: no geographic measurements or map controls. */
export default function Terrain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, last = 0, visible = true;
    function draw(time = 0) {
      if (!canvas || !ctx) return;
      const w = canvas.clientWidth, h = canvas.clientHeight;
      const d = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== Math.round(w * d) || canvas.height !== Math.round(h * d)) {
        canvas.width = Math.round(w * d); canvas.height = Math.round(h * d);
      }
      ctx.setTransform(d, 0, 0, d, 0, 0); ctx.clearRect(0, 0, w, h);
      const t = motion.matches ? 0 : time * .00014, n = 46, m = 32;
      function point(i: number, j: number) {
        const u = i / n, v = j / m;
        const z = 40 * Math.sin(u * 8 + v * 3 + t) + 24 * Math.cos(v * 7 - u * 4 - t * .7) + 60 * Math.exp(-((u - .7) ** 2 + (v - .55) ** 2) * 20);
        return [u * (w + 100) - 50 + (v - .5) * 65, v * (h + 160) - 80 - z];
      }
      ctx.lineWidth = .65; ctx.strokeStyle = "rgba(255,0,127,.38)";
      for (let j = 0; j <= m; j++) {
        ctx.beginPath();
        for (let i = 0; i <= n; i++) { const [x,y] = point(i,j); if (i) ctx.lineTo(x,y); else ctx.moveTo(x,y); }
        ctx.stroke();
      }
      ctx.strokeStyle = "rgba(255,70,160,.25)";
      for (let i = 0; i <= n; i++) {
        ctx.beginPath();
        for (let j = 0; j <= m; j++) { const [x,y] = point(i,j); if (j) ctx.lineTo(x,y); else ctx.moveTo(x,y); }
        ctx.stroke();
      }
      [[5,7],[12,22],[19,5],[23,26],[29,12],[35,23],[40,8],[43,28],[7,29]].forEach(([i,j],k) => {
        const [x,y] = point(i,j), pulse = motion.matches ? 1 : .78 + .22 * Math.sin(t * 5 + k);
        ctx.strokeStyle = `rgba(255,80,170,${pulse * .65})`;
        ctx.beginPath(); ctx.arc(x,y,8 + pulse * 3,0,Math.PI * 2); ctx.stroke();
        ctx.fillStyle = "#ff68b1"; ctx.fillRect(x-2,y-2,4,4);
        ctx.beginPath(); ctx.moveTo(x-14,y); ctx.lineTo(x-7,y); ctx.moveTo(x+7,y); ctx.lineTo(x+14,y); ctx.moveTo(x,y-14); ctx.lineTo(x,y-7); ctx.moveTo(x,y+7); ctx.lineTo(x,y+14); ctx.stroke();
        ctx.font = "9px monospace"; ctx.fillText(`P${String(k+1).padStart(2,"0")}`,x+15,y-10);
      });
    }
    function animate(time: number) {
      if (time - last > 40) { if (visible && !document.hidden) draw(time); last = time; }
      frame = requestAnimationFrame(animate);
    }
    function restart() { cancelAnimationFrame(frame); draw(); if (!motion.matches) frame = requestAnimationFrame(animate); }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    const size = new ResizeObserver(() => draw(performance.now()));
    observer.observe(canvas); size.observe(canvas); motion.addEventListener("change", restart); restart();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); size.disconnect(); motion.removeEventListener("change", restart); };
  }, []);
  return <canvas ref={ref} className="hero-terrain" aria-hidden="true" />;
}
