!function () {


    window.addEventListener('scroll', function (x) {
        if (window.scrollY > 0) {
            topNavbar.classList.add('floating-style');
        }
        else {
            topNavbar.classList.remove('floating-style');
        }
    })


}.call()

