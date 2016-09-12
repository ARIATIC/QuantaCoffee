var numArray;
var cantidad;
var producto;
var subtotalCart;


function substractNum(num) {
    var idCantidad;
    var idprecioDetalle;
    var inQuan;


    if (cantidad > 0) {
        producto = numArray[num - 1];

        if (producto.cantidad > 0) {
            //cantidad total le quita un elemento
            cantidad = cantidad - 1;
            document.getElementById("cantidad").textContent = cantidad;

            //cantidad del elemento le resta 1
            numArray[num - 1].cantidad =numArray[num - 1].cantidad - 1;
            //Precio Detalle le quito el valor de la unidad
            numArray[num - 1].precioDetalle =numArray[num - 1].precioDetalle - numArray[num - 1].precioUnidad;

            //precio total le quita el valor de la unidad
            subtotalCart -= producto.precioUnidad;


            //Agregar valores al html
            idCantidad = "cant" + numArray[num - 1].numero;
            idprecioDetalle = "precioDetalle" + numArray[num - 1].numero;
            inQuan = "input-quantity" + numArray[num - 1].numero;

            document.getElementById(inQuan).value = numArray[num - 1].cantidad;
            document.getElementById(inQuan).innerHTML = numArray[num - 1].cantidad;
            document.getElementById(idCantidad).innerHTML = numArray[num - 1].cantidad;
            document.getElementById(idprecioDetalle).innerHTML = numArray[num - 1].precioDetalle;

        } else {
            //eliminar
        }
    }
    document.getElementById("cart-total").innerHTML = subtotalCart;
    document.getElementById("cart-subtotal").innerHTML = subtotalCart;
    document.getElementById("popup-subtotal-price").innerHTML = subtotalCart;
    document.getElementById("subtotal-price").innerHTML = subtotalCart;


    sessionStorage['numArray'] = JSON.stringify(numArray);
    sessionStorage['cantidad'] = JSON.stringify(cantidad);
    sessionStorage['subtotalCart'] = JSON.stringify(subtotalCart);

}

function addNum(num) {

   
    cantidad = cantidad + 1;
    document.getElementById("cantidad").textContent = cantidad;


    producto = numArray[num - 1];
    var cantProducto = producto.cantidad;
    var precioDetalle = producto.precioDetalle;
    var idCantidad;
    var idprecioDetalle;
    var inQuan;
    precioDetalle += producto.precioUnidad;
    if (cantProducto == 0) {
        cantProducto = cantProducto + 1;

        numArray[num - 1].cantidad = cantProducto;


        var tabla = '<div class="row">';
        tabla += '<div class="col-xs-8">';
        tabla += ' <a href="#" class="remove-it"><i class="icon-cancel-circled-outline"></i></a>';
        tabla += '<div class="text-item">';
        tabla += '<p class="cart-popup-title">' + producto.nombre + '</p>';
        tabla += '<p class="cart-popup-info"><span class="popup-price">$' + producto.precioUnidad + '</span> /Qty : <span id="cant' + num + '" class="popup-quality">' + cantProducto + '</span></p>';
        tabla += '</div>';
        tabla += '</div>';
        tabla += '<div class="col-xs-4 thumb">';
        tabla += '<img class="img-responsive" src="' + producto.src + '" alt="thumbnail" />';
        tabla += '</div>';
        tabla += '</div>';


        var div = document.createElement("div");
        div.className = 'popup-item';
        div.innerHTML = tabla;
        document.getElementById("popupitem").insertBefore(div, document.getElementById("popup-bottom-info"));

    } else {
        cantProducto = cantProducto + 1;
        numArray[num - 1].cantidad = cantProducto;
        numArray[num - 1].precioDetalle = precioDetalle;
        idCantidad = "cant" + numArray[num - 1].numero;
        idprecioDetalle = "precioDetalle" + numArray[num - 1].numero;
        inQuan = "input-quantity" + numArray[num - 1].numero;

        document.getElementById(inQuan).value = cantProducto;
        document.getElementById(inQuan).innerHTML = cantProducto;
        document.getElementById(idCantidad).innerHTML = cantProducto;
        document.getElementById(idprecioDetalle).innerHTML = precioDetalle;
        
    }

    subtotalCart += producto.precioUnidad;
    document.getElementById("cart-total").innerHTML = subtotalCart;
    document.getElementById("cart-subtotal").innerHTML = subtotalCart;
    document.getElementById("popup-subtotal-price").innerHTML = subtotalCart;
    document.getElementById("subtotal-price").innerHTML = subtotalCart;


    sessionStorage['numArray'] = JSON.stringify(numArray);
    sessionStorage['cantidad'] = JSON.stringify(cantidad);
    sessionStorage['subtotalCart'] = JSON.stringify(subtotalCart);



    return false;

}


