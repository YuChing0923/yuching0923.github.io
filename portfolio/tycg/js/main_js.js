$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});

$(function(){
    $('#goToTop').hide();
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1300){
            $('#goToTop').fadeIn();
        }else{
            $('#goToTop').fadeOut();
        }
    });
    
    $('#goToTop').click(function(){
        $('body,html').animate({
            scrollTop:0
        },500);
        return false;
    });
});