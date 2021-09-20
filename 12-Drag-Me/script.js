$(function () {

    let isDragged = false;
    let firstX, firstY;

    $(".car").mousedown(function (e) {

        isDragged = true;
        firstX = e.clientX;
        firstY = e.clientY;

    });

    $(".car").mouseup(function () {

        isDragged = false;

    });

    $(window).mousemove(function (e) {

        let newX = e.clientX;
        let newY = e.clientY;
        let subtX = newX - firstX;
        let subtY = newY - firstY;

        if (isDragged) {

            console.log(isDragged)

            $(".car").css({

                top: $(".car").position().top + subtY,
                left: $(".car").position().left + subtX
                
            });

        };

        firstX = newX;
        firstY = newY;

    });

});