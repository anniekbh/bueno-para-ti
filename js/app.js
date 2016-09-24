window.addEventListener("load", function(){
    var mapaLima = document.getElementById("mapa");
    var distUno = document.getElementById("miraflores");
    var crearPunto = document.getElementById("mapa")

    window.addEventListener("scroll", function(){
        mapa.classList.add("aparecer");
});
    distUno.addEventListener("mouseover", function() {
		mostrarPunto(distUno);
});		
    function mostrarPunto(crearPunto){
		
		var newPunto = document.createElement("div");
		newPunto.classList.add("puntoUno")
	    mapaLima.insertBefore(newPunto, mapaLima.childNodes[0]);
	};

});



