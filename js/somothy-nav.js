!function () {
    var view=document.querySelector('nav.menu')
    // view.style.border= '1px solid red'
    var controller={
        view:null,
        aTags:null,
        initAnimate: function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvents: function () {//绑定事件
            let aTags = view.querySelectorAll('nav.menu>ul>li>a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick =  (x)=> {
                    x.preventDefault();//去除a标签默认跳转
                    let a = x.currentTarget;//获取点击标签
                    let href = a.getAttribute('href');//获得目标标签的属性值如"#siteAbuout"
                    let element = document.querySelector(href);//获取目标标签
                    this.scrollToElement(element)
                  
                }
            }
        },
        scrollToElement: function (element) {//滚到目标标签
            let top = element.offsetTop;//得到目标标签距离页面顶端的位置，该位置不随鼠标滚动而改变
            let currentTop = window.scrollY;
            let targetTop = top - 80;
            let s = targetTop - currentTop;
            var coords = { y: currentTop };
            var t = Math.abs((s / 100) * 300);
            if (t > 500) {
                t = 500;
            }
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start();

        },
        
        init:function(view){
            this.view=view
            this.initAnimate()
            this.bindEvents()
        }


    }

    
    controller.init(view);
    



}.call()
