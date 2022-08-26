export function makeHeader(parent) {
    const header = document.createElement('div');
    header.classList.add('header');

    const searchField = document.createElement('input');
    searchField.classList.add('searchField');
    searchField.placeholder = 'Enter name';
    header.appendChild(searchField);

    const ageFilter = document.createElement('select');
    ageFilter.classList.add('ageFilter');
    header.appendChild(ageFilter);

    const option_1 = document.createElement('option');
    option_1.value = '0-25';
    option_1.innerHTML = 'up to 25 years';
    ageFilter.appendChild(option_1);

    const option_2 = document.createElement('option');
    option_2.value = '25-30';
    option_2.innerHTML = '25 - 30 years';
    ageFilter.appendChild(option_2);

    const option_3 = document.createElement('option');
    option_3.value = '30-35';
    option_3.innerHTML = '30 - 35 years';
    ageFilter.appendChild(option_3);

    const option_4 = document.createElement('option');
    option_4.value = '35-40';
    option_4.innerHTML = '35 - 40 years';
    ageFilter.appendChild(option_4);

    const btnReset = document.createElement('button');
    btnReset.classList.add('btnReset');
    header.appendChild(btnReset);

    parent.appendChild(header);
}


