import { useEffect, useRef } from 'react';

export function EnergySphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let cells: Cell[] = [];

    interface Cell {
      x: number;
      y: number;
      baseBrightness: number;
      brightness: number;
      phase: number;
      size: number;
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initCells = () => {
      cells = [];
      const gridSize = 20;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          cells.push({
            x: x * gridSize + gridSize / 2,
            y: y * gridSize + gridSize / 2,
            baseBrightness: Math.random() * 0.3 + 0.1,
            brightness: Math.random() * 0.3 + 0.1,
            phase: Math.random() * Math.PI * 2,
            size: gridSize * 0.8,
          });
        }
      }
    };

    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);

      cells.forEach((cell) => {
        const distance = Math.sqrt((cell.x - centerX) ** 2 + (cell.y - centerY) ** 2);
        const distFactor = Math.max(0, 1 - distance / maxDistance);

        const wave = Math.sin(time * 0.002 + cell.phase) * 0.3;
        const radialWave = Math.sin(time * 0.001 + distance * 0.02) * 0.2;
        
        cell.brightness = cell.baseBrightness + wave + radialWave + distFactor * 0.4;
        cell.brightness = Math.max(0.05, Math.min(0.9, cell.brightness));

        const intensity = cell.brightness;
        const r = Math.floor(201 * intensity + 20 * (1 - intensity));
        const g = Math.floor(169 * intensity + 15 * (1 - intensity));
        const b = Math.floor(98 * intensity + 8 * (1 - intensity));

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${intensity})`;
        ctx.fillRect(cell.x - cell.size / 2, cell.y - cell.size / 2, cell.size, cell.size);
      });
    };

    const animate = (time: number) => {
      drawGrid(time);
      animationId = requestAnimationFrame(animate);
    };

    resize();
    initCells();
    animate(0);

    window.addEventListener('resize', () => {
      resize();
      initCells();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512] via-transparent to-[#1a1512]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1512] via-transparent to-[#1a1512]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1512] via-transparent to-[#1a1512]" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#1a1512] via-transparent to-[#1a1512]" />
    </div>
  );
}