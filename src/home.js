function homeCreate() {
    const content = document.querySelector('#content');
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    content.appendChild(main);

    // const name_section = document.createElement('div');
    // name_section.classList.add('name')
    // name_section.classList.add('section')
    // main.appendChild(name_section)

    const logo_section = document.createElement('div');
    logo_section.setAttribute('id', 'logo_section')
    logo_section.classList.add('section');
    const logo1 = document.createElement('div');
    logo1.classList.add('logo');
    const name_container = document.createElement('div');
    name_container.setAttribute('id', 'name_container');
    const main_name = document.createElement('div');
    main_name.textContent = "Otto's von Bayern"
    name_container.appendChild(main_name);
    const logo2 = document.createElement('div');
    logo2.classList.add('logo');
    logo_section.appendChild(logo1);
    logo_section.appendChild(name_container);
    logo_section.appendChild(logo2);
    main.appendChild(logo_section); 

    const description_section = document.createElement('div');
    description_section.setAttribute('id', 'description_section')
    description_section.classList.add('section')
    main.appendChild(description_section)

    const hours_section = document.createElement('div');
    hours_section.setAttribute('id', 'hours_section')
    hours_section.classList.add('section')
    hours_section.textContent += "Hours";
    main.appendChild(hours_section)

    const location_section = document.createElement('div');
    location_section.setAttribute('id','location_section')
    location_section.classList.add('section')
    main.appendChild(location_section)
}

export { homeCreate };