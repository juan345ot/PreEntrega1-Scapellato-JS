function simularCompra() {
    let total = 0;
    let listaDulces = "";

    for (let i = 1; i <= cantidadDulces; i++) {
        let precioDulce = Math.floor(Math.random() * 10) + 1; // Precio aleatorio entre 1 y 10
        total += precioDulce;
        listaDulces += "Dulce " + i + ": $" + precioDulce + "\n";
    }

    alert("Compra realizada.\n\nLista de dulces:\n" + listaDulces + "\nTotal: $" + total);
}

let cantidadDulces;

alert("Bienvenido al simulador de compra");

do {
    let userInput = prompt("Ingrese la cantidad de dulces que desea comprar (debe ser un número mayor a 0):");

    if (userInput === null) {
        alert("Operación cancelada. Gracias por visitar nuestro simulador de compra de dulces.");
        break;
    }

    cantidadDulces = parseInt(userInput);

    if (isNaN(cantidadDulces) || cantidadDulces <= 0) {
        alert("Por favor, ingrese una cantidad válida de dulces.");
    }
} while (isNaN(cantidadDulces) || cantidadDulces <= 0);

if (!isNaN(cantidadDulces) && cantidadDulces > 0) {
    simularCompra(cantidadDulces);
    // Mensaje de agradecimiento
    alert("Gracias por utilizar el simulador de compra de dulces.");
}
