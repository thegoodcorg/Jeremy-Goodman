/* ----------------------------------
	Shrewd
	Version: 2.0
	Author: BootEx
 ---------------------------------- */

(function ($) {
    "use strict";

	//======= SITE LOADER ========//
    $(window).on('load',function() { 
	    $("#loaderInner").fadeOut(); 
	    $("#loader").delay(400).fadeOut("slow"); 
	});    


	//======= STICK HEADER ========//
	$(window).on('scroll', function() {
        if ($(window).scrollTop() >= 75) {
            $("body").addClass("fixed-header");
        }
        else {
            return $("body").removeClass("fixed-header");
        }
    });
		


	//======= NAVBAR SMOOTH SCROLL========//
	$('.navbar-collapse ul li a').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 600);
        $(".navbar-collapse").collapse("hide");
        e.preventDefault();
    });


	
	$('body').scrollspy({target:".navbar-collapse",offset:70})



	//======= PARALLAX BG ========//
	// $('.header-area').parallax("40%", 0.2);
	// $('.review-bg').parallax("10%", -0.04);



	//======= TYPED JS ========//
	$("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 20,
        backDelay: 2500,
        loop: true,
        cursorChar:'',
        contentType: 'html',
	});


	//======= MAGNIFIC POPUP JS  ========//
	$('.work-item').magnificPopup({
		type:'inline'
    });

  	
    //======= ISOTOP FILTERING JS/About Me  ========//
    $(window).on('load',function() { 
	    var grid_container = $('.about-container'),
	    	grid_item = $('.about-grid-item');
	    	

	     grid_container.imagesLoaded(function () {
	        grid_container.isotope({
	            itemSelector: '.about-grid-item',
				   layoutMode: 'fitRows',
				   filter: '.about-career'
	        });
	    });

	    $('.aboutme-filter li').on('click', function (e) {
			$('.aboutme-filter li.active').removeClass('active');
		    $(this).addClass('active');
		    var selector = $(this).attr('data-filter');
		    grid_container.isotope({
		        filter: selector
		    });
		    return false;
		    e.preventDefault();
		});
	});
  	
    //======= ISOTOP FILTERING JS/Technology  ========//
    $(window).on('load',function() { 
	    var grid_container = $('.technology-container'),
	    	grid_item = $('.new-grid-item');
	    	

	     grid_container.imagesLoaded(function () {
	        grid_container.isotope({
	            itemSelector: '.new-grid-item',
	       		layoutMode: 'fitRows'
	        });
	    });

	    $('.technology-filter li').on('click', function (e) {
			$('.technology-filter li.active').removeClass('active');
		    $(this).addClass('active');
		    var selector = $(this).attr('data-filter');
		    grid_container.isotope({
		        filter: selector
		    });
		    return false;
		    e.preventDefault();
		});
	});

    //======= ISOTOP FILTERING JS/Portfolio  ========//
    $(window).on('load',function() { 
	    var grid_container = $('.portfolio-container'),
	    	grid_item = $('.grid-item');
	    	

	     grid_container.imagesLoaded(function () {
	        grid_container.isotope({
	            itemSelector: '.grid-item',
	       		layoutMode: 'masonry'
	        });
	    });

	    $('.portfolio-filter li').on('click', function (e) {
			$('.portfolio-filter li.active').removeClass('active');
		    $(this).addClass('active');
		    var selector = $(this).attr('data-filter');
		    grid_container.isotope({
		        filter: selector
		    });
		    return false;
		    e.preventDefault();
		});
	});
	

	
})(jQuery); //end