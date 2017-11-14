$(function() {
    $('nav').on('click', '.navbar-toggler', function(event) {
        $( $(this).data('target') ).addClass('show-nav');
    }).find('#main-nav').on('click', '.close', function(event) {
        $( $(this).data('target') ).removeClass('show-nav');
    });

    $('body').on('click', 'a[href^="#"]', function(event){
        event.preventDefault();
        //Get the link fragment e.g #about
        var fragment=$(this).attr("href");
        //Get element position
        var elementPosition=fragment.length > 1 ? $(fragment).offset().top : 0;
        $("body,html").animate({scrollTop: elementPosition}, 1000);
    })
});