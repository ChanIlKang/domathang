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

const aboutUs = document.querySelector('#aboutUs');
const isAboutUsOn = false;

document.getElementById('aboutUsLink').addEventListener('click', showAboutUs);

function showAboutUs() {
    if (!isAboutUsOn) {
        aboutUs.style.display = 'block';
    }

    for(let i=0; i<menu.length; i++){
        console.log("1")
        menu[i].classList.remove('active');
        console.log("2")
    }

    for(let i=0; i<subMenu.length; i++){
        console.log("3")
        subMenu[i].classList.remove('active');
        console.log("4")
    }
}

// addEventListener('DOMContentLoaded', () => {
//
// })
