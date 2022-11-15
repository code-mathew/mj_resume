particlesJS("particles-js", {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 4000 } },
      color: { value: "#ffffff" },
      shape: {
        type: "star",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.15,
        random: true,
        anim: { enable: true, speed: 2, opacity_min: 1, sync: false }
      },
      size: {
        value: 4,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#ffffff",
        opacity: 0.25,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 0.15 } },
        bubble: { distance: 100, size: 5, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 500, duration: 1 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
//   var count_particles, stats, update;
//   stats = new Stats();
//   stats.setMode(0);
//   stats.domElement.style.position = "absolute";
//   stats.domElement.style.left = "0px";
//   stats.domElement.style.top = "0px";
//   document.body.appendChild(stats.domElement);
//   count_particles = document.querySelector(".js-count-particles");
//   update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
//   };
//   requestAnimationFrame(update);
  

export default particlesJS;