var xmlhttp = new XMLHttpRequest();
var url = "_/js/json/VarietyManzano.txt";
xmlhttp.onreadystatechange = function () {
    alert("readyState: " + xmlhttp.readyState + " status: " + xmlhttp.status);

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText);
        var variety = JSON.parse(xmlhttp.responseText);
        myFunction(variety);

    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(variety) {
    var out = "";
    var i = 0;
    document.getElementById("div1").innerHTML = variety.item.name+variety.item2.name;
}