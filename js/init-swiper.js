!function () {
   var view = document.querySelector('#mySliders')
   view.style.border= '1px solid red'
   var controller=function(view){
    var mySwiper = new Swiper(view.querySelector('.swiper-container'), {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
   }
   controller.call(null,view);
 

}.call()

