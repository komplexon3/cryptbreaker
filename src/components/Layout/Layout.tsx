import { Container } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => {
  return (
    <>
      <MatrixBackground timeout={100} />
      <Header />
      <Container maxW='3xl' minH='80vh'>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

// based on https://pablo.gg/en/blog/coding/creating-a-matrix-source-code-effect-background-for-my-website-with-react/
function MatrixBackground({ timeout }: { timeout: number }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({
    width: document.body.offsetWidth,
    height: document.body.offsetHeight,
  });
  const handleResize = useCallback(() => {
    console.log('a');
    setDimensions({
      width: document.body.offsetWidth,
      height: document.body.offsetHeight,
    });
  }, [setDimensions]);

  window.addEventListener('resize', handleResize);

  useEffect(() => {
    console.log(dimensions);
  }, [dimensions]);

  const context = canvas.current?.getContext('2d');

  useEffect(() => {
    if (!canvas.current || !context) {
      // just fail silently - this is a gimmick so it doesn't have to be very robust
      // most important is just that it doesn't cause any other issues
      return;
    }

    const width = dimensions.width;
    const height = dimensions.height;

    canvas.current.width = width;
    canvas.current.height = height;

    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    const columns = Math.floor(width / 25) + 1;
    const yPositions = Array(columns).fill(0);

    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    const matrixEffect = () => {
      context.fillStyle = '#0001';
      context.fillRect(0, 0, width, height);

      context.fillStyle = '#0f0';
      context.font = '15pt monospace';

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 25;
        context.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };

    const interval = setInterval(matrixEffect, timeout);
    return () => {
      clearInterval(interval);
    };
  }, [canvas, timeout]);

  return (
    <div
      style={{
        // custom styles to make it show up in the background
        background: '#000000',
        overflow: 'hidden',
        position: 'fixed',
        height: '100%',
        width: '100%',
        zIndex: -1,
        left: '0',
        top: '0',
      }}
    >
      {canvas && <canvas ref={canvas} height='100%' width='100%' />}
    </div>
  );
}
