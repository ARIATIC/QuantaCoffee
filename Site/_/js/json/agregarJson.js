var numArray;
var cantidad;
var producto;
var subtotalCart;
function addNum(num) {

    if (sessionStorage['numArray'] != null && numArray == null) {
        numArray = JSON.parse(sessionStorage['numArray']);
        cantidad = JSON.parse(sessionStorage['cantidad']);
        subtotalCart = JSON.parse(sessionStorage['subtotalCart']);

    }else if (numArray == null) {
        numArray = [];
        
        numArray = [
               { "nombre": "Manzano Roasted", "src": "_/images/SHOP/body/coffee/CoffeeBeanRoasted1.jpg", "precioUnidad": 14, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 1 },
               { "nombre": "Manzano Grounder", "src": "_/images/SHOP/body/coffee/CoffeeBeanRoasted1.jpg", "precioUnidad": 22, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 2 },
               { "nombre": "Manzano Bean Green", "src": "_/images/SHOP/body/coffee/CoffeeBeanGreen1.jpg", "precioUnidad": 22, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 3 },
               { "nombre": "Morelia Roasted", "src": "_/images/SHOP/body/coffee/CoffeeBeanRoasted1.jpg", "precioUnidad": 12, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 4 },
               { "nombre": "Morelia Grounder", "src": "_/images/SHOP/body/coffee/CoffeeBeanRoasted1.jpg", "precioUnidad": 14, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 5 },
               { "nombre": "Morelia Bean Green", "src": "_/images/SHOP/body/coffee/CoffeeBeanGreen1.jpg", "precioUnidad": 22, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 6 }
        ];

        cantidad = 0;
        subtotalCart = 0;
    }


    cantidad = cantidad + 1;
    document.getElementById("cantidad").textContent = cantidad;


    producto = numArray[num - 1];
    var cantProducto = producto.cantidad;
    if (cantProducto == 0) {
        cantProducto = cantProducto + 1;

        numArray[num - 1].cantidad = cantProducto;
        numArray[num - 1].precioDetalle += numArray[num - 1].precioUnidad;


        var tabla = '<div class="row">';
        tabla += '<div class="col-xs-8">';
        tabla += ' <a href="#" class="remove-it"><i class="icon-cancel-circled-outline"></i></a>';
        tabla += '<div class="text-item">';
        tabla += '<p class="cart-popup-title">' + producto.nombre + '</p>';
        tabla += '<p class="cart-popup-info"><span class="popup-price">$' + producto.precioUnidad + '</span> /Qty : <span id="cant' + numArray[num-1].numero + '" class="popup-quality">' + cantProducto + '</span></p>';
        tabla += '</div>';
        tabla += '</div>';
        tabla += '<div class="col-xs-4 thumb">';
        tabla += '<img class="img-responsive" src="' + producto.src + '" alt="thumbnail" />';
        tabla += '</div>';
        tabla += '</div>';
        

        var div = document.createElement("div");
        div.className = 'popup-item';
        div.innerHTML = tabla;
        document.getElementById("popupitem").insertBefore(div,document.getElementById("popup-bottom-info"));

    } else {
        cantProducto = cantProducto + 1;
        numArray[num - 1].cantidad = cantProducto;
        numArray[num - 1].precioDetalle += numArray[num - 1].precioUnidad;

        var idCantidad = "cant" + numArray[num-1].numero;

        document.getElementById(idCantidad).innerHTML = numArray[num - 1].cantidad;
    }
    
    subtotalCart += producto.precioUnidad;
    document.getElementById("subtotal-price").innerHTML =subtotalCart ;
    document.getElementById("popup-subtotal-price").innerHTML = subtotalCart;


    sessionStorage['numArray'] = JSON.stringify(numArray);
    sessionStorage  ['cantidad'] = JSON.stringify(cantidad);
    sessionStorage['subtotalCart'] = JSON.stringify(subtotalCart);



    return false;

}

function load() {


    if (localStorage['numArray'] != null && numArray == null) {

        numArray = JSON.parse(sessionStorage['numArray']);
        cantidad = JSON.parse(sessionStorage['cantidad']);
        subtotalCart = JSON.parse(sessionStorage['subtotalCart']); 

        var index;
        document.getElementById("cantidad").textContent = cantidad;

        for (index = 0; index < numArray.length; index++) {
            if (numArray[index].cantidad != 0) {

                var tabla = '<div class="row">';
                tabla += '<div class="col-xs-8">';
                tabla += ' <a href="#" class="remove-it"><i class="icon-cancel-circled-outline"></i></a>';
                tabla += '<div class="text-item">';
                tabla += '<p class="cart-popup-title">' + numArray[index].nombre + '</p>';
                tabla += '<p class="cart-popup-info"><span class="popup-price">$' + numArray[index].precioUnidad + '</span> /Qty : <span id="cant' + numArray[index].numero + '" class="popup-quality">' + numArray[index].cantidad + '</span></p>';
                tabla += '</div>';
                tabla += '</div>';
                tabla += '<div class="col-xs-4 thumb">';
                tabla += '<img class="img-responsive" src="' + numArray[index].src + '" alt="thumbnail" />';
                tabla += '</div>';
                tabla += '</div>';


                var div = document.createElement("div");
                div.className = 'popup-item';
                div.innerHTML = tabla;
                document.getElementById("popupitem").insertBefore(div, document.getElementById("popup-bottom-info"));

                
                document.getElementById("subtotal-price").innerHTML = subtotalCart;
                document.getElementById("popup-subtotal-price").innerHTML = subtotalCart;

               
            } 
        }
    }

}
window.onload = load;