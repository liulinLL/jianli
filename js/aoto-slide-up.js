!function () {

    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');

    }
    findClosestAndRemoveOffset();

    window.addEventListener('scroll', function (x) {//监听是否滚动，滚动了就找到最近的再移出
        findClosestAndRemoveOffset();
    })
    //help
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i;

            }

        }
        specialTags[minIndex].classList.remove('offset');//去除offset
        let id = specialTags[minIndex].id;
        let a = document.querySelector('a[href="#' + id + '"]');
        let li = a.parentNode;
        let brotherAndMe = li.parentNode.children
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }

    let litags = document.querySelectorAll('nav.menu>ul>li')
    console.log(litags)
    for (let i = 0; i < litags.length; i++) {
        litags[i].onmouseenter = function (x) {
            // let li=x.currentTarget
            // let brother=li.getElementsByTagName('ul')[0]
            // brother.classList.add('active')
            x.currentTarget.classList.add('active')



        }
        litags[i].onmouseleave = function (x) {
            // let li=x.currentTarget
            // let brother=li.getElementsByTagName('ul')[0]
            // brother.classList.remove('active')
            x.currentTarget.classList.remove('active')

        }


    }



}.call()


