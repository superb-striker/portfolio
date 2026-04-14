window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("matrix-rain") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const letters =
    "アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);

  const drops: number[] = new Array(columns).fill(1);

  function draw() {
    console.log("drawing");
    ctx!.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx!.fillRect(0, 0, canvas.width, canvas.height);

    ctx!.fillStyle = "#00FF41";
    ctx!.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx!.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(draw, 35);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
