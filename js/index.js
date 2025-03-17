const menus = document.querySelectorAll('.menu');
const subMenus = document.querySelectorAll('.sub_menu');

menus.forEach((menu, index) => {
    menu.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            subMenus.forEach((subMenus) => {
                subMenus.classList.remove('active');
            })
        } else {
            menu.classList.add('active');
            subMenus[index].classList.add('active');
        }
    })
})

// Prevent event bubbling
subMenus.forEach(subMenu => {
    subMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        menus.forEach(menu => {
            menu.classList.remove('active');
        })
        subMenu.classList.remove('active');

    })
})

