/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, Parallax } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.slider-main__body')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.slider-main__body', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Parallax],
			observer: false,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 32,
			watchOverflow: true,
			speed: 800,
			loop: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,
			// Пагінація

			pagination: {
				el: '.controls-main-slider__dotts',
				clickable: true,
			},

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.slider-main .slider-arrow--prev',
				nextEl: '.slider-main .slider-arrow--next',
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.slider-rooms__body')) {
		new Swiper('.slider-rooms__body', {
			modules: [Navigation, Pagination, Parallax],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 24,
			speed: 800,
			loop: true,
			watchOverflow: true,
			loopAdditionalSlides: 5,
			preloadImages: false,
			parallax: true,
			// Dotts
			pagination: {
				el: '.slider-rooms__dotts',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.slider-rooms .slider-arrow--next',
				prevEl: '.slider-rooms .slider-arrow--prev',
			}
		});
	}
	if (document.querySelector('.slider-tips__body')) {
		new Swiper('.slider-tips__body', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 32,
			speed: 800,
			loop: true,
			loopAdditionalSlides: 5,
			watchOverflow: true,
			// Dotts
			pagination: {
				el: '.slider-tips__dotts',
				clickable: true,
			},
			// Arrows
			navigation: {
				nextEl: '.slider-tips .slider-arrow--next',
				prevEl: '.slider-tips .slider-arrow--prev',
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 1.1,
					spaceBetween: 15
				},
				// when window width is >= 768px
				768: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is >= 992px
				992: {
					slidesPerView: 3,
					spaceBetween: 32
				}
			}
		})
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	// initSlidersScroll();
});