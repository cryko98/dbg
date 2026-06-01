import { useEffect, useRef } from "react";

export default function SmokeEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class definition
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      decay: number;
      growth: number;

      constructor(x: number, y: number, isSteam = false) {
        this.x = x;
        this.y = y;
        // Float upwards and slide sideways
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = isSteam ? -Math.random() * 1.5 - 0.8 : -Math.random() * 0.8 - 0.2;
        this.size = Math.random() * (isSteam ? 40 : 20) + (isSteam ? 20 : 10);
        
        // Colors: red tones, whites, warm greys
        const colorType = Math.random();
        if (colorType < 0.45) {
          // Vivid Red
          this.color = "239, 68, 68";
        } else if (colorType < 0.7) {
          // Warm Orange/Coral Accent
          this.color = "248, 113, 113";
        } else {
          // Soft White/smoke
          this.color = "248, 250, 252";
        }
        
        this.alpha = Math.random() * 0.2 + 0.05;
        this.decay = Math.random() * 0.0015 + 0.0008;
        this.growth = Math.random() * 0.15 + 0.05;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.size += this.growth;
        this.alpha -= this.decay;
      }

      draw(c: CanvasRenderingContext2D) {
        if (this.alpha <= 0) return;
        c.save();
        c.globalAlpha = this.alpha;
        const gradient = c.createRadialGradient(
          this.x,
          this.y,
          this.size * 0.1,
          this.x,
          this.y,
          this.size
        );
        gradient.addColorStop(0, `rgba(${this.color}, 0.6)`);
        gradient.addColorStop(0.5, `rgba(${this.color}, 0.2)`);
        gradient.addColorStop(1, `rgba(${this.color}, 0)`);
        c.fillStyle = gradient;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    // List of smoke particles
    let particles: Particle[] = [];

    // Spark / Amber spark category
    class Spark {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      decay: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 3;
        this.vy = -Math.random() * 4 - 2;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.4 ? "239, 68, 68" : "255, 255, 255";
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }

      draw(c: CanvasRenderingContext2D) {
        if (this.alpha <= 0) return;
        c.save();
        c.globalAlpha = this.alpha;
        c.shadowBlur = 10;
        c.shadowColor = `rgba(${this.color}, 0.8)`;
        c.fillStyle = `rgba(${this.color}, 1)`;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    let sparks: Spark[] = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse movement interactive particle spawns
    const handleMouseMove = (e: MouseEvent) => {
      // Spawn standard smoke
      if (Math.random() < 0.4) {
        particles.push(new Particle(e.clientX, e.clientY, false));
      }
      // Spawn sharp spark
      if (Math.random() < 0.2) {
        sparks.push(new Spark(e.clientX, e.clientY));
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Constant background loop to emit standard smoke from bottom
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // Randomly spawn smoke at the bottom of the visible screen
      if (particles.length < 80 && Math.random() < 0.15) {
        const spawnX = Math.random() * width;
        particles.push(new Particle(spawnX, height + 30, true));
      }

      // Randomly spawn sparks rising up
      if (sparks.length < 30 && Math.random() < 0.08) {
        const spawnX = Math.random() * width;
        sparks.push(new Spark(spawnX, height - 10));
      }

      // Update and draw particles
      particles = particles.filter((p) => {
        p.update();
        p.draw(ctx);
        return p.alpha > 0;
      });

      // Update and draw sparks
      sparks = sparks.filter((s) => {
        s.update();
        s.draw(ctx);
        return s.alpha > 0;
      });

      animationId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-10 block"
    />
  );
}
