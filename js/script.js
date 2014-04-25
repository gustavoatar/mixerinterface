$(document).ready(function(){

		// set up the CSS for the corner slides
		$(".corner-slides").css({
			position: "absolute",
			zIndex: 0,
			bottom: 0,
			right: 0,
			height: 420,
			width: 1340,
			padding: 0,
			margin: 0
		});
		$(".corner-slides a").css({
			display: "block",
			position: "absolute",
			bottom: 0,
			right: 0,
			height: 420,
			width: 566,
			zIndex: 9000
		});
		$(".corner-slides img").css({
			position: "absolute",
			bottom: 0,
			right: 0
		});
	    $(".corner-slides").cycle({
			fx: 'fade',
			timeout: 6000
		});
		
		// Utilize a Back Button for Mobile devices
			$("nav.back a").click(function(){
			if(document.referrer.indexOf(window.location.hostname) != -1){
			parent.history.back();
			return false;
			}
		});
		
		// Create the dropdown base for Mobile from the main navigation
		$("<select />").appendTo("nav.main");
		
		// Create default option "Go to..."
		$("<option />", {
			"selected": "selected",
			"value"   : "",
			"text"    : "NAVIGATION"
		}).appendTo("nav.main select");
		
		// Populate dropdown with menu items
		$("nav.main a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("nav.main select");
		});
		
		// To make dropdown actually work
		// To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
		$("nav.main select").change(function() {
			window.location = $(this).find("option:selected").val();
		});
		
		// match active navigation item and give it a class of active
		var url = window.location.pathname, 
			urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname 
		// now grab every link from the navigation
		$(".main a").each(function(){
		    // and test its normalized href against the url pathname regexp
		    if(urlRegExp.test(this.href.replace(/\/$/,''))){
		        $(this).addClass('active');
		    }
		});
		
		// sytling for panels as they are called and given an active class
		
		//panel 1
		$(function() {
			$(".panel1head").addClass("activehead");
			$(".panelgui1").addClass("activegui");
			$(".panel1 span").addClass("activetype");
			$(".panel1").animate({
  				height: "270"
		}, 500);
		}, function () {
			//call back function in the event it is needed none is placed here for now
		});		
		//panel 1
		$(".panel1").hover(function() {
			$(".panel1head").addClass("activehead");
			$(".panelgui1").addClass("activegui");
			$(".panel1 span").addClass("activetype");
			$(".panel1").animate({
  				height: "270"
		}, 500);
		}, function () {
			//call back function in the event it is needed none is placed here for now
		});

		//panel 2
		$(".panel2").hover(function() {
			$(".panel2head").addClass("activehead");
			$(".panelgui2").addClass("activegui");
			$(".panel2 span").addClass("activetype");
			$(".panel2").animate({
  				height: "170"
		}, 500);
		}, function () {
			//call back function in the event it is needed none is placed here for now
		});
		//panel 3
		$(".panel3").hover(function() {
			$(".panel3head").addClass("activehead");
			$(".panelgui3").addClass("activegui");
			$(".panel3 span").addClass("activetype");
			$(".panel3").animate({
  				height: "220"
		}, 500);
		}, function () {
			//call back function in the event it is needed none is placed here for now
		});
		
		// functions for closing panels
		$(".closepanel1").click(function(){
			$(".panel1").animate({
  				height: "32"
		}, 500);
			$(".panel1head").removeClass("activehead");
			$(".panelgui1").removeClass("activegui");
			$(".panel1 span").removeClass("activetype");
		});
		$(".closepanel2").click(function(){
			$(".panel2").animate({
  				height: "32"
		}, 500);
			$(".panel2head").removeClass("activehead");
			$(".panelgui2").removeClass("activegui");
			$(".panel2 span").removeClass("activetype");
		});
		$(".closepanel3").click(function(){
			$(".panel3").animate({
  				height: "32"
		}, 500);
			$(".panel3head").removeClass("activehead");
			$(".panelgui3").removeClass("activegui");
			$(".panel3 span").removeClass("activetype");
		});
		
		// help tooltips
		
		// this is the tooltip for HELP items in the Customizer or for Bowls, items that have a heading and content.
        $("input.help1").aToolTip({
        	clickIt: true,
        	xOffset: -140,
        	toolTipClass: 'helpTheme'
        });
        
        // this is the tooltip for Colors and Patterns as it removes the content via CSS and uses another theme.
        $("input.help2").aToolTip({
        	clickIt: false,
        	xOffset: -25,
        	yOffset: 16,
        	toolTipClass: 'defaultTheme'
        });
        
        // lightbox example working with shopping cart
        $(".items").click(function(e) {
			$('.shopping-cart-details').lightbox_me({
			    centered: true,
			    overlayCSS: {background: 'white', 
opacity: .87}
			    });
			e.preventDefault();
		});
		
});