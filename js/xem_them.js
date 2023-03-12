jQuery(function () {
    let id = window.localStorage.getItem("id_xem_them");
    loadPage(id);
    quantity(id);
});
function xem_them(id) {
    window.location.href = "trang_sp.html";
    window.localStorage.setItem("id_xem_them", id);
}

function loadPage(id) {
    let name = sanpham[id - 1].name;
    let price = sanpham[id - 1].price;
    let soluong = sanpham[id - 1].soluong;

    if (price < 1000000) {
        price = price / 1000 + ".000đ";
    } else if (price == 1000000) {
        price = price / 1000000 + ".000.000đ";
    }

    if (id < 10) {
        id = "0" + id;
    }
    let div =
        '<div class="container_items">' +
        '<img src="sanpham/sp-0' +
        id +
        '.png" alt="" />' +
        '<div class="item_info">' +
        "<h2>" +
        name +
        "</h2>" +
        "<p>Số lượng: " +
        soluong +
        "</p>" +
        "<h3>Giá: " +
        price +
        "</h3>" +
        '<div class="input-group">' +
        '<button id="minus" class="btn" type="button">-</button>' +
        '<input id="quantity" type="text" value="1" readonly/>' +
        '<button id="add" class="btn" type="button">+</button>' +
        "</div>" +
        '<button class="mua_hang" onclick = "muahang('+ id +',1)">Mua hàng</button>' +
        "</div>" +
        "</div>" +
        '<div class="container_reviews">' +
        '<div class="tab-item active">Mô tả</div>' +
        '<div class="description">' +
        "<p>" +
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repudiandae qui soluta quia. Deleniti" +
        "necessitatibus sequi natus suscipit eius quibusdam ex distinctio fugit dolores voluptatum, laborum sunt" +
        "officiis earum rem." +
        "</p>" +
        "</div>" +
        "</div>";

    $(".box_items").append(div);
}

function quantity(id) {
    var quantity = $("#quantity").attr("value");
    parseInt(quantity);
    
    $("#minus").click(function (e) {
        if (quantity == 1) {
            e.preventDefault();
        } else {
            quantity--;
            console.log(quantity);
            $("#quantity").attr("value", quantity);
        }
    });

    $("#add").click(function (e) {
        if (quantity == 100) {
            e.preventDefault();
        } else {
            quantity++;
            console.log(quantity);
            $("#quantity").attr("value", quantity);
        }
    });
}
