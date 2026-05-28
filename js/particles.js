/* ================================================
   PARTICLE FIELD - Canvas Animation
   ================================================ */

(function() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId = null;

  const PARTICLE_COUNT = Math.min(80, Math.floor(window.innerWidth / 15));
  const CONNECTION_DIST = 120;
  const PARTICLE_SPEED = 0.5;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * PARTICLE_SPEED,
        vy: (Math.random() - 0.5) * PARTICLE_SPEED,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
  }

  function drawParticle(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 122, 0, ${p.opacity})`;
    ctx.fill();
  }

  function drawConnection(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < CONNECTION_DIST) {
      const opacity = (1 - dist / CONNECTION_DIST) * 0.2;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255, 122, 0, ${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Draw particle
      drawParticle(p);

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        drawConnection(p, particles[j]);
      }
    }

    animationId = requestAnimationFrame(animate);
  }

  function init() {
    resize();
    createParticles();
    animate();
  }

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });

  // Check if page is visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
