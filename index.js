$("#aboutbutton").click(function() {
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 500);
});

$("#skillbutton").click(function() {
    $('html, body').animate({
        scrollTop: $(".skills").offset().top
    }, 1000);
});

$("#experiencebutton").click(function() {
    $('html, body').animate({
        scrollTop: $(".experience").offset().top
    }, 1500);
});