$(function() {
	
	//SEARCH BUTTON DROPDOWN
	$("#search .search_categories").click(function(e){
		$(this).parent().removeClass("active");
		$(this).next().slideUp(300);
		if(!$(this).next().is(":visible")){
			$(this).next().slideDown(300);
			$(this).parent().addClass("active");
			$(".user_dropdown ul").slideUp(300);
			$("#user_details").removeClass("active");
		}
		e.preventDefault();
	});
	$("#search ul a").click(function(e){
		var $input = $(this).parent("li").parent("ul").parent("form").find(".search_categories");
		var $hidden = $(this).parent("li").parent("ul").parent("form").find(".search_categories_value");
		var $value = $(this).text();
		var $id = $(this).attr("id");
		if(!$(this).hasClass("active")){
			$(this).parent("li").parent("ul").find("a").removeClass("active");
			$(this).addClass("active");
			$hidden.attr("value",$id);
		}
		e.preventDefault();
	});
	$(document).mouseup(function(e){
		var container = $("#search ul");
		if (!container.is(e.target)
			&& container.has(e.target).length === 0)
		{
			container.slideUp(300);
			$("#search").removeClass("active");
		}
	});
	
	//PROFILE BUTTON DROPDOWN
	$(".user_dropdown > a").click(function(e){
		$(".user_dropdown > a").removeClass("active");
		$(".user_dropdown > ul").slideUp(300);
		if(!$(this).next().is(":visible")){
			$(this).next().slideDown(300);
			$(this).addClass("active");
			$(".search_categories_dropdown").slideUp(300);
			$("#search .search_categories").parent().removeClass("active");
			$(".notifications_dropdown a").removeClass("active");
			$(".notifications_dropdown").removeClass("show");
		}
		e.preventDefault();
	});
	
	//*****[ NOTIFICATIONS DROPDOWN ]*****//
	// Show and hide the notifications dropdown menu
	$(".notifications_dropdown > a").click(function(e) {
		$(this).parent().find("ul").fadeToggle(200);
		$(this).toggleClass("active");
		$(".user_dropdown > a").removeClass("active");
		$(".user_dropdown > ul").slideUp();
		$(".search_categories_dropdown").slideUp(300);
		$("#search .search_categories").parent().removeClass("active");
		e.preventDefault();
	});
	
	$(document).mouseup(function(e){
		var container = $("#search ul");
		if (!container.is(e.target)
			&& container.has(e.target).length === 0)
		{
			container.slideUp(300);
			$("#search").removeClass("active");
		}
	});
	
});