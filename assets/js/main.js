/*function agregar(){
	var anadir = document.getElementByClassName("anadir");
	anadir.addEventListener("click"function(){
		document.createElement("textarea")
	})

	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");

	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	agregar.appendChild(nuevasTareas);

	var borrar = document.createElement("span");
	borrar.classList.add("fa","fa-trash-o");

	nuevasTareas.appendChild(borrar);

	borrar.addEventListener("click", function(){
		agregar.removeChild(nuevasTareas);
	})
}
*/

function agregar(){
	var anadir = document.getElementByClassName("tareas");
	var a = document.createElement("a");
	a.setAtribute("class","la-a")
	var text = document.createElement("textarea")
	text.setAtribute("class","el-texto")
	anadir.appendChild(a)
	a.appendChild(text)
	anadir.addEventListener("click", text)
}
agregar();
