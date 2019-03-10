$(function() {
    $("nav li").each(function(index, element) {
		var $total = $(this).children("ul").children("li").size();
		var $class = $(this).attr("class");
        if ($total>=1){
			$(this).children("a").addClass("tab");
			$(this).children(".tab").click(function(e){
				e.preventDefault();
			});
		}
		if($("body").hasClass($class)){
			$(this).children("a").addClass("current");
			$(this).parent("ul").siblings("a").addClass("current");
		}
    });
	$("nav .tab").click(function(){
		$(this).parent("li").parent("ul").find("ul").slideUp(200);
		$(this).parent("li").parent("ul").find(".tab").removeClass("active");
		if(!$(this).next().is(":visible")){
			$(this).next().slideDown(200);
			$(this).addClass("active");
		}
	});
});