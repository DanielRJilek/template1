function contactCreate() {
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
    main_name.textContent = "Contact Us"
    name_container.appendChild(main_name);
    const logo2 = document.createElement('div');
    logo2.classList.add('logo');
    logo_section.appendChild(logo1);
    logo_section.appendChild(name_container);
    logo_section.appendChild(logo2);
    main.appendChild(logo_section);
}

export { contactCreate };