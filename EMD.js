window.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector(".top");
    var images = ["vista-aerea-equipo-empresarial_53876-124515.avif", 
    "empresario-sosteniendo-exito-tableta-digital-paisaje-urbano-generado-ai_188544-22431.avif", 
    "educacion-tecnologia-internet-webinar-icono-linea-concepto-pantalla-virtual_55997-4567.avif"]; // Lista de imágenes en orden

    function cycleImages() {
      var currentIndex = images.indexOf(body.style.backgroundImage.slice(5, -2));
      var nextIndex = (currentIndex + 1) % images.length;
      body.style.backgroundImage = `url("${images[nextIndex]}")`;
      body.classList.add("loaded");
      setTimeout(function() {
        body.classList.add("next");
      }, 1000);
      setTimeout(function() {
        body.classList.remove("loaded", "next");
        cycleImages();
      }, 2500);
    }

    cycleImages();
  });
  window.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("container");
    var leftButton = document.getElementById("left-button");
    var rightButton = document.getElementById("right-button");
    var currentPosition = 0;
    var maxPosition = 0;

    leftButton.addEventListener("click", function() {
      if (currentPosition > 0) {
        currentPosition--;
        container.style.transform = "translateX(" + (-100 * currentPosition) + "px)";
      }
    });

    rightButton.addEventListener("click", function() {
      if (currentPosition < maxPosition) {
        currentPosition++;
        container.style.transform = "translateX(" + (-100 * currentPosition) + "px)";
      }
    });
    window.addEventListener("resize", function() {
      maxPosition = Math.max(0, Math.ceil(container.clientWidth / 110) - 1);
      currentPosition = Math.min(currentPosition, maxPosition);
      container.style.transform = "translateX(" + (-100 * currentPosition) + "px)";
    });

    window.dispatchEvent(new Event("resize"));
  });
  window.addEventListener("scroll", function() {
    var fixedDiv = document.getElementById("fixed-div");
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollHeight > 600) {
      fixedDiv.classList.add("gray-bg");
    } else {
      fixedDiv.classList.remove("gray-bg");
    }
  });
  
  