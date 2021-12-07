function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.innerText = 'Phone: 123 456 7890';
    phoneNumber.classList.add('phone-number');

    const address = document.createElement('p');
    address.innerText = 'Address: 2990 W Belmont Ave';
    address.classList.add('address');

    contact.appendChild(phoneNumber);
    contact.appendChild(address);

    return contact;
}


function loadContact() {
    const main = document.querySelector('main');
    main.innerText = '';
    main.classList.add('main');
    main.appendChild(createContact());
}

export default loadContact;