function load() {


    if (sessionStorage['numArray'] != null && numArray == null) {

        numArray = JSON.parse(sessionStorage['numArray']);
        cantidad = JSON.parse(sessionStorage['cantidad']);
        subtotalCart = JSON.parse(sessionStorage['subtotalCart']);
    } else if (numArray == null) {
        numArray = [];
        numArray = [
               { "nombre": "Manzano Roasted", "src": "_/images/SHOP/body/coffee/CoffeeBeanRoasted1.jpg", "precioUnidad": 14,"precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 1 },
               { "nombre": "Manzano Grounder", "src": "_/images/SHOP/body/coffee/CoffeeBeanRoasted1.jpg", "precioUnidad": 22, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 2 },
               { "nombre": "Manzano Bean Green", "src": "_/images/SHOP/body/coffee/CoffeeBeanGreen1.jpg", "precioUnidad": 22, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 3 },
               { "nombre": "Morelia Roasted", "src": "_/images/SHOP/body/coffee/CoffeeBeanRoasted1.jpg", "precioUnidad": 12, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 4 },
               { "nombre": "Morelia Grounder", "src": "_/images/SHOP/body/coffee/CoffeeBeanRoasted1.jpg", "precioUnidad": 14, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 5 },
               { "nombre": "Morelia Bean Green", "src": "_/images/SHOP/body/coffee/CoffeeBeanGreen1.jpg", "precioUnidad": 22, "precioDetalle": 0, "peso": 12, "cantidad": 0, "numero": 6 }
        ];
        subtotalCart = 0;
        cantidad = 0;
    }

    var index;
    document.getElementById("cantidad").textContent = cantidad;
    var tablaProducto = '';


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

            tablaProducto += '<tr>';
            tablaProducto += '<td class="dt-col-item-product">';
            tablaProducto += '<a class="remove-item" href="#"><i class="icon-cancel-circled-outline"></i></a>';
            tablaProducto += '<a href="shop_detail_product_fullwidth.html" class="dt-item-product-image"><img class="img-responsive" src="' + numArray[index].src + '" alt=""></a>';
            tablaProducto += '<a href="shop_detail_product_fullwidth.html" class="dt-item-product-name">' + numArray[index].nombre + '</a>';
            tablaProducto += '</td>';
            tablaProducto += ' <td><span class="amount">&#36;' + numArray[index].precioUnidad + '</span></td>';
            tablaProducto += '<td class="dt-col-quantity">';
            tablaProducto += '<ul>';
            tablaProducto += '<li>';
            tablaProducto += '<button class="btn-minusquantity" onclick="substractNum(' + numArray[index].numero + ');">–</button>';
            tablaProducto += '<input class="input-quantity" id="input-quantity' + numArray[index].numero + '" value="' + numArray[index].cantidad + '" readonly />';
            tablaProducto += ' <button class="btn-plusquantity" onclick="addNum('+numArray[index].numero+');">+</button>';
            tablaProducto += '</li>';
            tablaProducto += '</ul>';
            tablaProducto += '</td>';
            tablaProducto += '<td class="dt-col-total"><span class="amount">&#36;<span id="precioDetalle' + numArray[index].numero + '">' + numArray[index].precioDetalle + '</span></span></td>';
            tablaProducto += ' </tr>';
                    

           

        } 
        
    }
    document.getElementById("tbody").innerHTML = tablaProducto;

    document.getElementById("cart-subtotal").innerHTML = subtotalCart;
    document.getElementById("cart-total").innerHTML = subtotalCart;
    document.getElementById("subtotal-price").innerHTML = subtotalCart;
    document.getElementById("popup-subtotal-price").innerHTML = subtotalCart;


}
window.onload = load;