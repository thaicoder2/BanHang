jQuery(function () {

    var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    
    showPassword('show-pwd', 'password');
    showPassword('show-repwd', 'repass');
    
    $("#signup-form").submit(function (e) {

        let email = $('#email').val().trim();
        if (!(regexEmail.test(email)) || email.length == 0) {
            e.preventDefault();
            changePlaceholder('email', 'Vui lòng nhập đúng email');
        }

        let sdt = $('#num-phone').val().trim();
        if(sdt.length != 10){
            e.preventDefault();
            changePlaceholder('num-phone', 'Vui lòng nhập đúng số điện thoại');
        }

        let password = $('#password').val().trim();
        if(password.length < 6) {
            e.preventDefault();
            changePlaceholder('password', 'Vui lòng nhập đủ 8 kí tự');
        }

        let repass = $('#repass').val().trim();
        if(repass != password || repass.length == 0) {
            e.preventDefault();
            changePlaceholder('repass', 'Nhập lại không khớp');
            console.log(repass);
        }

        if(!($('#check').prop('checked'))) {
            e.preventDefault();
            check('check');
        }
    });
});

function changePlaceholder(id, newPlaceholder) {
    let oldPlaceholder = $('#' + id).attr('placeholder');
    $('#' + id).attr('placeholder', newPlaceholder);
    $('#' + id).parent().addClass('error');

    $('#' + id).focus(function () {
        $('#' + id).parent().removeClass('error');
        $('#' + id).attr('placeholder', oldPlaceholder);
    });
}

function check(id) {
    $('#' + id).parent().addClass('remind');
}

function showPassword(idEYE, idfieldInput) {

    $('#' + idEYE).click(function () {

        let oldClass = $('#' + idEYE).attr('class');
        if((oldClass.indexOf('fa-eye-slash')) != -1) {

            $('#' + idEYE).addClass('fa-eye');
            $('#' + idEYE).removeClass('fa-eye-slash');

            //thay đổi password thành text
            $('#' + idfieldInput).attr('type', 'text');

        } else {    
            $('#' + idEYE).addClass('fa-eye-slash');
            $('#' + idEYE).removeClass('fa-eye');

            $('#' + idfieldInput).attr('type', 'password');
        }

    })
}