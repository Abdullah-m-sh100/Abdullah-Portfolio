import { useEffect, useState } from "react";
import "./NotFound.css";

/* Generate random particle configs once */
const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  dur: `${4 + Math.random() * 8}s`,
  delay: `${Math.random() * 6}s`,
}));

export default function NotFound() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // tiny delay so CSS animations fire after mount
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Layered background */}
      <div className="nf-bg" />

      {/* Noise grain */}
      <div className="nf-noise" />

      {/* Floating particles */}
      <div className="particles">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              "--x": p.x,
              "--dur": p.dur,
              "--delay": p.delay,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="nf-wrapper">
        {/* Orbit rings */}
        <div className="nf-orbit" />
        <div className="nf-orbit nf-orbit-2" />

        {/* Giant 404 */}
        <div className="nf-code">
          <span className="digit-4-l">4</span>
          <span className="digit-0">0</span>
          <span className="digit-4-r">4</span>
        </div>

        {/* Divider */}
        <div className="nf-glitch-bar" />

        {/* Headline */}
        <h1 className="nf-headline">
          Page <span className="accent">Not Found</span>
        </h1>

        {/* Sub */}
        <p className="nf-sub">
          Looks like this page got lost in the void. Don't worry — let's get you
          back on track.
        </p>

        {/* Buttons */}
        <div className="nf-actions">
          <a href="/" className="btn-primary">
            ← Back to Home
          </a>
          <a href="/#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}
