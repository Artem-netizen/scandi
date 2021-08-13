const openBtn = document.querySelector('.open-menu'),
    closeBtn = document.querySelector('.close-menu'),
    menuVisible = document.querySelector('.sidebar');
openBtn.addEventListener('click', () => {
    closeBtn.classList.add('active-bar')
    openBtn.classList.remove('active-bar')
    menuVisible.classList.add('menu-active')
    $('body').addClass('no-scroll');
});
closeBtn.addEventListener('click', () => {
    openBtn.classList.add('active-bar')
    closeBtn.classList.remove('active-bar')
    menuVisible.classList.remove('menu-active')
    $('body').removeClass('no-scroll');
});