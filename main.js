import particlesJS from "./particles.js"


const Theme = document.getElementById('dark');
const iconLight = document.querySelector('.icon-light');
const iconDark = document.querySelector('.icon-dark');

//to change the  icon according to the toggle
Theme.addEventListener('click', ()=>{
  if(Theme.checked == true){
    
    // iconDark.style.display = "initial";
    iconDark.style.opacity = "1";
    iconDark.style.transform = "translateX(0%)";
    iconDark.style.position = "relative";
    // iconDark.style.height = "28px";
    // iconDark.style.width = "28px";
    

    iconLight.style.opacity = "0";
    iconLight.style.position = "absolute";
    iconLight.style.transform = "translateX(190%)";

    // iconLight.style.height = "0";
    // iconLight.style.width = "0";
    
// Paricles background

    particlesJS("particles-js", {
      particles: {
        number: { value: 150, density: { enable: true, value_area: 4000 } },
        color: { value: "#1a1a1a" },
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
          color: "#1a1a1a",
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
    // console.log("check")
  }else{

    // iconLight.style.display = "initial";
    // iconLight.style.opacity = "1";
    // iconDark.style.display = "none";

    iconDark.style.opacity = "0";
    iconDark.style.position = "absolute";
    iconDark.style.transform = "translateX(190%)";
    // iconDark.style.height = "0";
    // iconDark.style.width = "0";

    iconLight.style.opacity = "1";
    iconLight.style.position = "relative";
    iconLight.style.transform = "translateX(0%)";
    // iconLight.style.height = "28px";
    // iconLight.style.width = "28px";
    

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
   
  }
  
});

export default particlesJS;



