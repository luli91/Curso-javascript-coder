//Segunda pre-entrega
//  
//Creo la clase Repuestos que tiene las propiedades que todos los objetos deberian tener
class Repuesto {
    constructor (precio, nombre, cantidad, marca, color, año){
        this.precio = precio;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.marca = marca;
        this.color = color;
        this.año = año;
    }
}

//creamos 3 arrays con el tipo de repuesto 
//Agregamos con el push objetos nuevos a cada tipo de array
const puertas = [];

puertas.push(new Repuesto(35000, "Puerta Delantera Izquierda", 1, "Peugeot", "blanco", 2009));
puertas.push(new Repuesto(41197, "Puerta Delantera Izquierda", 1, "Fiat", "rojo", 2018));
puertas.push(new Repuesto(41197, "Puerta Delantera Izquierda", 1, "Citroen", "gris", 2008));

const tapaDeBaul = [];
tapaDeBaul.push(new Repuesto(35000, "Tapa de baul",1, "Toyota", "blanco", 2016));
tapaDeBaul.push(new Repuesto(41197, "Tapa de baul", 1, "Citroen", "negro", 2009));
tapaDeBaul.push(new Repuesto(41197, "Tapa de baul", 1, "Renault", "gris", 2010));

const paragolpes =[];
paragolpes.push(new Repuesto(35000, "paragolpe delantero",1, "Toyota", "cromado", 2016));
paragolpes.push(new Repuesto(41197, "paragolpe delantero", 1, "Citroen", "negro", 2009));
paragolpes.push(new Repuesto(41197, "paragolpe delantero", 1, "Renault", "verde orcuro", 2010));

//Pedimos al usuario que oingrese la marca que quiere consultar
let marca = prompt("Ingrese la marca a consultar");
// Armamos tres variables para ir guardando los objetos filtrados de cada array que son iguales a la marca que ingreso prompt
//el metodo (funcion) filter crea nuevo array con todos los elementos que cumplen con la funcion, es decir, los que son iguales a la marca, item seria el parametro de la funcion y representa cada elemento del array
let puertasFiltradas = puertas.filter((item) => item.marca === marca);
let tapasFiltradas = tapaDeBaul.filter((item) => item.marca === marca);
let paragolpesFiltrados = paragolpes.filter((item) => item.marca === marca);
//Armamos un variable que tiene los 3 arrays que realizamos por la funcion filter.Para unir los 3 arrays se utilizan los 3 puntos, para luego llamar todos los productos en total
let repuestosFiltrados = [...puertasFiltradas, ...tapasFiltradas, ...paragolpesFiltrados];
if (repuestosFiltrados.length > 0) {
    let mensaje = "Repuestos disponibles:\n"; //representa un salto de línea.
    //se utiliza el método forEach para recorrer el array repuestosFiltrados y con la funcion flecha generamos un mensaje que incluye información sobre cada repuesto disponible.
    // El parametro que se pasa en la funcion flecha (Repuesto) representa cada elemento del array repuestosFiltrados, puede ser cualquier otro nombre
    repuestosFiltrados.forEach((Repuesto) => {
        //+= está concatenando una cadena de texto al final de la variable mensaje
        mensaje += `
        Nombre: ${Repuesto.nombre}
        Precio: $${Repuesto.precio}
        Marca: ${Repuesto.marca}
        Año: ${Repuesto.año}
        Color: ${Repuesto.color}
    `;
    });
    alert(mensaje);
} else {
    alert("No hay repuestos disponibles para la marca ingresada");
}

//MATH
//Quiero sacar una oferta 2x1 pero quiero que el cliente pague por la prenda mas cara y la otra se la lleva de regalo.

//Primero creo una variable con una funcion, esa funcion tiene como parametro los precios de los productos del carrito

let calcularPrecioOferta = (precios) =>{
    let cantidadAPagar = Math.ceil(precios.length / 2); /* Math ceil redondea hacia arriba la cantidad de productos, ej: en el caso que lleve 3 productos precios.lenght/2 daria 1.5, entonces Math ceil redondea a 2 productos */
    let precioTotal = 0; 
    /* el bucle va desde 0 hasta la cantidad de productos que se encuentra en la variable cantidadAPagar */
    for(let i =0; i < cantidadAPagar; i++){
        let precioMaximo = Math.max (...precios); /* se pasa el array (...) precios como argumentos al método Math.max para encontrar el precio máximo en ese array.  */
        precioTotal = precioTotal + precioMaximo;
        precios.splice(precios.indexOf(precioMaximo), 1) /* El primer argumento que se pasa a la función splice es el índice del elemento a eliminar. En este caso, se está utilizando la función indexOf para encontrar el índice del precio máximo en el array precios. El segundo argumento que se pasa a la función splice es la cantidad de elementos a eliminar 1.
        Se elimina el precio máximo del array precios para no volver a sumarlo en la siguiente iteración del bucle.*/
    }
    return precioTotal;
}

    let precioTotal = calcularPrecioOferta([35000, 41197, 30000, 45000]);
    console.log(`El precio total de la oferta es: $${precioTotal}`);
