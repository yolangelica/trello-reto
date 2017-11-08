var nuevoInput= document.createElement("input");
var textInput = document.createTextNode("Add list");



var boton= document.getElementById("boton_principal");
	boton.addEventListener("click",function(){
		//crear input y darle atributos
		var input = document.createElement("input");
		input.setAttribute("type","text");
		input.setAttribute("placeholder", "Agrega evento");
		input.classList.add("class", "input_titulo");


	//crear boton y dar atributos al boton
	var nuevo_boton=document.createElement("button");
	var text_boton = document.createTextNode("Guardar");
	nuevo_boton.setAttribute("type","button");
	nuevo_boton.classList.add("class", "boton_guardar")
	

	var div_padre = document.getElementById("tareas");
	div_padre.appendChild(input);
	nuevo_boton.appendChild(text_boton);
	div_padre.appendChild(nuevo_boton);

})