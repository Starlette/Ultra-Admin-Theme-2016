$(function() {
	
	//*****[ LEFT MENU TOGGLE BUTTON ]*****//
	$("#menu_toggle").click(function(e){
		var $menu = $("nav"), $toggle = $(this), $content = $("section"), $class = "closed";
		$menu.toggleClass($class);
		$toggle.toggleClass($class);
		$content.toggleClass($class);
		e.preventDefault();
	});
	
	//*****[ CHAT BUBBLE TOGGLE ]*****//
	$(".chat a").click(function(e){
		$(this).parent().find(".chat-block").slideToggle(200);
		e.preventDefault();
	});
	
	//*****[ SET WIDTH AND HEIGHT OF NEW REGISTRATIONS' IMAGES ]*****//
	$(".registrations li").each(function(index, element) {
        var $Img_Height = $(this).find("img").outerHeight(),
		$Max_Height = $(this).find('.profile').outerHeight(),
		$Margin_Top = ($Img_Height-$Max_Height)/2;
		if ($Img_Height<$Max_Height) {
			$("img",this).css({
				"height":"55px",
				"width":"auto"
			});
		} else {
			$("img",this).css({
				"height":"auto",
				"width":"55px",
				"margin-top":-$Margin_Top
			});
		}
        var $Img_Width = $(this).find("img").outerWidth(),
		$Max_Width = $(this).find('.profile').outerWidth(),
		$Margin_Left = ($Img_Width-$Max_Width)/2;
		if ($Img_Width>$Max_Width) {
			$("img",this).css({
				"margin-left":-$Margin_Left
			});
		}
    });
	
	//*****[ SET FORM ATTRIBUTES ]*****//
	$("form").each(function(index, element) {
        $(this).attr("enctype","multipart/form-data");
        $(this).attr("autocomplete","off");
    });
	
	//*****[ TABS ATTRIBUTES ]*****//
	$(".nav-tabs").each(function(index, element) {
        $(this).attr("role","tablist");
		$(this).children("li:first").addClass("active");
		$(this).children("li").each(function(index, element) {
            var $tab = $(this).children("a"), $target = $tab.attr("href");
			$tab.attr("role","tab").attr("data-toggle","tab").attr("aria-controls",$target).attr("href","#"+$target);
        });
		$(this).next(".tab-content").children("div:first").addClass("active").addClass("in");
		$(this).next(".tab-content").children("div").each(function(index, element) {
            $(this).attr("role","tabpanel").addClass("tab-pane").addClass("fade");
        });
    });
	
	//*****[ SET INPUT ATTRIBUTES ]*****//
	$("input").each(function(index, element) {
		
        // Get placeholder and required attributes
		var $required = $(this).attr("required");
		var $placeholder = $(this).attr("placeholder");
		
		// Add required * if required
		if (typeof $required !== typeof undefined && $required !== false) {
			$(this).addClass("required");
		} else {
			$(this).addClass("not-required");
		}
		
		// Add tooltip if placeholder attr is set
		if (typeof $placeholder !== typeof undefined && $placeholder !== false) {
			$(this).before("<em class='tip'>"+$placeholder+"</em>");
			$(this).parent().addClass('TooltipWrapper');
		}
		
		// Remove all visible tooltips then make related tooltip visible
		$(this).parent().hover(function() {
			$(".tip").each(function(index, element) {
                $(this).removeClass("show");
            });
			$(this).find(".tip").addClass("show");
		},function() {
			$(this).find(".tip").removeClass("show");
		});
		
		// Add :valid style to .not-required fields
		$(this).on("change", function() {
			var $value = $(this).val();
			if (typeof $value !== typeof undefined && $value !== false && $value !== "") {
				$(this).addClass("required");
				$(this).removeClass("not-required");
			} else {
				$(this).addClass("not-required");
				$(this).removeClass("required");
			}
		});
		
    });
	$("input[type='file'] + label").each(function(index, element) {
        $(this).text("choose file");
		$(this).siblings("input").on("change", function() {
			var $total = $(this).get(0).files.length;
			if ( $total > 1 ) {
				$(this).siblings("label").html("<strong>"+$total+" files selected</strong>");
			} else {
				$(this).siblings("label").html("<strong>1 file selected</strong>");
			}
		});
    });
	
	//*****[ SET NUMBER TEXT FIELD WITH DECIMAL OPTION ]*****//
	// only allows numbers and fullstops
	$('.number').keyup(function(){
        var val = $(this).val();
		if(isNaN(val)){
			 val = val.replace(/[^0-9\.]/g,'');
			 if(val.split('.').length>2) 
				 val =val.replace(/\.+$/,"");
		}
		$(this).val(val);
  	});
	
	//*****[ DATE PICKER ]*****//
	// Make text fields a datepicker
    $(".date").each(function(index, element) {
		
		var $target = $(this).attr("name");
		$(this).parent().attr("id",$target);
		$(this).parent().addClass('date_wrapper');
		
        $(this).datepicker({
			format: 'yyyy-mm-dd',
			autoclose: true,
			container: '#'+$target
		});
		
    });
	
	//*****[ SLICK SLIDER BANNER ]*****//
	// Make all banner type sliders slick sliders
	$(".slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		fade: true,
		arrows: true
	});
    
	//*****[ NUMBER COUNTER ]*****//
	// Make numbers count up from 0
	$('.count').each(function(index, element) {
		var $count = $(this).text();
		var $refreshInterval = "";
		var $speed = "";
		if ( $count > 0 ) {
			$refreshInterval = 2;
			$speed = 500;
		} else if ( $count > 120) {
			$refreshInterval = 5;
			$speed = 4000;		
		} else {
			$refreshInterval = 10;
			$speed = 1000;
		}
        $(this).countTo({
            from: 0,
            to: $count,
            speed: $speed,
            refreshInterval: $refreshInterval,
            onComplete: function(value) {
                console.debug(this);
            }
        });
    });
	
	//*****[ TO DO LISTS ]*****//
	$(".to-do-list label").each(function(index, element) {
        $(this).click(function() {
			$(this).parent().toggleClass("checked");
		});
    });
	
	//*****[ MODALS ]*****//
	// Add modal when called them remove when closed
	$(".modal-btn").each(function(index, element) {
		$(this).attr("data-toggle", "modal").attr("data-target", "#modal");
    });
	$(".modal-btn").click(function(e) {
		var title = $(this).attr("data-title"), content = $(this).attr("href");
		var modal = '<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
		  '<div class="modal-dialog" role="document">'+
			'<div class="modal-content">'+
			  '<div class="modal-header">'+
				'<button type="button" class="close close-modal" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
				'<h4 class="modal-title" id="myModalLabel">'+title+'</h4>'+
			  '</div>'+
			  '<div class="modal-body">'+
			  '</div>'+
			  '<div class="modal-footer">'+
				'<button type="button" class="btn btn-primary close-modal" data-dismiss="modal">Close</button>'+
				'<button type="button" class="btn btn-green">Save</button>'+
			  '</div>'+
			'</div>'+
		  '</div>'+
		'</div>';
		$("body").prepend(modal);		
		$("#modal .close-modal").click(function(a) {
			setTimeout(function() {
				$("#modal").remove();
			}, 400);
			a.preventDefault();
		});
		e.preventDefault();
	});
	
	//*****[ ADMIN DASHBOARD ]*****//
	// Makes the layout edible
	function saveState() {
		var items = [];
		// traverse all column div and fetch its id and its item detail. 
		$(".column").each(function(){
			var columnId = $(this).attr("id");
			$(".text-box", this).each(function(i){ // here i is the order, it start from 0 to...
			   var item = {
				   block: $(this).attr("id"),
				   column: columnId,
				   order: i
			   }
			   items.push(item);
			});
			 
		});
		var shortorder = {items : items};
		$.ajax({
		  	url: "functions/customise-dashboard.php",
		  	async: false, 
		  	data: shortorder,
		  	dataType: "html",
		  	type: "POST",
		  	success: function(html){
		  	}
		});    
	}
	$(".column").sortable({
      	connectWith: ".column",
      	handle: ".fa-arrows",
		containment: "body",
      	placeholder: "portlet-placeholder",
		
		// For updating the order in your table		
		stop: function(event, ui){
            saveState();
        }
    });
	
	//*****[ SLICK SLIDER ]*****//
	// Image carousels
	$('.image-carousel').slick({
	  	infinite: true,
	  	slidesToShow: 3,
	  	slidesToScroll: 3
	});
	  
});