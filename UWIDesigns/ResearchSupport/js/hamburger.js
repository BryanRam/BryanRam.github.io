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
	 
	 var isClicked = true; //boolean variable to check if hamburger menu is active 
	 
	 function aClick(){
				
				//if hamburger icon was clicked when menu was not active
		if(isClicked){
			//set the width of primary content container -> content should not scale while animating
			var contentWidth = jQuery('.nav').width();
			//var contentHeight = jQuery('#content').height();
	
			//set the content with the width that it has originally
			jQuery('.nav').css('width', contentWidth);
			//jQuery('#content').css('height', contentHeight);
	
			//display a layer to disable clicking and scrolling on the content while menu is shown
			jQuery('#contentLayer').css('display', 'block');
	
			//disable all scrolling on mobile devices while menu is shown
			//jQuery('.body').bind('touchmove', function(e){e.preventDefault()});
			//jQuery('body').css('overflow-y', 'hidden');
			
			//set margin for the whole container with a jquery UI animation
			jQuery(".body").animate({"marginTop": ["99px", 'easeOutExpo']}, {
				duration: 700,
				start: function(){
					//jQuery('nav').animate({"top": ["0px", "easeOutExpo"]}, { 
					//					   duration:130});
					
					jQuery('.mobileNav').animate({"height": ["60%", "easeOutExpo"]}, { 
										   duration:130});
					jQuery('nav').animate({"z-index": ["1", "easeOutExpo"]}, { 
										   duration:130});
				}
			});
			
		}
		
		//if hamburger icon was clicked when menu is active
		else
		{
			//enable all scrolling on mobile devices when menu is closed
        jQuery('.body').unbind('touchmove');
		jQuery('body').css('overflow-y', 'scroll');

            //set margin for the whole container back to original state with a jquery UI animation
        jQuery(".body").animate({"marginTop": ["0%", 'easeOutExpo']}, {
            duration: 700,
            start: function() {
				 //jQuery('nav').animate({"top": ["-10%", "easeOutExpo"]}, { 
				 //					   	duration:130});
				 jQuery('.mobileNav').animate({"height": ["0px", "easeOutExpo"]}, { 
										   duration:130});
				 jQuery('nav').animate({"z-index": ["0", "easeOutExpo"]}, { 
									   opacity: 0,
									   duration: 130});
			},
			complete: function() {
                  jQuery('.nav').css('width', '12%');
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
	 
  
});