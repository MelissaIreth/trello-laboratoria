	var lista = document.getElementsByClassName("lista")[0];
	var a = document.createElement("a");
	a.setAttribute("class","la-a");
	var text = document.createTextNode("Añadir una lista");
	a.appendChild(text);
	lista.appendChild(a);

function agregar(){
	var agregar = document.getElementsByClassName("la-a")[0];
	var cuadroTexto = document.createElement("textarea");
	var espan = document.createElement("span")
	cuadroTexto.appendChild(espan)
	cuadroTexto.setAttribute("class","el-texto");
	lista.addEventListener("click", function(){
		cuadroTexto;
	});
};

