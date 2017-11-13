/*1)llamar de html a div y boton principal*/
var container = document.getElementById("containerButton");
	var button = document.getElementById("listBtn");
/*crear funcion llamando onclick para aparecer elementos*/
function createList () {
	button.style.visibility = "hidden";/*al hacer click desaparece*/
	/*crear elementos: 1)div contenedor 2) input 3)boton guardar*/
	/*crea div y da atributo*/
	var divAddList= document.createElement("div");
	divAddList.setAttribute("class", "divList");

	//crea elemento input y da atributos
	var inputList = document.createElement("input");
	inputList.setAttribute("class", "firstInput");
	inputList.setAttribute("placeholder", "Añadir una lista");

	//crea boton guardar, da atributos y texto por Nodo
	var buttonSave = document.createElement("button");
	buttonSave.setAttribute("class", "saveButton");
	buttonSave.setAttribute("type", "button");
	var textBtn = document.createTextNode("Guardar");

	//asignando padres
	buttonSave.appendChild(textBtn);/*boton es padre de textoboton*/
	divAddList.appendChild(inputList);/*div padre input*/
	divAddList.appendChild(buttonSave);/*div es padre de boton*/
	container.appendChild(divAddList);/*contenedor es padre de div*/

//_________EVENTO AL HACER CLICK EN BOTON GUARDAR____________
	/*1)crear div contenedor, 2)crear titulo con h5, 3)crear <a>*/
	
	buttonSave.addEventListener("click", function() {
		//crea div y da atributos class,  id
		var divCard = document.createElement("div");/*crea div*/
		divCard.setAttribute("class", "divCard1");/*asigna clase div*/
		divCard.setAttribute("id", "cardBox");/*asigna Id al Div*/
		
		//crear elementos que iran en el div
		var nameCard = document.createElement("h5");/*crear h5 titulo tarjeta*/
		var inputText = document.getElementsByClassName("firstInput")[0].value;/*se pasa el valor del input*/
		document.getElementsByClassName("firstInput")[0].value = "";
		var textCard = document.createTextNode(inputText);
		nameCard.appendChild(textCard);

		//crea <a> y da atributos, Nodo texto y asigna padre
		var aAddCard = document.createElement("a");
		aAddCard.setAttribute("href", "#");
		aAddCard.setAttribute("class", "linkCard");
		var textAcard = document.createTextNode("Añadir una tarjeta...");
		
		//asignando padres
		aAddCard.appendChild(textAcard);/*link padre de su nodo texto*/
		divCard.appendChild(nameCard);/*div es padre de h5 titulo*/
		divCard.appendChild(aAddCard);/*div es padre de link*/
		container.appendChild(divCard);/*container es padre del div que contiene todo*/

		container.insertBefore(divCard, container.childNodes[0]);

	//_______EVENTO PARA LINK <a> (añadir una tarjeta)
		aAddCard.addEventListener("click", function() {
			aAddCard.style.display = "none";
			//crea div contenedor y da atributos class
			var textareaDiv = document.createElement("div");
			textareaDiv.setAttribute("class", "textDiv");

			//crea titulo, da atributo class
			var textareaTitle = document.createElement("h5");
			textareaTitle.setAttribute("class","titleTextarea");
			var textNodeTitle = document.createTextNode(inputText);
			textareaTitle.appendChild(textNodeTitle);
			textareaTitle.style.display = "none";

			//crea textarea y da atributos
			var firstTextarea = document.createElement("textarea");
			firstTextarea.setAttribute("class", "textArea");
			firstTextarea.setAttribute("cols", "20");
			firstTextarea.setAttribute("rows", "4");

			//crea botón añadir y da atributo
			var addButton = document.createElement("button");/*crea boton*/
			addButton.setAttribute("class", "addButt");/*da atributos clase*/
			addButton.setAttribute("type", "button");/*tipo */
			var textAddBtn = document.createTextNode("Añadir");/*nodo texto*/

			//asignando padre
			addButton.appendChild(textAddBtn);/*al texto le asigna padre(boton)*/
			textareaDiv.appendChild(textareaTitle);/*div textArea es padre de titulo*/
			textareaDiv.appendChild(firstTextarea);/*div texarea es padre de textarea*/
			textareaDiv.appendChild(addButton);/*div textarea es padre de boton añadir*/
			divCard.appendChild(textareaDiv);/*div tarjeta es padre de todo el contenedor textarea*/

			
			divCard.insertBefore(textareaDiv, divCard.childNodes[1]);

			addButton.addEventListener("click", function() {
				var cardBox2 = document.getElementById("cardBox");

				//recuperar el valor de textarea
				var textValue = document.getElementsByClassName("textArea")[0].value;
				document.getElementsByClassName("textArea")[0].value = "";
				var textNod = document.createTextNode(textValue);
				
				//crea div para almacenar separado 
				var divBox = document.createElement("div");
				divBox.setAttribute("class", "boxDiv");
				var pLoneBox = document.createElement("p");
							
				//asigna padre
				pLoneBox.appendChild(textNod);	
				divBox.appendChild(pLoneBox);
				cardBox2.appendChild(divBox);

				//inserta el  valor de textarea antes del textarea
				var Before = document.getElementsByClassName("boxDiv")[0];
				textareaDiv.insertBefore(Before, textareaDiv.childNodes[0]);
			})
			
		})

	})
}