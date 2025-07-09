function menuCreate() {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    content.appendChild(main);
    
    

    const logo_section = document.createElement('div');
    logo_section.setAttribute('id', 'logo_section')
    logo_section.classList.add('section');
    const logo1 = document.createElement('div');
    logo1.classList.add('logo');
    const name_container = document.createElement('div');
    name_container.setAttribute('id', 'name_container');
    const main_name = document.createElement('div');
    main_name.textContent = "Menu"
    name_container.appendChild(main_name);
    const logo2 = document.createElement('div');
    logo2.classList.add('logo');
    logo_section.appendChild(logo1);
    logo_section.appendChild(name_container);
    logo_section.appendChild(logo2);
    main.appendChild(logo_section);

    const beer_section = document.createElement('div');
    beer_section.setAttribute('id', 'beer_section')
    beer_section.classList.add('section')
    main.appendChild(beer_section)

    const food_section = document.createElement('div');
    food_section.setAttribute('id', 'beer_section')
    food_section.classList.add('section')
    main.appendChild(food_section)
}

export { menuCreate };