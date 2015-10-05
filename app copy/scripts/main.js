'use strict';

(function($) {
  $(document).ready(function() {


	$(".morebutton").click(function(){
	    $(".closebutton").show();
	    $(".morebutton").hide();
		$(".items").css("opacity","0.4");
		$("#mainContent").css("animation-name","contractMainContent");
		$("#sideContent").css("animation-name","expandSideContent");
		$("#mainContent").css("width","30%");
		$("#sideContent").css("width","65%");
		$(".firstitem").css("height","276px");
	});

	$(".closebutton").click(function(){
	    $(".morebutton").show();
	    $(".closebutton").hide();
		$(".items").css("opacity","1");
		$("#mainContent").css("animation-name","expandMainContent");
		$("#sideContent").css("animation-name","contractSideContent");
		$("#mainContent").css("width","95%");
		$("#sideContent").css("width","0%");
		$(".firstitem").css("height","432px");
	});



  });
})(jQuery);
