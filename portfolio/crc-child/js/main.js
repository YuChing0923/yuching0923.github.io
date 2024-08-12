(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Main Menu Superfish
	var mainMenu = function() {

		$('#crc-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};


	// Offcanvas and cloning of the main menu
	var offcanvas = function() {

		var $clone = $('#menu-wrap').clone();
		$clone.attr({
			'id' : 'offcanvas-menu'
		});
		$clone.find('> ul').attr({
			'class' : '',
			'id' : ''
		});

		$('#crc-header').append($clone);

		// click the burger
		$('.js-crc-nav-toggle').on('click', function(){

			if ( $('body').hasClass('crc-offcanvas') ) {
				$('body').removeClass('crc-offcanvas');
			} else {
				$('body').addClass('crc-offcanvas');
			}
			// $('body').toggleClass('crc-offcanvas');

		});

		$('#offcanvas-menu').css('height', $(window).height());

		$(window).resize(function(){
			var w = $(window);


			$('#offcanvas-menu').css('height', w.height());

			if ( w.width() > 769 ) {
				if ( $('body').hasClass('crc-offcanvas') ) {
					$('body').removeClass('crc-offcanvas');
				}
			}

		});	

	}

	

	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#offcanvas-menu, .js-crc-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('crc-offcanvas') ) {
				$('body').removeClass('crc-offcanvas');
			}
	    }
		});
	};


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
	

	var scheduleTab = function() {
		$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());

		$(window).resize(function(){
			$('.schedule-container').css('height', $('.schedule-content.active').outerHeight());
		});

		$('.schedule a').on('click', function(event) {
			
			event.preventDefault();

			var $this = $(this),
				sched = $this.data('sched');

			$('.schedule a').removeClass('active');
			$this.addClass('active');
			$('.schedule-content').removeClass('active');

			$('.schedule-content[data-day="'+sched+'"]').addClass('active');

		});
	};

	// Document on load.
	$(function(){
		mainMenu();
		parallax();
		offcanvas();
		mobileMenuOutsideClick();
		contentWayPoint();
		scheduleTab();
	});



	//字級大小
    $('.font_size_btn').click(function(){
    	$(this).parents('ul').find('li').removeClass('active');
    	$(this).parent('li').addClass('active');
    	var id = $(this).attr('id')

    	//圖片
    	$('body').find('img').removeClass('font_size_small').removeClass('font_size_medium').removeClass('font_size_big');
    	$('body').find('img').each(function(index, el) {
    		if($(this).hasClass('illustration_pic') != true){
    			if($(this).parent('div').hasClass('new_text') != true){
    				$(this).addClass(id);			
    			}
    		}    		
    	});

    	//字
    	$('body').removeClass('font_size_small').removeClass('font_size_medium').removeClass('font_size_big');
    	$('body').addClass(id);
    });

    //選單
    $('#crc-primary-menu').find('>li>a').click(function(event) {
    	return false;
    });

    //收尋下拉
    // $('.page_event_group').on('focus','.dropdown>a',function(){
    // 	$(this).parents('.dropdown').addClass('open');
    // });

}());