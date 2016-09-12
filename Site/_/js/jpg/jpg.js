$(document).on("ready", function () {
    arreglo_json = new Array();
    $(".add-to-cart").on("click", function () {
        var el_nombre = $("#nombre").val();
        var la_edad = $("#edad").val();
        for (i = 0; i < arreglo_json.length; i++) {
            arreglo_json.push({ "nombre": el_nombre, "edad": la_edad });
        }
        $("#nombre").val("");
        $("#edad").val("");
    });
    $("#alerta").on("click", function () {
        console.log(arreglo_json.length);
    });
});