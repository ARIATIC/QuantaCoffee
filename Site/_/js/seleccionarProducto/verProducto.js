var xmlhttp = new XMLHttpRequest();
var url = "_/js/seleccionarProducto/Variety.txt";
xmlhttp.onreadystatechange = function () {

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var variety = JSON.parse(xmlhttp.responseText);
        myFunction(variety);

    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(variety) {
    var item = variety[sessionStorage['producto']];
    document.getElementById("imgPrincipal").src = item.imgprincipal.url;
    document.getElementById("item-name").innerHTML = item.name;
    document.getElementById("item-price").innerHTML = item.price;
    document.getElementById("item-description").innerHTML = item.description;
    document.getElementById("item-properties").innerHTML = item.properties;

}