import { useEffect, useState } from 'react';

const Demo = () => {
  const [iframeHeight, setIframeHeight] = useState('100vh');

  useEffect(() => {
    // Ajusta altura do iframe para tela completa
    const updateHeight = () => {
      setIframeHeight(`${window.innerHeight}px`);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="/native/demo.html"
        title="Demo Nativo"
        className="w-full border-0"
        style={{ height: iframeHeight }}
        allow="clipboard-write"
      />
    </div>
  );
};

export default Demo;
