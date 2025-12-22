import { useEffect, useState } from 'react';

const PinoqioHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.27/build/spline-viewer.js';
    document.head.appendChild(script);

    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section 
      id="launch-schedule" 
      className="relative w-screen h-screen bg-black overflow-hidden"
      style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
    >
      {/* Background Text - PINOQIO */}
      <div className="absolute inset-0 bottom-85 left-8 flex items-center justify-center pointer-events-none z-0">
        <h1 
          className="text-[18vw] font-black uppercase tracking-wider select-none"
          style={{
            color: 'white',
            textShadow: `
              0 0 30px rgba(138, 43, 226, 0.4),
              0 0 60px rgba(138, 43, 226, 0.3),
              0 0 90px rgba(138, 43, 226, 0.2)
            `,
            WebkitTextStroke: '2px rgba(138, 43, 226, 0.4)',
            letterSpacing: '0.1em'
          }}
        >
          PINOQIO
        </h1>
      </div>

      {/* Centered Robot - Full Width */}
      <div className="absolute inset-0   z-10">
        <div className="w-full h-full">
          <spline-viewer 
            url="https://prod.spline.design/v9lK0oj50Rs1HgTN/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}

export default PinoqioHero;