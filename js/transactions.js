$(document).ready(function () {

    let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

    $("#listaMovimientos").empty();

    if (movimientos.length === 0) {

        $("#listaMovimientos").append(
            "<li class='list-group-item text-center'>No hay movimientos registrados.</li>"
        );

    } else {

        movimientos.slice().reverse().forEach(function (movimiento) {

            $("#listaMovimientos").append(
                "<li class='list-group-item'>" + movimiento + "</li>"
            );

        });

    }

});