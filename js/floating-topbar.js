!function () {
    var view = document.querySelector('#topNavbar')
    // view.style.border = '1px solid red'

    var controller = {
        view: null,
        init: function (view) {//先传入view，初始化对象中的view，然后激活bindEvents函数
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {//激活函数
            var view = this.view;
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active();
                }
                else {
                    this.deactive();//如果不使用箭头函数，会导致this指向鼠标滚动的对象，所有使用箭头函数，因为箭头函数没有this,于是this就在上一层去寻找或者使用bind绑定this
                }
            })
        },
        active: function () {
            this.view.classList.add('floating-style');

        },
        deactive: function () {
            this.view.classList.remove('floating-style');

        }


    }
    controller.init(view)//调用初始化函数
    //controller.init.call(controller,view)




}.call()

