
//Cementary Party es un lugar de ventas de cosas insolitas. Las categorias de estos son: figuras/vinilos/libros/objetos 

//Introduccion del usuario
//Ciclo 1
let nombreDelNavegante = prompt('Ingrese el nombre con el que quiera ser llamado en esta fiesta');

while(nombreDelNavegante == ''){
    alert ('Por favor, ingrese nombre visible');
    nombreDelNavegante = prompt('Ingrese un nombre no invisible');
}

alert('¡Le damos la bienvenida a Cementary Party ' +nombreDelNavegante + '!');

//Introduccion de los productos

let propuesta = prompt ('¿Desea ver nuestros productos,' + ' ' + nombreDelNavegante + '?' + '\n- Si (Y)\n- No (N)');
//variable global para calcular el total de la compra
let total = 0;

//Posible Ciclo 2
while(propuesta == 'N'){
    alert ('¡Gracias por visitarnos, pero vayase a cagar!')
    break;
}
//Posible Ciclo 2
while (propuesta == 'Y'){
    let productos = propuesta && prompt('¿Que tipo de productos desea ver,' + ' ' + nombreDelNavegante + '?' + '\n- figuras (F) \n- vinilos (V) \n- libros(L) \n- objetos(O)')

while (productos == 'F'){
    productos = prompt (' A - Muñeco de Charly Garcia tirandose a la pilera $237 \n B - Muñeco Chucky vestido de bailarina de ballet $456 \n C - Muñeco satirico de Donald Trump cabeza grande vestido de monje $1,59');
    switch(productos){
        case 'A':
            alert ('¡Agregaste Muñeco de Charly Garcia tirandose a la pilera $237 a tu carrito'+ ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(237);
            break;
        case 'B':
            alert ('¡Agregaste Muñeco Chucky vestido de bailarina de ballet $456 a tu carrito'+ ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(456);
            break;
        case 'C':
            alert ('¡Agregaste Muñeco satirico de Donald Trump cabeza grande vestido de monje $1,59 a tu carrito'+ ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(1.59);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }
}
    
while (productos == 'V'){
     productos = prompt ('1- "Pataki" - Ojete Calor(2017) a $1500 \n2- "Maquillate" - Nancys Rubias (2005) a $800 \n3-  "Nightlife" - Pet Shop Boys (1999) a $4030');
        switch(productos){
        case '1':
            alert ('¡Agregaste "Pataki" - Ojete Calor(2017) a $1500 a tu carrito' + ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(1500);
            break;
        case '2':
            alert ('¡Agregaste "Maquillate" - Nancys Rubias (2005) a $800 a tu carrito' + ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(800);
            break;
        case '3':
            alert ('¡Agregaste "Nightlife" - Pet Shop Boys (1999) a $4030 a tu carrito' + ',' + ' ' + nombreDelNavegante + '!');
            console.log('Si')
            incrementarTotal(4030);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }  
}

while (productos == 'L'){
    productos = prompt ('I- "Cine Bizarro" - Diego Curbeto $963 \nII- "Melancholy Elephants" - Spider Robinson $571 \nIII- "Babyfucker" - Urs Allerman $612 ');
    switch(productos){
        case 'I':
            alert ('¡Agregaste "Cine Bizarro" - Diego Curbeto $963 a tu carrito' + ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(963);
            break;
        case 'II':
            alert ('¡Agregaste "Melancholy Elephants" - Spider Robinson $571 a tu carrito' + ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(571);
            break;
        case 'III':
            alert ('¡Agregaste "Babyfucker" - Urs Allerman $612 a tu carrito' + ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(612);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }
}

while (productos == 'O'){
    productos = prompt ('+ Tres pelotas de golf con foto de Guillermo Coppola $179 \n* Chaleco para conejo $333 \n/ Embrión de alien del Área 51 $5151');
    switch(productos){
        case '+':
            alert ('¡Agregaste Tres pelotas de golf con foto de Guillermo Coppola $179 a tu carrito'+ ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(179);
            break;
        case '*':
            alert ('¡Agregaste Chaleco para conejo $333 a tu carrito'+ ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(333);
            break;
        case '/':
            alert ('¡Agregaste Embrión de alien del Área 51 $5151 a tu carrito'+ ',' + ' ' + nombreDelNavegante + '!');
            incrementarTotal(5151);
            break;
        default:
            alert('Codigo inexistente');
            break;
    }
}

propuesta = prompt('¿Desea seguir agregando productos a su carrito,' + ' ' + nombreDelNavegante + '?' + '\n- Si (Y)\n- No (N)')

function incrementarTotal(precio){
    total = total + precio;
    alert('El subtotal de sus productos hasta el momento es de $' +total + ',' + ' ' + nombreDelNavegante + '.');
}

alert ('Total de su compra es $' +total + ',' + ' ' + nombreDelNavegante + '.');
if (propuesta == 'N'){
    alert ('¡Gracias por su compra' + ',' + ' ' + nombreDelNavegante + '!')
    console.log ('yes')
}

}

 /*   Estructura de SWITCH
 
    switch(producto){
        case '':
            alert ('');
            incrementarTotal();
            break;
        case '':
            alert ('');
            incrementarTotal();
            break;
        case '':
            alert ('');
            incrementarTotal();
            break;
    }

*/

