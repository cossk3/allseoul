'use strict';

jQuery(document).ready(function ($) {
    //div 보여주고 숨기는 function
    $.fn.showHide = function (options) {
        //기본변수선언
        var defaults = { 
            speed: 1000,
            easing: '',
            changeText: 0,
            showText: 'Show',
            hideText: 'Hide'
        };
        
        //위로 보여주는 function
        var options = $.extend(defaults, options);
        $(this).click(function () {
            $('.toggleDiv').slideUp(options.speed, options.easing);
            var toggleClick = $(this);
            var toggleDiv = $(this).attr('rel');
            
            //show -> hide , hide -> show
            $(toggleDiv).slideToggle(options.speed, options.easing, function () {
                if (options.changeText == 1) {
                    $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
                }
            });
            return false;
        });
    };

    //초기화!
    $('div.toggleDiv').hide();
    $('.show_hide').showHide({
        speed: 500,
        changeText: 0,
        showText: 'View',
        hideText: 'Close'
    });
});


(function($){
	var methods = {
		// 초기화!!
	    init: function(settings){
			return this.each(function(){
				var config = {
					targetSelector : '.mix',
					filterSelector : '.filter',
					sortSelector : '.sort',
					buttonEvent: 'click',
					effects : ['fade', 'scale'],
					listEffects : null,
					easing : 'smooth',
					layoutMode: 'grid',
					targetDisplayGrid : 'inline-block',
					targetDisplayList: 'block',
					listClass : '',
					gridClass : '',
					transitionSpeed : 600,
					showOnLoad : 'all',
					sortOnLoad : false,
					multiFilter : false,
					filterLogic : 'or',
					resizeContainer : true,
					minHeight : 0,
					failClass : 'fail',
					perspectiveDistance : '3000',
					perspectiveOrigin : '50% 50%',
					animateGridList : true,
					onMixLoad: null,
					onMixStart : null,
					onMixEnd : null
				};
                
				// showonload(위로 슬라이드 되는 액션) 변수 선언
				var showOnLoadArray = config.showOnLoad.split(' ');
				
				// showonload 나타나는 function
				var $showOnLoad = $();
				$.each(showOnLoadArray, function(){
					$showOnLoad = $showOnLoad.add($('.'+this))
				});
				
				$showOnLoad.each(function(){
					var $t = $(this);
					if(config.layoutMode == 'list'){
						$t.css('display',config.targetDisplayList);
					} else {
						$t.css('display',config.targetDisplayGrid);
					};
					$t.css(config.transition);
				});
				
				// 우선순위를 위함! 먼저 올라와있는 div가
                // 존재하면 덮으면서 올라오도록!
				var delay = setTimeout(function(){
					
					config.mixing = true;
					
					$showOnLoad.css('opacity','1');
					
					// CLEAN UP
					var reset = setTimeout(function(){
						if(config.layoutMode == 'list'){
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayList,
								opacity: 1
							});
						} else {
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayGrid,
								opacity: 1
							});
						};
						
					},config.transitionSpeed);
				},10);
				
				// 미리 설정해놓음!
				config.filter = config.showOnLoad;
					
			});
		},
	};
	
})(jQuery);