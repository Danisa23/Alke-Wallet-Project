$(document).ready(function () {

    let saldo = localStorage.getItem("saldo");

    if (saldo == null) {
        saldo = 350000;
        localStorage.setItem("saldo", saldo);
    }

    $("#saldo").text("$" + Number(saldo).toLocaleString("es-CL"));

});