import { useEffect, useRef } from 'react';

const FirstSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.27/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <spline-viewer url="https://prod.spline.design/kpte5CbzdEwYdUua/scene.splinecode"></spline-viewer>
    </div>
  );
}

export default FirstSection

