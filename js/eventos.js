// Obtengo el elemento button con ID idFooter de mi html
let myButton = document.getElementById("idFooter");
myButton.hidden = false;

myButton.oncontextmenu = contextMenu

// Comportamiento distinto
let myButtonWithClass = document.getElementsByClassName("footer");
console.dir(myButtonWithClass);

// Obtengo el primero que coincida con el selector
let myInputForm = document.querySelector("body > form");
myInputForm.onsubmit= (evento) => {
    alert("Submit");
    evento.preventDefault();
}

let myButtonCreateTable = document.querySelector("body > button:nth-child(5)");
myButtonCreateTable.onclick = createTable;


function createTable() {
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);
  
    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);
  
    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);
}


function hideShow(){
    //myButton.hidden = !myButton.hidden;
    for (let index = 0; index < myButtonWithClass.length; index++) {
        myButtonWithClass[index].hidden = !myButtonWithClass[index].hidden;
    }
}

function saludar() {
    alert("Hola");
}

function contextMenu(evento) {
    console.log(evento);
    evento.preventDefault();
    alert("No podes hacer click derecho");
    console.dir(document.body)

    //document.location = "https://www.google.com";
}