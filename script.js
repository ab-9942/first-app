const valoareInput = document.getElementById("valoare");
const trimiteButton = document.getElementById("trimite");
const listaInput = document.getElementById("lista");


function addElement(){
    const text = valoareInput.value;

    if(text === ""){
        alert("Ba prostule, scrie cv");
        return;
    }

    const element = document.createElement("li");
    element.textContent = text;

    element.addEventListener("click", function(){
        element.remove();
    })

    lista.appendChild(element);

    valoareInput.value = "";
}

trimiteButton.addEventListener("click", addElement);

