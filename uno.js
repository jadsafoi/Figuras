function cambiar() {
      var figura = document.getElementById("figura").value;

      document.getElementById("lado").style.display = "none";
      document.getElementById("base").style.display = "none";
      document.getElementById("altura").style.display = "none";
      document.getElementById("radio").style.display = "none";
      document.getElementById("dM").style.display = "none";
      document.getElementById("dm").style.display = "none";
      document.getElementById("BM").style.display = "none";
      document.getElementById("bm").style.display = "none";
      document.getElementById("htrapecio").style.display = "none";

      if (figura === "cuadrado" || figura === "triangulo" || figura === "pentagono" || figura === "hexagono") {
        document.getElementById("lado").style.display = "block";
      } else if (figura === "rectangulo") {
        document.getElementById("base").style.display = "block";
        document.getElementById("altura").style.display = "block";
      } else if (figura === "circulo") {
        document.getElementById("radio").style.display = "block";
      } else if (figura === "rombo") {
        document.getElementById("dM").style.display = "block";
        document.getElementById("dm").style.display = "block";
      } else if (figura === "trapecio") {
        document.getElementById("BM").style.display = "block";
        document.getElementById("bm").style.display = "block";
        document.getElementById("htrapecio").style.display = "block";
      }
    }

    