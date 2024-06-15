
import React, { useEffect, useRef, useState } from 'react';
import { Noise } from 'noisejs';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MarkdownPage from './MarkdownPage';
import './App.css';

function App() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [animateText1, setAnimateText1] = useState(false);
  const [animateText2, setAnimateText2] = useState(false);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error("Failed to get canvas context");
      return;
    }

    const noise = new Noise(Math.random());
    const scale = 1;  // Scale for noise details
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const lightColorIntensity = (Math.sin(time / 50) + 1) / 2; // Oscillates between 0 and 1

      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const value = (noise.simplex3(x / scale, y / scale, time / 100) +
                         noise.simplex3((x + 1) / scale, y / scale, time / 100) +
                         noise.simplex3(x / scale, (y + 1) / scale, time / 100) +
                         noise.simplex3((x + 1) / scale, (y + 1) / scale, time / 100)) / 4;

          const cell = (x + y * canvas.width) * 4;
          const darkColor = { r: 0, g: 0, b: 0 };
          const lightColor = { r: 178, g: 170, b: 142 };

          const r = darkColor.r + (lightColor.r - darkColor.r) * value * lightColorIntensity;
          const g = darkColor.g + (lightColor.g - darkColor.g) * value * lightColorIntensity;
          const b = darkColor.b + (lightColor.b - darkColor.b) * value * lightColorIntensity;

          imageData.data[cell] = r;
          imageData.data[cell + 1] = g;
          imageData.data[cell + 2] = b;
          imageData.data[cell + 3] = 255;
        }
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      time += 1;
      drawNoise();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleLinkClick = (event, filePath = '') => {
    event.preventDefault();  // Prevent the default link behavior

    if (filePath) {
      setAnimateText1(true);
      setAnimateText2(true);

      // Wait for the animation to complete before opening the PDF
      setTimeout(() => {
        window.open(filePath, '_blank'); // Open PDF in a new tab
      }, 3000); // Match this delay with the animation time if necessary
    }
  };

  return (
    <Router>
      <div>
        <canvas ref={canvasRef} className="noise-background"></canvas>
        <div className={`text-container `}>
          <div className="text1">I am</div>
          <div className="text2">Dheeraj Chowdary</div>
        </div>
        <div className="footer">
          <Link to="#" onClick={(event) => handleLinkClick(event, 'r.pdf')}>resume</Link>
          <Link to="#" onClick={handleLinkClick}>github</Link>
          <Link to="#" onClick={handleLinkClick}>projects</Link>
          <Link to="mailto:chowdary.s.deeraj@gmail.com" onClick={(event) => handleLinkClick(event)}>contact</Link>
          <Link to="/resources" onClick={handleLinkClick}>resources</Link>
        </div>

        <Routes>
          <Route path="/resources" element={<MarkdownPage />} />
          {/* Define other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
