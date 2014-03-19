$(function(){
    $('#menu_list').find('> li').hover(function(){
        $(this).find('ul')
        .removeClass('animJS')
        .stop(true, true).slideToggle('fast');
    });
});


$(window).load($(function()
{
    var elem = $("#navbar_container");
	var elem2 = $("#content_container");
    var top = elem.offset().top;
    var maxTop = $("#footer_container").offset().top - elem.height();
    var scrollHandler = function()
    {
      var scrollTop = $(window).scrollTop();
      if (scrollTop<top) {
        elem.css({position:"relative",top:""})
		elem2.css({margin:"0 auto 0 auto"})
      } else if (scrollTop>maxTop) {
        elem.css({position:"absolute",top:(maxTop+"px")})
      } else {
        elem.css({position:"fixed",top:"0px"})
		elem2.css({margin:"64px auto 0 auto"})
      }
    }
    $(window).scroll(scrollHandler);scrollHandler()
}));