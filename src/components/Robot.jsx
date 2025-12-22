import { useEffect } from 'react';

const SplineScene = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.27/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
        <h1 
            className='text-center tracking-wider font-bold'
            style={{
                color: 'whitesmoke',
                textShadow: `
                0 0 5px #8a2be2,
                0 0 10px #8a2be2,
                0 0 20px #8a2be2,
                0 0 40px #8a2be2,
                0 0 80px #8a2be2
                `,
                WebkitTextStroke: '0.5px rgba(138, 43, 226, 0.7)'
            }}
        >
        <style>{`
            @keyframes shine {
            to { background-position: 100% center; }
            }
        `}</style>
        </h1>
      <spline-viewer url="https://prod.spline.design/v9lK0oj50Rs1HgTN/scene.splinecode">
      </spline-viewer>
    </div>
  );
}

export default SplineScene;