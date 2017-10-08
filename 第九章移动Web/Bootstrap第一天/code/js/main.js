'use strict';
$(function () {
    function resize() {
        var windowWidth = $(window).width();
        // 判断屏幕大小档次
        var isSmallScreen = windowWidth < 768;
        $('#main_ad > .carousel-inner > .item').each(function (i, item) {
            var $item = $(item);
            var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
            $item.css('backgroundImage','url("'+imgSrc+'")');
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }

    $(window).on('resize',resize().triggered('resize'));
});