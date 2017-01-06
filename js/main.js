$(document).ready(function(){
	$( ".search-form" ).toggle(100);

	///////////Anchor Smooth Scroll//////////////

  	$(function() {
  		width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
		if(width>=1200){
  	  		offset = $("#section2 nav").height();
  		}else{
  			offset = 0;
  		}
	  		$('a.scroll-to[href*=#]:not([href=#])').click(function() {
	    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      		var target = $(this.hash);
	      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html,body').animate({
	          			scrollTop: target.offset().top - offset
	        		}, 1000);
	        		return false;
	     		}
	    	}
	  	});
	});

	///////////Countdown//////////////

	var countdownDate = new Date(); 
	countdownDate = new Date(2014,6,1); 
	$('#countdown').countdown({until: countdownDate}); 

  	///////////Search Button Toggle//////////////

  	$( "#section2 .search>i" ).click(function(e) {
	  	e.preventDefault();  
        $('.search-form').slideToggle(200);  
	});

	///////////Mobile Menu Button Toggle//////////////

	$( "#menu-button" ).click(function(e) {
	  	e.preventDefault();  
        $('#section2 ul').slideToggle(200);  
	});

	///////////About Slider Settings//////////////

	$('.about-slider .slider').bxSlider({
	  mode: 'vertical',
	  infiniteLoop: true,
	  responsive: true,
	  touchEnabled: true,
	  pagerSelector: '.about-slider .pager',
	  controls:false,
	  adaptiveHeight: true,
	  speed:800,
	  preventDefaultSwipeY: true,
	  auto:true,
	  pause:4000
	});
	
	///////////Text Slider Settings//////////////

	$('.header-slider .slider').bxSlider({
	  mode: 'vertical',
	  infiniteLoop: true,
	  responsive: true,
	  touchEnabled: true,
	  pagerSelector: '.header-slider .pager',
	  controls:false,
	  speed:500,
	  auto:true,
	  pause:2000
	});

});

