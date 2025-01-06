let selectedMenu = null;
let menuClicked = false;

const menu = document.querySelectorAll('.menu');
const subMenu = document.querySelectorAll('.sub_menu');

menu.forEach((menuItem, index) => {
    menuItem.addEventListener('click', () => {
        menuClicked = true;
        selectedMenu = index;

        menu.forEach((item, idx) => {
            if(idx !== selectedMenu) {
                item.classList.remove('active');
            }
        })

        subMenu.forEach((item, idx) => {
            if(idx !== selectedMenu) {
                item.classList.remove('active');
            }
        })

        menuItem.classList.add('active');
        subMenu[selectedMenu].classList.add('active');

    })
})

// addEventListener('DOMContentLoaded', () => {
//
// })
