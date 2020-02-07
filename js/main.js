


$(window).scroll(function () {

$( ".revealable" ).each(function(){
var hauteurFenetre = $(window).height();
var distanceTopElementTopFenetre=$(this).offset().top;
var distanceScrollee = $(window).scrollTop();

    if ((distanceScrollee+(hauteurFenetre-100))>=distanceTopElementTopFenetre){
    
    $(this).addClass('active');
    }
    
});
});





