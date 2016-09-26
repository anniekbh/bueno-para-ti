## Bueno para mi

####Contexto: Crear una pagina informativa de restraurantes de lima.

**Versión 0.0.1:**
* Crear una pagina interactiva que informe sobre los mejores restaurantes de lima. *

**Versión 0.0.2:**
* Agregar el evento mouseOver de JavaScript. *

 * Creamos un evento que genere puntos en la imagen del mapa. *
```javascript
    var dist1 = document.getElementById("dist5");
    var circulo1 = document.getElementById("ocultar1");
    var tocado1 = false;
    
    dist1.addEventListener("mouseover", function(){
        if (!tocado1) {
          circulo1.style.display="block"; 
            tocado1 = true;
        };
    });
```

**Versión 0.0.3:**
* Agregar el evento Scroll de JavaScript. *
 * Creamos una condición que pasando los 500px desde el top de la pagina principal, aparezca y desaparezca el mapa*
```javascript
    	window.addEventListener("scroll", function(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mapa.style.display = "block";
        } else{
            mapa.style.display = "none";
        }
});

**Versión 0.0.4:**
* Hacer que los puntos que aparecen en el mapa, crescan con una funcion mouseOver y mouseOut *
 * Generamos el evento para que los puntos se agranden *
```javascript
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
```