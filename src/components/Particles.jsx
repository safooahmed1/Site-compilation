import { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    // Simple particles config
    const particlesConfig = {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle"
        },
        "opacity": {
          "value": 0.5,
          "random": true
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        }
      },
      "retina_detect": true
    };

    // Wait for particles.js to load
    const initParticles = () => {
      console.log('Checking for particlesJS...', window.particlesJS);
      
      if (window.particlesJS) {
        console.log('Initializing particles...');
        window.particlesJS('particles-js', particlesConfig);
        console.log('Particles.js initialized successfully!');
      } else {
        console.log('particlesJS not found, retrying...');
        setTimeout(initParticles, 100);
      }
    };

    // Start initialization
    setTimeout(initParticles, 1000);
  }, []);

  return (
    <div 
      id="particles-js" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    />
  );
};

export default Particles;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               