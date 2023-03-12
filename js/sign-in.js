jQuery(function () {
    var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    showPassword("show-passwd", "log-password");

    $("#signin-form").submit(function (e) {
        let email = $("#log-email").val().trim();
        if (!regexEmail.test(email) || email.length == 0) {
            e.preventDefault();
            changePlaceholder("log-email", "Vui lòng nhập đúng email");
        }

        let password = $("#log-password").val().trim();
        if (password.length < 6) {
            e.preventDefault();
            changePlaceholder("log-password", "Vui lòng nhập đủ 8 kí tự");
        }
    });
});

function quenmatkhau(event) {
    alert("Mật khẩu mới đã gửi tới email của bạn");
    return false;
}