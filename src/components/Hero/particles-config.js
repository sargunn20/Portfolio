const particleConfig = {
    background: {
      color: { value: "#0f0f0f" }, // Try dark for more pop
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#ffffff", "#00ffff"],
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      shape: {
        type: ["circle", "triangle", "star"],
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
    events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
  };
  
  export default particleConfig;
  