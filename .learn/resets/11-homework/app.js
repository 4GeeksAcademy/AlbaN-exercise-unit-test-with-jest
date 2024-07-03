// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a yenes
    let valueInYen = valueInDollar * 1462.61;
    // Retornamos el valor en yenes
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a pounds
    let valueInPound = valueInYen * 0.0556;
    // Retornamos el valor en pounds
    return valueInYen;
}



// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = fromEuroToDollar