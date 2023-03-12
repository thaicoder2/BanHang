jQuery(function () {
    //localStorage.clear();
    window.addEventListener("storage", function () {
        loadPage();
        window.onload();
    });
});

function loadPage() {
    for (var i = 0; i < localStorage.length; i++) {
        var arr = JSON.parse(localStorage.getItem(localStorage.key(i)));
        console.log("id:" + arr[0] + ", soluong: " + arr[1]);
        loadItems(arr[0], arr[1]);
    }
}
var final = 0;
function loadItems(id, soluong) {
    let ten = sanpham[id - 1].name;
    let gia = sanpham[id - 1].price;

    final += soluong * gia;
    // console.log(final);

    $("#thanh-tien").text("Thành tiền: " + vnd(final));

    if (gia < 1000000) {
        gia = gia / 1000 + ".000đ";
    } else if (gia == 1000000) {
        gia = gia / 1000000 + ".000.000đ";
    }

    if (id < 10) {
        id = "0" + id;
    }

    let div_sp =
        '<div id="' +
        id +
        '"class="sanpham">' +
        '<img src="./sanpham/sp-0' +
        id +
        '.png" alt="">' +
        '<div class="thongtin-sp">' +
        '<h2 class="text-gradient"><a href="trang_sp.html" onclick="xem_them(' +
        id +
        ')">' +
        ten +
        "</a></h2>" +
        "<h3>Giá: " +
        gia +
        "</h3>" +
        "<p>Số lượng: " +
        soluong +
        "</p>" +
        "</div>" +
        "<div>" +
        '<button class="garbage" onclick="removeSP(' +
        id +
        ')">' +
        '<i class="fas fa-trash-alt"></i>' +
        "</button>" +
        "</div>" +
        "</div>";
    $("#list_sp").append(div_sp);
}

function muahang(id, soluong) {
    console.log(id, soluong);
    if (localStorage[id]) {
        var final = JSON.parse(localStorage.getItem(id));
        soluong = soluong + final[1];
        console.log(final[1]);
    }
    // console.log(id + ':' + soluong);
    localStorage[id] = JSON.stringify([id, soluong]);
}

function cart() {
    $("#cart-button").click(function () {
        window.location.href = "./donhang.html";
    });
}

function removeSP(id) {
    localStorage.removeItem(id);

    if (id < 10) {
        id = "0" + id;
    }
    $("#" + id).remove();
    $("#thanh-tien").text("Thành tiền: " + final);
    location.reload();
}

function vnd(number) {
    number = number / 10;
    number += "0";
    if (number.length < 7) {
        number = number.slice(0, -3) + "." + number.slice(-3);
    } else if (number.length < 9) {
        number = number.slice(0, -3) + "." + number.slice(-3);
        number = number.slice(0, -7) + "." + number.slice(-7);
    }
    number += " đ";
    return number;
}
