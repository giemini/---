$(window).scroll(function() {
    var scrollVal = $(this).scrollTop();
    if (scrollVal >= 605.35) {
        $(".header").addClass("fix");
        $(".loadheader").addClass("loadfix");
    } else {
        $(".header").removeClass("fix");
        $(".loadheader").removeClass("loadfix");
    }
});