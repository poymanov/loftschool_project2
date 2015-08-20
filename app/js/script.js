var app = (function() {

	//Управление появлением/исчезновением кнопки Наверх
	var _topButtonFade = function() {
		$(window).on('scroll', function(){
			if($(this).scrollTop() != 0) {
				$('#toTop').stop(true,true).fadeIn();
			} else {
				$('#toTop').stop(true,true).fadeOut();
			}
		});
	}

	//Ициниализация слайдера
	var _startBxslider = function() {
		if ($('.product-img__previews').length) {
		$('.product-img__previews').bxSlider({
			slideWidth: 75,
			slideHeight: 75,
			minSlides: 3,
			maxSlides: 3,
			slideMargin: 10,
			pager: false,
		});
		}
	}

	//Установка колонок для контентной области
	var _columnize = function() {
		if($('.shop-desc__text').length) {
			$('.shop-desc__text').columnize({ width: 302, columns: 3 });
		}
	}

	//Обработка нажатий по изображениям слайдера
	var _sliderClick = function() {
		$('.product-img__previews-link').on('click', function(e){
			e.preventDefault();

			var
				$this = $(this),
				container = $this.closest('.product-img'),
				path = $this.find('img').attr('src'),
				item = $this.closest('li');

			if (!item.hasClass('active')) {

				item.addClass('active').siblings().removeClass('active');

				container.find('.product-img__big-img img').fadeOut(function(){
					$(this).attr('src', path).fadeIn();
				});
			}
		});
	}

	//Анимация прокрутки вверх страницы
	var _scrollTop = function() {
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
		_columnize();
		_sliderClick();
	}

	return {
		init: init
	};

})();


app.init();