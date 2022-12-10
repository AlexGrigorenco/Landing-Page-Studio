
//               SLIDER

const navDotsList = Array.from(document.querySelectorAll('.slider__nav__dots'));
const slideImageList = Array.from(document.querySelectorAll('.slide__img'));
const slideActive = document.querySelector('.slide__img__active');
const clientName = document.querySelector('.client__name');
const clientReview = document.querySelector('.client__review');

const arrSrc = ['./images/slider/slider-img-1.png', './images/slider/slider-img-2.png',
 './images/slider/slider-img-3.png', './images/slider/slider-img-4.png',
  './images/slider/slider-img-5.png', './images/slider/slider-img-6.png', './images/slider/slider-img-7.png',
   './images/slider/slider-img-8.png', './images/slider/slider-img-9.png',];

	 const randomArrSrc = ['./images/slider/slider-img-1.png', './images/slider/slider-img-2.png',
	 './images/slider/slider-img-3.png', './images/slider/slider-img-4.png',
		'./images/slider/slider-img-5.png', './images/slider/slider-img-6.png', './images/slider/slider-img-7.png',
		 './images/slider/slider-img-8.png', './images/slider/slider-img-9.png',];
	
const arrClientName = ['Matthew Paul', 'Irina Rogers', 'Faris Collins', 'Michelle Jones',	'King Coleman', 'Olympia Adams',	'Otis Carter',
 'Olva Simmons', 'Sadie Ramirez'];
const arrClientReviev =['Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.',
'I recommend A+ Studio everyone, my business went uphill after the guys made me a website', 
'The most great mobile app, that I\'ve ever seen, the company made my dreams come true', 'Thanks for the good work and nice service.',
 'Financial planning system is something incredible! I will cooperate with you forever!',
  'High quality and great communication, that\'s what I appreciate', 'Implementation of business ideas has never been so pleasant and effective. You are best!',
 'I have been a regular client of this company for 4 years now and the guys never cease to amaze me with their skills and creativity',
  'With your mobile application, I will conquer the whole world! Thank you!',]

	 navDotsList.forEach(function(itemDot, index){
		itemDot.dataset.index = index;
		itemDot.dataset.action = 'navDot';
	 });	

	 function shuffle(arr){
		var j, temp;
		for(var i = arr.length - 1; i > 0; i--){
			j = Math.floor(Math.random()*(i + 1));
			temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
		}
		return arr;
	} 

window.addEventListener('click', function(event){  
				
				if(event.target.dataset.action === 'navDot'){

					const dotNum = event.target.dataset.index;

					slideActive.setAttribute('src', arrSrc[dotNum]);
					clientName.innerHTML = arrClientName[dotNum];
					clientReview.innerHTML = arrClientReviev[dotNum];

					shuffle(randomArrSrc);						
													navDotsList.forEach(function(itemDot){
														itemDot.classList.remove('slider__nav__dots-active');	
													});
													event.target.classList.add('slider__nav__dots-active');														
					for(var i = 0; i < slideImageList.length; i++){
						slideImageList[i].setAttribute('src', randomArrSrc[i]);
					};					
				}				
},)


// MENU MOBILE===========================

const menuMobileWrapper = document.querySelector('.menu-icon-wrapper');
const menuMobile = document.querySelector('.menu-icon');
const menuMobileItems = document.querySelector('.menu__top__wrapper'); 
const body = document.querySelector('body');
const menuLinkList = document.querySelector('.menu__top__wrapper').querySelectorAll('a')

function menuToggle(){
	menuMobile.classList.toggle('menu-icon-active');
	menuMobileItems.classList.toggle('menu__top__wrapper-mobile-active');
	body.classList.toggle('no-scroll');
}

menuMobileWrapper.onclick = function(){
	
	menuToggle()

}	

menuLinkList.forEach(link => {
	
	link.addEventListener('click', function(){
		menuToggle()
	})
})

//  FOOTER SPOILER      =================================

const arrSpoiler = Array.from(document.querySelectorAll('.footer__spoiler'));
const arrTitle = Array.from(document.querySelectorAll('.footer__title'));

arrTitle.forEach(function(item){
	item.dataset.action = 'footerTitleClick'
})

window.addEventListener('click', function(event){
	
	if(event.target.dataset.action === 'footerTitleClick'){
		event.target.closest('.footer__spoiler').classList.toggle('footer__spoiler-active')
	}
})

