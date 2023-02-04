 //Entrada de dados 
 const usuario = prompt("Qual o seu nome?")
 const star = prompt("Qual o nome da estrela?")
 var lightYears = prompt("A quantos anos luz ela está da terra")

//Processamento dos Dados
let distance = lightYears
let convertorLY = distance * 9460536068.016

//Saída de Dados
alert(usuario+", a distancia entre "+star+" e a terra é de "+distance+" ou seja,"+convertorLY+ " km.")

