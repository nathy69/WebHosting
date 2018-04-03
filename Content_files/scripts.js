(function($) {
    "use strict"; 
    $(function() {    		
		// responsive images
		$('article img, .wp-post-image').each(function(){ 
	        $(this).removeAttr('width')
	        $(this).removeAttr('height');
	    });		    
	    $('#featured img, #latest img, #posts img').each(function(){ 
	        $(this).addClass('img-responsive');
	    });	
	     // homepage featured posts
	    $('#featured .feat-img').wrapAll('<div class="col-sm-6" />');	    
	    $('#featured h3').wrapAll('<div class="col-sm-6" />');
	    $('#featured .feat-img:first, #featured h3:first').addClass('first active');
	    var count = 0;			
		$('#featured h3 a').each(function(){ 
			$(this).addClass('num-'+count);
			count++;
		});				
	    $('#featured h3 a').click(function(e) {
	    	var winWidth = $(window).width();	    	
	    	if (winWidth > 767) {
		    	e.preventDefault();
		    	if (!$(this).parent('h3').hasClass('active')) {
					var itemClicked = $(this).attr('class');
					itemClicked = itemClicked.substring(4);
					$('#featured .feat-img.active').fadeOut();
					$('#featured .feat-img').eq(itemClicked).fadeIn().addClass('active');
					$('#featured h3.active').removeClass('active');
					$(this).parent().addClass('active');
				}
			}			
		});					
 	}); 
}(jQuery));