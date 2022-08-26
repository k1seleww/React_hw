export function makeRender(itemsArr, parent){
    
    for(let item of itemsArr){
        const card = document.createElement('div');
        card.classList.add('card');
        parent.appendChild(card);

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('cardHeader');
        card.appendChild(cardHeader);

        const foto =  document.createElement('div');
        foto.classList.add('foto');
        cardHeader.appendChild(foto);

        const img =  document.createElement('img');
        //foto.src = item.picture; не прогружает картинки, поэтому src не ставлю. 522 ошибка при загрузке
        img.src = './img/foto.png';
        foto.appendChild(img);

        const cardHeaderInfo =  document.createElement('div');
        cardHeaderInfo.classList.add('cardHeaderInfo');
        cardHeader.appendChild(cardHeaderInfo);

        const name = document.createElement('div');
        name.classList.add('name');
        name.innerText = item.name;
        cardHeaderInfo.appendChild(name);

        const age = document.createElement('div');
        age.classList.add('age');
        age.innerText = item.age + ' years';
        cardHeaderInfo.appendChild(age);

        const cardContent = document.createElement('div');
        cardContent.classList.add('cardContent');
        card.appendChild(cardContent);

        const gender = document.createElement('div');
        gender.classList.add('gender');
        gender.innerText = item.gender;
        cardContent.appendChild(gender);

        const balance = document.createElement('div');
        balance.classList.add('balance');
        balance.innerText = item.balance;
        cardContent.appendChild(balance);
    }
}