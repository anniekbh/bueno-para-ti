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
<<<<<<< HEAD
    var fondo = document.getElementById("sectiontop");
=======
    var leer = document.getElementById("leerMas");
>>>>>>> refs/remotes/origin/master

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

=======
    });
   /* circulo1.addEventListener("mouseover", mouseOver);
    circulo1.addEventListener("mouseout", mouseOut);
>>>>>>> refs/remotes/origin/master



    /*fondo.addEventListener("mousemove", function(event){
        myFunction(event);
    });
        function myFunction(e) {
        var x = -(e.clientX - fondo.offsetTop / 5);
        var y = -(e.clientY - fondo.offsetTop / 5);
        fondo.style.backgroundPosition = x + 'px ' + y + 'px';
        }*/


    /*ten.addEventListener("mousemove", function(event){
        myFunction(event);
    });
     fondo.body.style.backgroundPosition = x + 'px ' + y + 'px';

        function myFunction(e) {
            var x = -(e.clientX - ten.offsetTop / 10);
            var y = -(e.clientY - ten.offsetLeft / 10); 
            ten.style.backgroundPosition = x + 'px ' + y + 'px';
        }*/


});
 window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mapa.style.display = "block";
    }
});


