$(document).ready(function () {

    $("#loginForm").submit(function (e) {

        e.preventDefault();

        let email = $("#email").val();
        let password = $("#password").val();

        if (email === "" || password === "") {

            alert("Debe completar todos los campos.");

            return;
        }

        localStorage.setItem("usuario", email);

        window.location.href = "menu.html";

    });

});