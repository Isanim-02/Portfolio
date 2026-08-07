import { useEffect, useRef } from 'react';

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; vx: number; vy: number; alpha: number; blink: number; isBlue: boolean }[] = [];

    const resize = () => {
      // Create a massive canvas area (2x screen size) to prevent edges showing when zoomed out
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      initStars();
    };

    const initStars = () => {
      stars = [];
      // Calculate density but enforce a strict hard cap of 600 stars to prevent GPU lag when zoomed out
      let numStars = Math.floor((canvas.width * canvas.height) / 5000);
      if (numStars > 600) numStars = 600; 

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          vx: (Math.random() - 0.5) * 0.1, // Slow drift
          vy: (Math.random() - 0.5) * 0.1,
          alpha: Math.random(),
          blink: (Math.random() - 0.5) * 0.02,
          isBlue: Math.random() > 0.8 // 20% chance for a blue accent star
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;
        
        // Wrap around
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkle
        star.alpha += star.blink;
        if (star.alpha > 1) { star.alpha = 1; star.blink *= -1; }
        if (star.alpha < 0) { star.alpha = 0; star.blink *= -1; }

        // Draw a simulated glow for blue stars (much faster than ctx.shadowBlur)
        if (star.isBlue && star.alpha > 0.5) {
            ctx.beginPath();
            ctx.fillStyle = `rgba(59, 130, 246, ${star.alpha * 0.3})`;
            ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw the core star
        ctx.beginPath();
        const color = star.isBlue ? `rgba(59, 130, 246, ${star.alpha})` : `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fillStyle = color;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200); // Debounce to prevent flashing while actively zooming
    };

    window.addEventListener('resize', handleResize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: '-50vh',
        left: '-50vw',
        width: '200vw',
        height: '200vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: '#050505' // Deep space background
      }}
    />
  );
};
