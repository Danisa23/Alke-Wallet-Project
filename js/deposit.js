$(document).ready(function () {

    $("#depositForm").submit(function (e) {

        e.preventDefault();

        let monto = Number($("#monto").val());

        if (monto <= 0 || isNaN(monto)) {

            alert("Ingrese un monto válido.");

            return;

        }

        let saldo = Number(localStorage.getItem("saldo"));

        saldo += monto;

        localStorage.setItem("saldo", saldo);

        let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

        movimientos.push("Depósito: +$" + monto.toLocaleString("es-CL"));

        localStorage.setItem("movimientos", JSON.stringify(movimientos));

        alert("Depósito realizado con éxito.");

        window.location.href = "menu.html";

    });

});