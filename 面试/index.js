const drawer = document.querySelector('.drawer');
const drawerBtn = document.querySelector('.drawer-btn button');

drawerBtn.addEventListener('click', () => {
    console.log('13')
    drawer.classList.toggle('open')
})