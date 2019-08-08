!function () {
   var view = document.querySelector('#mySliders')
   view.style.border= '1px solid red'
    var controller={
        view:null,
        Swiper:null,
        swiperOptions:{
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        init:function(view){
            this.view=view
            this.initSwiper()
        },
        initSwiper:function(){
            this.Swiper=new Swiper(view.querySelector('.swiper-container'), 
            this.swiperOptions)
        }
    }


   controller.init.call(controller,view)
 

}.call()

