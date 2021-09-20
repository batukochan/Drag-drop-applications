$(function () {

    // Screen width height values
    let screenW = $(window).width();
    let screenH = $(window).height();

    $(".car").mouseenter(function () {
        let randomX = Math.floor(Math.random() * (screenW - $(this).width()));
        let randomH = Math.floor(Math.random() * (screenH - $(this).height()));

        $(".car img").css({
            left: randomX + "px",
            top: randomH + "px"
        });
    });
});