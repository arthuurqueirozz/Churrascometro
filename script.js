// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5


var inputHoras = document.getElementById("horas")
var inputAdultos = document.getElementById("adultos")
var inputCriancas = document.getElementById("criancas")

var resultado = document.getElementById("resultado")


function calculo(){
    let horas = inputHoras.value
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    
    resultado.innerHTML += `<p>${carne(horas,criancas,adultos)/1000} Kg de Carne</p>` 
    resultado.innerHTML += `<p>${Math.ceil(bebida(horas,criancas,adultos)/2000)} Pet's 2L de Bebidas</p>` 
    resultado.innerHTML += `<p>${Math.ceil(cerveja(horas,adultos)/350) } latas de cerveja</p>` 
}

function carne(horas,criancas,adultos){
    if (horas<6) {
        return (400 * adultos) + (200 * criancas)
    }
    else{
        return (650 * adultos) + (325 * criancas)
    }
}

function cerveja(horas,adultos){
    if (horas<6) {
        return(1200 * adultos)
    }
    else{
        return 2000 * adultos
    }
}

function bebida(horas,criancas,adultos) {
    if (horas<6) {
        return (1200 * adultos) + (600 * criancas) 
    }
    else{
        return (2000 * adultos) + (1000 * criancas) 
    }
}