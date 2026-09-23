$(document).ready(function () {

    $("#sendForm").submit(function (e) {

        e.preventDefault();

        let destinatario = $("#destinatario").val();
        let monto = Number($("#monto").val());

        if (destinatario === "" || monto <= 0 || isNaN(monto)) {

            alert("Complete todos los campos correctamente.");

            return;

        }

        let saldo = Number(localStorage.getItem("saldo"));

        if (monto > saldo) {

            alert("Saldo insuficiente.");

            return;

        }

        saldo -= monto;

        localStorage.setItem("saldo", saldo);


let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

// Agregar movimiento
movimientos.push("Transferencia a " + destinatario + ": -$" + monto.toLocaleString("es-CL"));

// Guardar
localStorage.setItem("movimientos", JSON.stringify(movimientos));

alert("Transferencia realizada con éxito.");

        window.location.href = "menu.html";

    });

});