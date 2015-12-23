/**
* hamburger.js
*
* Mobile Menu Hamburger
* =====================
* A hamburger menu for mobile websites
*
* Created by Thomas Zinnbauer YMC AG | http://www.ymc.ch
* Date: 21.05.13
*/

jQuery(document).ready(function() {
     //Open the menu
	 var isClicked = true;
	 
	 function aClick(){
		//jQuery('#hamburger').bind('click', function(e){e.preventDefault()});
		//floats #hamburger2 above #hamburger so it can be clicked
		//jQuery('#hamburger').css('z-index', '2');
		//jQuery('#hamburger div').css('z-index', '3');
		//jQuery('#hamburger2').css('z-index', '3');
		
		if(isClicked == true){
			//set the width of primary content container -> content should not scale while animating
			var contentWidth = jQuery('#content').width();
			//var contentHeight = jQuery('#content').height();
	
			//set the content with the width that it has originally
			jQuery('#content').css('width', contentWidth);
			//jQuery('#content').css('height', contentHeight);
	
			//display a layer to disable clicking and scrolling on the content while menu is shown
			jQuery('#contentLayer').css('display', 'block');
	
			//disable all scrolling on mobile devices while menu is shown
			jQuery('#container').bind('touchmove', function(e){e.preventDefault()});
			jQuery('body').css('overflow-y', 'hidden');
			
			
	
			//set margin for the whole container with a jquery UI animation
			jQuery("#container").animate({"marginTop": ["160px", 'easeOutExpo']}, {
				duration: 700,
				start: function(){
					jQuery('nav').animate({"z-index": ["1", "easeOutExpo"]}, { 
										   duration:130});
				}
			});
			//jQuery('#hamburger').unbind('click');
			//jQuery('#hamburger').attr('disabled','disabled');
		}
		
		else
		{
			//enable all scrolling on mobile devices when menu is closed
        jQuery('#container').unbind('touchmove');
		jQuery('body').css('overflow-y', 'scroll');

        
		// jQuery('nav').animate({z-index: 0}, 100, function(){});
        //set margin for the whole container back to original state with a jquery UI animation
        jQuery("#container").animate({"marginTop": ["0%", 'easeOutExpo']}, {
            duration: 700,
            start: function() {
				 jQuery('nav').animate({"z-index": ["0", "easeOutExpo"]}, { 
									   opacity: 0,
									   duration: 130});
			},
			complete: function() {
                  jQuery('#content').css('width', 'auto');
				  //jQuery('#content').css('height', 'auto');
                jQuery('#contentLayer').css('display', 'none');

            }
        });
			
		}
		
		if (isClicked)
		{
			isClicked = false;
		}
		else
		{
			isClicked = true;
		}
			
    }
	
	jQuery('#hamburger').bind('click', aClick);
	 
  /*  
  
  jQuery("#hamburger").click(function(aClick) {
	//isClicked = true;
	 //jQuery('#hamburger').bind('click', );
	
	});
   
  		jQuery("#hamburger").click(function(a) {
		//jQuery('#hamburger').bind('click', function(e){e.preventDefault()});
		//floats #hamburger2 above #hamburger so it can be clicked
		//jQuery('#hamburger').css('z-index', '2');
		//jQuery('#hamburger div').css('z-index', '3');
		//jQuery('#hamburger2').css('z-index', '3');
				
		//set the width of primary content container -> content should not scale while animating
        var contentWidth = jQuery('#content').width();
		//var contentHeight = jQuery('#content').height();

        //set the content with the width that it has originally
        jQuery('#content').css('width', contentWidth);
		//jQuery('#content').css('height', contentHeight);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        jQuery('#contentLayer').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        jQuery('#container').bind('touchmove', function(e){e.preventDefault()});
		jQuery('body').css('overflow-y', 'hidden');
		
		

        //set margin for the whole container with a jquery UI animation
        jQuery("#container").animate({"marginTop": ["160px", 'easeOutExpo']}, {
            duration: 700,
			start: function(){
				jQuery('nav').animate({"z-index": ["1", "easeOutExpo"]}, { 
									   duration:130});
			}
        });
		
    });*/

/*
    //close the menu
   // jQuery("#contentLayer").click(function() {
	jQuery("#hamburger2").click(function() {
		//jQuery('#hamburger').bind('click', aClick);
		//jQuery('#hamburger').bind('click', function(e){e.preventDefault()});																					 
        
		//enable all scrolling on mobile devices when menu is closed
        jQuery('#container').unbind('touchmove');
		jQuery('body').css('overflow-y', 'scroll');

        
		// jQuery('nav').animate({z-index: 0}, 100, function(){});
        //set margin for the whole container back to original state with a jquery UI animation
        jQuery("#container").animate({"marginTop": ["0%", 'easeOutExpo']}, {
            duration: 700,
            start: function() {
				 jQuery('nav').animate({"z-index": ["0", "easeOutExpo"]}, { 
									   opacity: 0,
									   duration: 130});
			},
			complete: function() {
                  jQuery('#content').css('width', 'auto');
				  //jQuery('#content').css('height', 'auto');
                jQuery('#contentLayer').css('display', 'none');

            }
        });
		//floats #hamburger above #hamburger2 so it can be clicked
		//jQuery('#hamburger').css('z-index', '3');
		//jQuery('#hamburger div').css('z-index', '4');
		//jQuery('#hamburger2').css('z-index', '2');
		//jQuery('#hamburger').unbind('click');
		//jQuery('#hamburger').attr('enabled','enabled');
    });
 */
});