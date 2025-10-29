//var nome = Kinho
//console.log(nome)
//nome = 335
//console.log(nome)

var h3 = document.querySelector("h3")
var h5 = document.querySelector("h5")
var pID = document.getElementById("textoB")
var pClass = document.getElementsByClassName("textoNormal")
var listaLi = document.querySelectorAll("li")

//Peguei a tag "pai" - 01/01
var ul = document.querySelector("ul")

//Peguei a tag "pai" - 01/02
var section = document.querySelector("section")

//criação elemento - 02/01
var li = document.createElement("li")

//criação elemento - 02/02
var h2 = document.createElement("h2")
var button = document.createElement("button")


h3.innerHTML = "Olá mundo"
h5.innerHTML = "Texte dois"
pID.innerHTML = "Bem vindo ao curso"
//console.log(pClass[0].innerHTML)
pClass[0].innerHTML = "Bem vindo a UNESCO"
listaLi[0].innerHTML = "Uma"
listaLi[1].innerHTML = "Bolinha"
listaLi[2].innerHTML = "De"
listaLi[3].innerHTML = "Gorf"

//Modifiquei a propriedade do objeto criado - 03/01
li.innerHTML = "Chocolate"

//Adicionei o objeto li ao pai - 04/01
ul.append(li)

//Modifiquei a propriedade do objeto criado - 03/02
h2.innerHTML = "Paralelepipedo"
button.innerHTML = "Clique aqui"

//Adicionei o objeto li ao pai - 04/02
section.append(h2)
section.append(button)

button.onclick = Clicar

function Clicar () {
    
    console.log(inpuText.value)
}