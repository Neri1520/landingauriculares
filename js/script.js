// Animación de partículas (estrellas/luces)
const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticles() {
  particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      color: Math.random() > 0.7 ? '#ffd700' : (Math.random() > 0.5 ? '#e10600' : '#fff')
    });
  }
}
createParticles();

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.closePath();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

// Temporizador de oferta especial
function startCountdown(duration) {
  let timer = duration, minutes, seconds;
  const countdown = document.getElementById('countdown');
  function update() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    countdown.textContent = `Termina en: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (--timer < 0) timer = duration;
  }
  setInterval(update, 1000);
  update();
}
startCountdown(60 * 15); // 15 minutos

// Scroll suave para botones CTA
for (const btn of document.querySelectorAll('.btn-neon')) {
  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
}
