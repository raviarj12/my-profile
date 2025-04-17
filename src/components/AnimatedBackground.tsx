import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BackgroundContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
});

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.primary.main,
  opacity: 0.2,
  fontSize: '3rem',
  fontFamily: 'monospace',
  userSelect: 'none',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  filter: 'blur(0.5px)',
}));

const colors = [
  '#00ff9d', // Neon Green
  '#00b8ff', // Neon Blue
  '#ff00ff', // Neon Pink
  '#ffd700', // Gold
  '#ff6b6b', // Coral
  '#4dabf7', // Sky Blue
  '#ff9f43', // Orange
  '#a29bfe', // Purple
];

interface Shape {
  type: 'text' | 'circle';
  content?: string;
  size?: string;
}

const shapes: Shape[] = [
  { type: 'text', content: '<div>', size: '3rem' },
  { type: 'text', content: '</div>', size: '3rem' },
  { type: 'text', content: '{', size: '4rem' },
  { type: 'text', content: '}', size: '4rem' },
  { type: 'circle', size: '80px' },
  { type: 'circle', size: '100px' },
  { type: 'circle', size: '120px' },
  { type: 'text', content: '=>', size: '3.5rem' },
  { type: 'text', content: 'const', size: '3rem' },
  { type: 'text', content: 'function', size: '3rem' },
  { type: 'circle', size: '90px' },
  { type: 'circle', size: '110px' },
  { type: 'text', content: 'React', size: '3.5rem' },
  { type: 'text', content: 'TypeScript', size: '3rem' },
  { type: 'text', content: 'Next.js', size: '3rem' },
];

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createFloatingElement = () => {
      const element = document.createElement('div');
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      if (shape.type === 'circle') {
        element.style.width = shape.size || '80px';
        element.style.height = shape.size || '80px';
        element.style.borderRadius = '50%';
        element.style.backgroundColor = color;
        element.style.opacity = '0.15';
        element.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}`;
      } else {
        element.textContent = shape.content || '';
        element.style.color = color;
        element.style.fontSize = shape.size || '3rem';
        element.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
      }

      element.style.position = 'absolute';
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
      element.style.animation = `float ${Math.random() * 20 + 20}s linear infinite`;
      element.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(element);

      setTimeout(() => {
        element.remove();
      }, 25000);
    };

    // Create initial elements
    for (let i = 0; i < 20; i++) {
      createFloatingElement();
    }

    const interval = setInterval(createFloatingElement, 2000);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(100vh) scale(0.5) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        90% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-100px) scale(0.5) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearInterval(interval);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <BackgroundContainer ref={containerRef}>
      <FloatingElement />
    </BackgroundContainer>
  );
};

export default AnimatedBackground; 