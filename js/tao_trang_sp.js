jQuery(function () {
    phanLoai("ao-quan-nam");
    phanLoai("phu-kien-nam");
    phanLoai("ao-quan-nu");
    phanLoai("vay-nu");
    phanLoai("phu-kien-nu");
    phanLoai("noi-bat");
    phanLoai("moi");

    loadPage();
});



function phanLoai(loai) {
    var start;
    var end;
    switch (loai) {
        case "ao-quan-nam": {
            start = 1;
            end = 10;
            break;
        }
        case "phu-kien-nam": {
            start = 11;
            end = 15;
            break;
        }
        case "ao-quan-nu": {
            start = 16;
            end = 25;
            break;
        }
        case "vay-nu": {
            start = 26;
            end = 30;
            break;
        }
        case "phu-kien-nu": {
            start = 31;
            end = 35;
            break;
        }

        case "noi-bat": {
            start = 6;
            end = 20;
            break;
        }

        case "moi": {
            start = 26;
            end = 35;
            break;
        }
    }

    load_items(start, end, loai);
}

function load_items(start, end, id) {
    for (var i = start - 1; i < end; i++) {
        let Photo_link = sanpham[i].photo_link;
        let Price = sanpham[i].price;
        let Name = sanpham[i].name;

        if (Price < 1000000) {
            Price = Price / 1000 + ".000đ";
        } else if (Price == 1000000) {
            Price = Price / 1000000 + ".000.000đ";
        }
        let div =
            '<div class="container_sp">' +
            '<div class="img">' +
            '<img class="hinh-sp" src="' +
            Photo_link +
            '"alt=""/>' +
            '<div class="txt" ' +
            '>' +
            '<button class="mua_hang' + (i + 1) + '" onclick = "muahang(' + (i + 1) + ',1)"><i class="fas fa-shopping-basket"></i>Mua hàng</button>' +
            '<button class="xem_them' + (i + 1) + '" onclick = "xem_them(' + (i + 1) + ')"><i class="fas fa-expand-arrows-alt"></i>Xem thêm</button>' +
            "</div></div>" +
            // <a href="trang_sp.html"/>
            '<a href="trang_sp.html" onclick = "xem_them(' + (i + 1) + ')">' +
            "<span><h2>" +
            Name +
            "</h2></span>" +
            "<br/>" +
            "<h3>" +
            Price +
            "</h3>" +
            "</a>" +
            "</div>";
        $("#" + id).append(div);
    }
}

