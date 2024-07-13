
import React, { useEffect, useState } from 'react';
import { Noise } from 'noisejs';
import './App.css';
import { Link } from 'react-router-dom';
import './ac.css';
import './all.min.css';

function Home() {
  const [currentGreeting, setCurrentGreeting] = useState('hello');
  const [isCanvasEnabled, setIsCanvasEnabled] = useState(true);

  const greetings = {
    hello: 'Hello',
    hindi: 'Namaste',
    tagalog: 'Kamusta'
  };
  const greetingKeys = Object.keys(greetings);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % greetingKeys.length;
      setCurrentGreeting(greetingKeys[index]);
    }, 3000); // Change greeting every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!isCanvasEnabled) return;

    const canvas = document.querySelector('.noise-background');
    const ctx = canvas.getContext('2d');
    const noise = new Noise(Math.random());
    const scale = 1500;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const lightColorIntensity = (Math.sin(time / 30) + 1) / 2;

      for (let i = 0; i < imageData.data.length; i += 4) {
        const x = (i / 4) % canvas.width;
        const y = Math.floor((i / 4) / canvas.width);
        const value = (noise.simplex3(x / scale, y / scale, time / 100) + Math.random() * 0.1) / 1.1;

        const darkColor = { r: 0, g: 0, b: 0 };
        const lightColor = { r: 178, g: 170, b: 142 };

        const r = darkColor.r + (lightColor.r - darkColor.r) * value * lightColorIntensity;
        const g = darkColor.g + (lightColor.g - darkColor.g) * value * lightColorIntensity;
        const b = darkColor.b + (lightColor.b - darkColor.b) * value * lightColorIntensity;

        imageData.data[i] = r;
        imageData.data[i + 1] = g;
        imageData.data[i + 2] = b;
        imageData.data[i + 3] = 255;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      time += 5;

      drawNoise();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isCanvasEnabled]);

  const handleLinkClick = (event, filePath = '') => {
    if (filePath) {
      setTimeout(() => {
        window.open(filePath, '_blank');
      }, 3000);
    }
  };

  return (
    <div className="app-container">
      {isCanvasEnabled && <canvas className="noise-background"></canvas>}

      <div className="navbar">
        <button
          className={`toggle-button ${isCanvasEnabled ? 'on' : ''}`}
          onClick={() => setIsCanvasEnabled(!isCanvasEnabled)}
          data-text={isCanvasEnabled ? 'ON' : 'OFF'}
        >
        </button>
      </div>

      <div className="text-container">
        <div className="text1">Hi, Its </div>
        <div className="text2">Dheeraj Chowdary</div>
        <div className="text3"> I'm an up and coming PL developer </div>
        <div className="text3"> I am currenty working on <a id="pal" style={{color:"crimson !important"}} href="https://pal-tek.com">Pal-Tek</a> </div>
      </div>
      <div className="footer">
        <Link to="#" onClick={(event) => handleLinkClick(event, 'r.pdf')}>resume</Link>
        <Link to="https://github.com/rufevean" onClick={handleLinkClick}>github</Link>
        <Link to="mailto:chowdary.s.deeraj@gmail.com" onClick={(event) => handleLinkClick(event)}>contact</Link>
        <Link to="/resources" onClick={handleLinkClick}>resources</Link>
      </div>
    </div>
  );
}

export default Home;
