window.addEventListener("load", function(){
    var mapaLima = document.getElementById("mapaLima");
    var mapa = document.getElementById("mapa");
    var dist1 = document.getElementById("dist1");
    var dist2 = document.getElementById("dist2");
    var dist3 = document.getElementById("dist3");
    var dist4 = document.getElementById("dist4");
    var dist5 = document.getElementById("dist5");
    var dist6 = document.getElementById("dist6");
    var dist7 = document.getElementById("dist7");
    var dist8 = document.getElementById("dist8");
    var circulo1 = document.getElementById("ocultar1");
    var circulo2 = document.getElementById("ocultar2");
    var circulo3 = document.getElementById("ocultar3");
    var circulo4 = document.getElementById("ocultar4");
    var circulo5 = document.getElementById("ocultar5");
    var circulo6 = document.getElementById("ocultar6");
    var circulo7 = document.getElementById("ocultar7");
    var circulo8 = document.getElementById("ocultar8");
    var tocado1 = false;
    var tocado2 = false;
    var tocado3 = false;
    var tocado4 = false;
    var tocado5 = false;
    var tocado6 = false;
    var tocado7 = false;
    var tocado8 = false;

    dist1.addEventListener("mouseover", function(){
        if (!tocado1) {
          circulo1.style.display="block"; 
            tocado1 = true;
        };
    });
    dist2.addEventListener("mouseover", function(){
      if (!tocado2) {
        circulo2.style.display="block";
            tocado2 = true;
        };
    });    
    dist3.addEventListener("mouseover", function(){
      if (!tocado3) {
        circulo3.style.display="block";
            tocado3 = true;
      }
    }); 
    dist4.addEventListener("mouseover", function(){
      if (!tocado4) {
        circulo4.style.display="block"; 
            tocado4 = true;
      }
    }); 
    dist5.addEventListener("mouseover", function(){
      if (!tocado5) {
        circulo5.style.display="block"; 
            tocado5 = true;
      }
    });
    dist6.addEventListener("mouseover", function(){
      if (!tocado6) {
        circulo6.style.display="block"; 
            tocado6 = true;
      }
    });    
    dist7.addEventListener("mouseover", function(){
      if (!tocado7) {
        circulo7.style.display="block"; 
            tocado7 = true;
      }
    }); 
    dist8.addEventListener("mouseover", function(){
      if (!tocado8) {
        circulo8.style.display="block"; 
            tocado8 = true;
      }
<<<<<<< HEAD
    }); 



  circulo1.addEventListener("mouseover", uno);
  circulo1.addEventListener("mouseout", dos);
    function uno() {
        circulo1.style.height = "44px";
        circulo1.style.width = "44px";
    }
    function dos() {
        circulo1.style.height = "15px";
        circulo1.style.width = "15px";
  };

  circulo2.addEventListener("mouseover", tres);
  circulo2.addEventListener("mouseout", cuatro);
    function tres() {
        circulo2.style.height = "44px";
        circulo2.style.width = "44px";
    }
    function cuatro() {
        circulo2.style.height = "15px";
        circulo2.style.width = "15px";
  };
    
  circulo3.addEventListener("mouseover", cinco);
  circulo3.addEventListener("mouseout", seis);
    function cinco() {
        circulo3.style.height = "44px";
        circulo3.style.width = "44px";
    }
    function seis() {
        circulo3.style.height = "15px";
        circulo3.style.width = "15px";
  };
  
  circulo4.addEventListener("mouseover", siete);
  circulo4.addEventListener("mouseout", ocho);
    function siete() {
        circulo4.style.height = "44px";
        circulo4.style.width = "44px";
    }
    function ocho() {
        circulo4.style.height = "15px";
        circulo4.style.width = "15px";
  };

  circulo5.addEventListener("mouseover", nueve);
  circulo5.addEventListener("mouseout", diez);
    function nueve() {
        circulo5.style.height = "44px";
        circulo5.style.width = "44px";
    }
    function diez() {
        circulo5.style.height = "15px";
        circulo5.style.width = "15px";
  };

  circulo6.addEventListener("mouseover", once);
  circulo6.addEventListener("mouseout", doce);
    function once() {
        circulo6.style.height = "44px";
        circulo6.style.width = "44px";
    }
    function doce() {
        circulo6.style.height = "15px";
        circulo6.style.width = "15px";
  };

  circulo7.addEventListener("mouseover", trece);
  circulo7.addEventListener("mouseout", catorce);
    function trece() {
        circulo7.style.height = "44px";
        circulo7.style.width = "44px";
    }
    function catorce() {
        circulo7.style.height = "15px";
        circulo7.style.width = "15px";
  };

  circulo8.addEventListener("mouseover", quince);
  circulo8.addEventListener("mouseout", diesiseis);
    function quince() {
        circulo8.style.height = "44px";
        circulo8.style.width = "44px";
    }
    function diesiseis() {
        circulo8.style.height = "15px";
        circulo8.style.width = "15px";
  };

});




  window.addEventListener("scroll", function(){
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
              mapa.style.display = "block";
          } else {
            mapa.style.display ="none";
          };

  });


=======
    });
});
window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mapa.style.display = "block";
        } else{
            mapa.style.display = "none";
        }
});
>>>>>>> refs/remotes/origin/master
