// Curso de javascript Coder Comisión 47005 
// Primer entrega: Crear un algoritmo con un condicional 
// En este caso yo quiero que el cliente que quiera enviar un formulario llene todos los datos, si alguno de ellos esta vacio que salte un alert "Por favor, complete todos los campos antes de enviar el formulario.", si no que salte otro alert "La consulta se envió correctamente."
let nombre = prompt("Ingrese su nombre");
let telefono = prompt("Ingrese su telefono");
let email = prompt("Ingrese su email");
let mensaje = prompt("Ingrese su mensaje");

if (nombre === "" || telefono === "" || email === "" || mensaje === "") {
    alert("Por favor, complete todos los campos antes de enviar el formulario.");
} else {
    alert("La consulta se envió correctamente.");
    // Enviar el formulario
}

// Crear un algoritmo con un ciclo
// En este caso quiero que el cliente ingrese un codigo de descuento, si es correcto el alert avisa que tiene 20% de descuento si no, tiene hasta 3 intentos si no, se pierde la chance de obtenerlo y le sale alert diciendo que no lo obtuvo.
let codigoIngresado = '';
const intentosMaximos = 3;
let intentos = 0;
const codigoValido = "AUTOPARTES20";
let codigoValidoIngresado = false;
// El ciclo se repite mientras el número de intentos sea menor que el número máximo de intentos y mientras el usuario no haya ingresado el código válido.
for (intentos = 0; intentos < intentosMaximos && !codigoValidoIngresado; intentos++) {
    // El valor ingresado por el usuario se almacena en la variable codigoIngresado para despues compararla en el condicional.
    codigoIngresado = prompt("Ingresa el código de descuento:");
    // Luego, se utiliza una sentencia if...else para verificar si el código ingresado es igual al código válido almacenado en la variable codigoValido
    if (codigoIngresado === codigoValido) {
    alert("¡Código válido! Has obtenido un 20% de descuento en tu compra.");
    codigoValidoIngresado = true;
    } else {
    alert("Código incorrecto. Inténtalo de nuevo.");
    }
}
// Si es distinto a  true ,porque codigoValidoIngresado lo establecimos en true en la linea 177 en el momento que se ingresó correctamente el codigo, es decir si es false 
if (!codigoValidoIngresado) {
    alert("Lo siento, has agotado tus intentos. No has obtenido el descuento.");
}


//funcion

// En este caso quiero que se ingrese un numero por prompt y le haga un 20% de descuento y que muestre por alert el precio sin descuento y con el descuento.

//Defino que quiero que haga la funcion
function calcularDescuento(precio, descuento) {
    const montoDescuento = precio * (descuento / 100);
    const precioFinal = precio - montoDescuento;
    return precioFinal;
}
//Le asignamos un valor a las variables para despues reemplazarlos reemplazar los parametros precio y descuento
let precioOriginal = prompt ("Ingrese precio original del producto");
let porcentajeDescuento = prompt("Ingrese el descuento");
// Luego de asignar valores a los parametros ya la funcion puede trabajar con esos valores pasados
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
alert(`El precio original es $${precioOriginal} y el precio con ${porcentajeDescuento}% de descuento es $${precioConDescuento}`);


