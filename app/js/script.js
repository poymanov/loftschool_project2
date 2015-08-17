var app = (function() {

	//Управление появлением/исчезновением кнопки Наверх
	var _topButtonFade = function() {
		$(window).on('scroll', function(){
			if($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
	}

	var _startBxslider = function() {
		$('.bxslider').bxSlider({
			pagerCustom: '#bx-pager'
		});
	}

	//Анимация прокрутки вверх страницы
	var _scrollTop = function () {
		$('#toTop').on('click', function(e) {
			event.preventDefault();
			$('body,html').animate({scrollTop:0},800);
		});
	}

	//Инициализация модуля приложения
	var init = function() {
		_setUpListeners();
		_startBxslider();
	};

	//Прослушка событий приложения
	var _setUpListeners = function() {
		_topButtonFade();
		_scrollTop();
	}

	return {
		init: init
	};

})();


app.init();