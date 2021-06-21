
$(document).ready(function () {
    $(".design-1").click(function () {
        $(".first").toggle();
        $(".des").toggle();
    });
});
$(document).ready(function () {
    $(".design-2").click(function () {
        $(".second").toggle();
        $(".dev").toggle();
    });
});

$(document).ready(function () {
    $(".design-3").click(function () {
        $(".third").toggle();
        $(".pro").toggle();
    });
});



$(document).ready(function(){
    $(".pic").hover(function(){
        $(this).find("div").toggleClass("pic-description_show")
    })
})

$(document).ready(function () {
    $(".btn").click(function () {
        alert('We have received your message. Thank you fro reaching out to us.');
    })
});