const menus = document.querySelectorAll('.menu');
const subMenus = document.querySelectorAll('.sub_menu');

menus.forEach(menu => {
    menu.addEventListener('click', (e) => {
        const index = Array.from(menus).indexOf(e.currentTarget);

        // Deactivate menus and sub menus
        menus.forEach((item) => {
            item.classList.remove('activate');
        })
        subMenus.forEach((item) => {
            item.classList.remove('activate');
        })

        if(menus[index].classList.contains('activate')) {
            menus[index].classList.remove('activate');
            subMenus[index].classList.remove('activate');
        } else {
            menus[index].classList.add('activate');
            subMenus[index].classList.add('activate');
        }
    })
})


// let selectedMenu = null;
// let menuClicked = false;
//
// const menu = document.querySelectorAll('.menu');
// const subMenu = document.querySelectorAll('.menu .sub_menu');
//
// menu.forEach((menuItem, index) => {
//     menuItem.addEventListener('click', () => {
//         menuClicked = true;
//         selectedMenu = index;
//
//         menu.forEach((item, idx) => {
//             if(idx !== selectedMenu) {
//                 item.classList.remove('active');
//             }
//         })
//
//         subMenu.forEach((item, idx) => {
//             if(idx !== selectedMenu) {
//                 item.classList.remove('active');
//             }
//         })
//
//         menuItem.classList.add('active');
//         subMenu[selectedMenu].classList.add('active');
//     })
// })
//
// const aboutUs = document.querySelector('#aboutUs');
// const isAboutUsOn = false;
//
// document.getElementById('aboutUsLink').addEventListener('click', showAboutUs);
//
// function showAboutUs() {
//     if (!isAboutUsOn) {
//         aboutUs.style.display = 'block';
//     }
//
//     for(let i=0; i<menu.length; i++){
//         menu[i].classList.remove('active');
//     }
//
//     for(let i=0; i<subMenu.length; i++){
//         subMenu[i].classList.remove('active');
//     }
// }
