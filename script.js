$(function(){

	let mySwiper = new Swiper ('.swiper-container', {

			slidesPerView: 1,
			spaceBetween: 15,
			loop: true,
			loopFillGroupWithBlank: true,

			pagination: {
				el: '.swiper-pagination-my',
				clickable: true,
				},

			navigation: {
				nextEl: '.swiper-button-next-my',
				prevEl: '.swiper-button-prev-my',
			},
			
			breakpoints: {

				970: {
					slidesPerView: 2,
					spaceBetween: 35,				
				},

				1270: {
					slidesPerView: 3,
					spaceBetween: 30,				
				}
			}
		})
});