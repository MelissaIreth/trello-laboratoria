	var lista = document.getElementsByClassName("lista")[0];
	var a = document.createElement("a");
	a.setAttribute("class","la-a");

	var text = document.createTextNode("Añadir una lista");
	a.appendChild(text);
	lista.appendChild(a);

/*
function agregar(){
	var add = document.getElementsByClassName("contenedor")[0];
	var cuadroTexto = document.createElement("textarea");
	cuadroTexto.setAttribute("class","el-texto");
	var boton = document.createElement("button");
	boton.setAttribute("class", "boton")
	var espan = document.createElement("span").appendChild(cuadroTexto);
	add.appendChild(espan)
	add.appendChild(boton)
};

document.getElementById('inp').addEventListener('click', function () {
        var textarea = document.createElement('textarea');
        textarea.className="mytextbox";
        document.getElementById('cont').appendChild(textarea);
    });
*/
	lista.addEventListener("click",function(){
		var cuadroTexto = document.createElement("textarea");
		cuadroTexto.setAttribute("class", "el-texto");
		var boton = document.createElement("button");
		boton.setAttribute("class","el-boton")
		var addBoton = document.createTextNode("Agregar");
		var cont = document.getElementsByClassName("contenedor")[0];
		cont.appendChild(cuadroTexto);
		cont.appendChild(boton);
		boton.appendChild(addBoton);
});
