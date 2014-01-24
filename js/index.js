$(document).ready(function() {
    $('#home-dream').animate({
        opacity: 1
    }, 3000, function() {
        $('#foot2').animate({
            opacity: 0.25
        }, 1000, function() {
            $('#foot1').animate({
                opacity: 0.25
            }, 1000);
        });
    });
});
