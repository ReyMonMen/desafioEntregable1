/* Ramon Mendez Elizalde */
let cantidad = 0;
let total = 0;
let producto = 0;
let precio = 0;
let iva = 0;



alert(`Vamos a calcular valores finales de diferentes productos y el valor final de todos sumados hasta que se ingrese 666`);

let ingresoDatos = function () {
    producto = prompt(`Ingrese el nombre del producto`);
    if (producto !== "666"){
        precio = parseInt(prompt(`Ingrese el valor del producto`));
        iva = parseInt(prompt(`ingrese el valor 1 para un iva del 10.5% y 2 para un iva del 21%`));
        if ((iva == 1) || (iva == 2)){
            iva = iva * 10.5
        }else{
            alert(`El valor del iva esta mal ingresado`)
    }

    }
    
    
}

let validacion = function () {
    let boole = prompt(`El producto ingresado es ${producto}, precio es $ ${precio} y el iva es del ${iva}%\n
                        ingrese 1 si es correcto`);
    if (boole != 1){
        boole = 0;
    }
    return boole;
}

let calculos = function(){
    precio = precio + precio * iva/100;
    total = total + precio;
    return 
}

while (producto != "666"){
    ingresoDatos();

    if ((producto != "666") && (validacion() == true)){
        cantidad ++;
        calculos();
        alert(`El valor de producto Nro${cantidad} es ${precio}`);
    }

}

alert (`la cantidad de productos es ${cantidad} y el precio final es $${total}`);
