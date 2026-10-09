const canvas = document.getElementById('matrix-rain') as HTMLCanvasElement | null;
const context = canvas?.getContext('2d');

if (canvas && context) {
  const glyphs = 'アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fontSize = 16;
  let columns = 0;
  let drops: number[] = [];
  let animationFrame = 0;
  let lastFrame = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    columns = Math.ceil(window.innerWidth / fontSize);
    drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));
  };

  const draw = (time: number) => {
    animationFrame = window.requestAnimationFrame(draw);
    if (document.hidden || time - lastFrame < 45) return;
    lastFrame = time;

    context.fillStyle = 'rgba(0, 0, 0, 0.08)';
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = '#00ff41';
    context.font = `${fontSize}px monospace`;

    drops.forEach((drop, index) => {
      const glyph = glyphs[Math.floor(Math.random() * glyphs.length)];
      context.fillText(glyph, index * fontSize, drop * fontSize);
      if (drop * fontSize > window.innerHeight && Math.random() > 0.977) drops[index] = 0;
      else drops[index] += 1;
    });
  };

  resize();
  animationFrame = window.requestAnimationFrame(draw);
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pagehide', () => window.cancelAnimationFrame(animationFrame), { once: true });
}