$(window).load(function(){

	//////////Animations//////////////

	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if(width>=1200){

		//////////Section 1 Background Slider//////////////

		$("#section1").bgswitcher({
		  	images: ["img/section1_1.jpg","img/air1.jpg","img/land1.jpg", "img/section1_2.jpg","img/air2.jpg","img/land2.jpg", "img/section1_3.jpg","img/air3.jpg","img/land3.jpg"],
			interval: 5000,
			effect: 'fade',
			duration: 3000,
		});

		//////////Parallax Sections//////////////

		$(function(){
			$.stellar({
				horizontalScrolling: false
			});
		});

		//////////Appear Animation Settings//////////////

		$('#section2').waypoint(function(direction) {
		  	if(direction == "down"){
		       	$( "#section1 .container" ).css( {"opacity":"0.8"} );
	       	}else{
	       		$( "#section1 .container" ).css( {"opacity":"1"} );
	       	}
		}, { offset: '80%' });

		$('#section2').waypoint(function(direction) {
		  	if(direction == "down"){
		       	$( "#section1 .container" ).css( {"opacity":"0.6"} );
	       	}else{
	       		$( "#section1 .container" ).css( {"opacity":"0.8"} );
	       	}
		}, { offset: '60%' });

		$('#section2').waypoint(function(direction) {
		  	if(direction == "down"){
		       	$( "#section1 .container" ).css( {"opacity":"0.4"} );
	       	}else{
	       		$( "#section1 .container" ).css( {"opacity":"0.6"} );
	       	}
		}, { offset: '40%' });

		$('#section2').waypoint(function(direction) {
		  	if(direction == "down"){
		       	$( "#section1 .container" ).css( {"opacity":"0.2"} );
	       	}else{
	       		$( "#section1 .container" ).css( {"opacity":"0.4"} );
	       	}
		}, { offset: '20%' });

		$('#section2').waypoint(function(direction) {
		  	if(direction == "down"){
		       	$( "#section1 .container" ).css( {"opacity":"0"} );
	       	}else{
	       		$( "#section1 .container" ).css( {"opacity":"0.2"} );
	       	}
		});

		$('#section3').waypoint(function(direction) {
		  	if(direction == "down"){
		  		$( "#section3 .about-slider" ).css( {"left":"0px","opacity":"1"} );
	       		$( "#section3 .about" ).css( {"right":"0px","opacity":"1"} );
	       	}	
		}, { offset: '70%' });

		$('#section6').waypoint(function(direction) {
		  	if(direction == "down"){
				var i=0;
	       		$( "#section6 .service" ).each(function() {
  					$(this).delay(200*i).queue(function() {
				      	$( this ).css( {"top":"0px","opacity":"1"}).dequeue();
				    });
  					i=i+1;
				});
	       	}	
		}, { offset: '70%' });

		$('#section7').waypoint(function(direction) {
		  	if(direction == "down"){
		  		var i=0;
	       		$( "#section7 div[class^='col-md']" ).each(function() {
  					$(this).delay(200*i).queue(function() {
				      	$( this ).css( {"left":"0px","opacity":"1"}).dequeue();
				    });
  					i=i+1;
				});
	       	}	
		}, { offset: '70%' });

		$('#section6 .skills').waypoint(function(direction) {
		  	if(direction == "down"){
	       		$( "#section6 .skills" ).css( {"left":"0px","opacity":"1"} );
	       		$( "#section6 .possibilities" ).css( {"right":"0px","opacity":"1"} );
	       		$( "#section6 .skills .progress-bar" ).each(function() {
  					min = $(this).attr("aria-valuemin");
  					max = $(this).attr("aria-valuemax");
  					now = $(this).attr("aria-valuenow");
  					width = now*100/(max-min);
  					$(this).css( {"width": width + "%"} );

				});

	       	}	
		}, { offset: '70%' });

		$('#section8').waypoint(function(direction) {
		  	if(direction == "down"){
		  		var i=0;
	       		$( "#section8 .team-member" ).each(function() {
  					$(this).delay(200*i).queue(function() {
				      	$( this ).css( {"top":"0px","opacity":"1","z-index":"0"}).dequeue();
				    });
  					i=i+1;
				});
	       	}	
		}, { offset: '70%' });

		$('ul.counters').waypoint(function(direction) {
		  	if(direction == "down"){
				$('.counter').each(function(){
						dataperc = $(this).attr('data-perc'),
						$(this).find('h6').delay(6000).countTo({
						from: 0,
						to: dataperc,
						speed: 1000,
						refreshInterval: 20
					});
				 });
			}
		}, { offset: '70%' });			

	  	$('#section10').waypoint(function(direction) {
			if(direction == "down"){
			    $( "#section10 .col-md-3 img" ).animate({ 'top': '70px'}, 2000, 'easeOutElastic');
			}
		}, { offset: '30%' });

	    $('#section11').waypoint(function(direction) {
		  	if(direction == "down"){
	       		$( "#section11 .col-md-offset-1" ).css( {"left":"0px","opacity":"1"} );
	       		$( "#section11 .col-md-offset-2" ).css( {"right":"0px","opacity":"1"} );
	       	}	
		}, { offset: '70%' });	

		$('#section2').waypoint(function(direction) {
		  	if(direction == "down"){
	       		$( "#section2 nav" ).css( {"position":"fixed","top":"0","width":"100%","box-shadow":"0 1px 4px 0 rgba(0,0,0,0.2)"} );
	       	}else{
	       		$( "#section2 nav" ).css( {"position":"relative","box-shadow":"none"} );
	       	}
		});	 

	}else{
		
		if(width>=320){
			$("#section1").css({"backgroundImage":"url(img/section1_1.jpg)"});
			
			$( "#section6 .skills .progress-bar" ).each(function() {
				min = $(this).attr("aria-valuemin");
				max = $(this).attr("aria-valuemax");
				now = $(this).attr("aria-valuenow");
				width = now*100/(max-min);
				$(this).css( {"width": width + "%"} );

			});
				  	
			$('.counter').each(function(){
				dataperc = $(this).attr('data-perc'),
				$(this).find('h6').html(dataperc.replace(/\B(?=(?:\d{3})+(?!\d))/g, ','));
			});

		}
	}
});

	//////////Counters//////////////

	(function($) {
		$.fn.countTo = function(options) {
			// merge the default plugin settings with the custom options
			options = $.extend({}, $.fn.countTo.defaults, options || {});

			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(options.speed / options.refreshInterval),
				increment = (options.to - options.from) / loops;

			return $(this).delay(1000).each(function() {
				var _this = this,
					loopCount = 0,
					value = options.from,
					interval = setInterval(updateTimer, options.refreshInterval);

				function updateTimer() {
					value += increment;
					loopCount++;
					$(_this).html(value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ','));

					if (typeof(options.onUpdate) == 'function') {
						options.onUpdate.call(_this, value);
					}

					if (loopCount >= loops) {
						clearInterval(interval);
						value = options.to;

						if (typeof(options.onComplete) == 'function') {
							options.onComplete.call(_this, value);
						}
					}
				}
			});
		};

		$.fn.countTo.defaults = {
			from: 0,  // the number the element should start at
			to: 100,  // the number the element should end at
			speed: 1000,  // how long it should take to count between the target numbers
			refreshInterval: 100,  // how often the element should be updated
			decimals: 0,  // the number of decimal places to show
			onUpdate: null,  // callback method for every time the element is updated,
			onComplete: null,  // callback method for when the element finishes updating
		};
	})(jQuery);
