

$(window).ready(function () {
    const ads_list = [
        {
            photo: "images/Trangchu/ads/slider01.png",
        },
        {
            photo: "images/Trangchu/ads/slider02.png",
        },
        {
            photo: "images/Trangchu/ads/slider03.png",
        },
    ];

    for (var i = 0; i < ads_list.length; i++) {
        var item = ads_list[i];
        var dc=$("<div>");
        $("<img src='" + item.photo + "'/>").appendTo(dc);
        $("#slider__container").append(dc);
        if (i > 0) dc.hide();
    }

    setInterval(function () {
        $("#slider__container > div:first")
            .hide()
            .next()
            .fadeIn(1000)
            .end()
            .appendTo("#slider__container");
    }, 3000);
});
