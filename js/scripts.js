
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
    $('button').click(function(){
        var blanks = ["input"];
          blanks.forEach(function(blank){ 
            var userInput = $('this').val();
            $(blank).text(userInput).val();
        alert(blank + "we have received the message")
    });
    });
})
