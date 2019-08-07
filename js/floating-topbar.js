!function () {
    var view = document.querySelector('#topNavbar')
    view.style.border = '1px solid red'
    var controller = function (view) {
        window.addEventListener('scroll', function (x) {
            if (window.scrollY > 0) {
                view.classList.add('floating-style');
            }
            else {
                view.classList.remove('floating-style');
            }
        })
    }
    controller.call(null,view)




}.call()

