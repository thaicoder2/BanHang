jQuery(function () {
    $("#search-form").submit(function (event) {
        var info = $("#info").val();

        if (!check_info(info)) {
            event.preventDefault();
            console.log("Chưa có thông tin tìm kiếm");
        } else {
            console.log(info.trim());
        }
    });


    cart();
});

function check_info(info) {
    if (info.trim().length == 0) {
        return false;
    }
    return true;
}

function cart() {
    $('#cart-button').click(function () {
        window.location.href = "/donhang.html";
        console.log('ok');
    })
    
}