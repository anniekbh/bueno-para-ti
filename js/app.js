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

    /*mapaLima.addEventListener("scroll", function(){
        mapa.classList.add("aparecer");*/

    dist1.addEventListener("click", function(e){
        var punto1 = document.createElement("button");
            punto1.classList.add("punto1");
            mapaLima.insertBefore(punto1, mapaLima.childNodes[0]);
    });
    dist2.addEventListener("click", function(e){
        var punto2 = document.createElement("button");
            punto2.classList.add("punto2");
            mapaLima.insertBefore(punto2, mapaLima.childNodes[0]);
    });    
    dist3.addEventListener("click", function(e){
        var punto3 = document.createElement("button");
            punto3.classList.add("punto3");
            mapaLima.insertBefore(punto3, mapaLima.childNodes[0]);
    }); 
    dist4.addEventListener("click", function(e){
        var punto4 = document.createElement("button");
            punto4.classList.add("punto4");
            mapaLima.insertBefore(punto4, mapaLima.childNodes[0]);
    }); 
    dist5.addEventListener("click", function(e){
        var punto5 = document.createElement("button");
            punto5.classList.add("punto5");ll
            mapaLima.insertBefore(punto5, mapaLima.childNodes[0]);
    });
    dist6.addEventListener("click", function(e){
        var punto6 = document.createElement("button");
            punto6.classList.add("punto6");
            mapaLima.insertBefore(punto6, mapaLima.childNodes[0]);
    });    
    dist7.addEventListener("click", function(e){
        var punto7 = document.createElement("button");
            punto7.classList.add("punto7");
            mapaLima.insertBefore(punto7, mapaLima.childNodes[0]);
    }); 
    dist8.addEventListener("click", function(e){
        var punto8 = document.createElement("button");
            punto8.classList.add("punto8");
            mapaLima.insertBefore(punto8, mapaLima.childNodes[0]);
    }); 



});



