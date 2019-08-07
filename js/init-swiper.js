!function () {
    var mySwiper = new Swiper('.swiper-container', {

        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

}.call

// var view=document.querySelector('#mySliders')
//     var mySwiper = new Swiper(view.querySelector('.swiper-container'), {