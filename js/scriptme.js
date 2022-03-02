window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.burger-menu').classList.toggle('is-active')
    })
    document.querySelector('.burger-menu-off').addEventListener('click', function(){
        document.querySelector('.burger-menu').classList.remove('is-active')
    })

    document.querySelector('.search-tab-click').addEventListener('click', function() {
        document.querySelector('.search-tab-on').classList.add('search-visible')
        document.querySelector('.search-tab-click').classList.add('search-tab-click-off')
    })
    document.querySelector('.search-tab-off').addEventListener('click', function(){
        document.querySelector('.search-tab-on').classList.remove('search-visible')
        document.querySelector('.search-tab-click').classList.remove('search-tab-click-off')
    })
})
    
