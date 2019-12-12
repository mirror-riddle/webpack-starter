import React, { useEffect } from 'react';

import styles from './index.module.css';

const CanvasPage: React.FunctionComponent = () => {
  const canvasRef = React.createRef<HTMLCanvasElement>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas.getContext) {
      const context = canvas.getContext('2d');
      if (context) {
        context.fillStyle = 'rgba(200, 0, 0, 0.5)';
        context.strokeStyle = 'rgba(0, 200, 0, 0.5)';
        context.arc(100, 100, 50, 0, Math.PI / 2, true);
        context.stroke();
      }
    }
  }, [canvasRef]);

  return (
    <div className={styles.page}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        height="400"
        width="400"
      />
    </div>
  );
};

export { CanvasPage };
