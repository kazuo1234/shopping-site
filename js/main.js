$(function () {
    $(document).ready(function () {

        // カルーセル
        $(".owl-carousel").owlCarousel(
            {
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                // autoplay: true
                itemsScaleUp : true,
                itemsScaleDown : true
            }
        );

        // スマホ用メニュー
        $(".p-header__spBtnMenu").click(function () {
            $(".header__navigation--sp").slideToggle();
        });

    });
});

$(window).load(function(){
    $(".slideshow__subImage").click(function(){
        var img_src = $(this).attr("src");
        $("#display_img").attr("src", img_src);
    });
});
