import { makeHeader } from "./makeHeader.js";
import { userData } from './userData.js';
import { makeRender } from './makeRender.js';
import { makeNameFilter } from "./makeNameFilter.js";
import { makeAgeFilter } from "./makeAgeFilter.js";
import { makeResetFilter } from "./makeResetFilter.js";

const wrapper = document.getElementById('root');
makeHeader(wrapper);

const mainContent = document.createElement('div');
mainContent.classList.add('mainContent');
wrapper.append(mainContent);

makeRender(userData, mainContent);

const currentArr = userData;
let filteredName = [];
let filteredAge = [];
let curArr = [];
let ageSelect = false;

const searchField = document.querySelector('.searchField');
searchField.addEventListener('input', (e) => {
    curArr = (filteredAge.length > 0 && ageSelect && searchField.value !== '') ? filteredAge : currentArr;
    filteredName = makeNameFilter(e, userData, curArr, makeRender, mainContent);
});

const ageFilter = document.querySelector('.ageFilter');
ageFilter.addEventListener('change', (e) => {
    curArr = (filteredName.length > 0 && searchField.value !== '') ? filteredName : currentArr;
    filteredAge = makeAgeFilter(e, userData, curArr, makeRender, mainContent);
    ageSelect = true; 
});

const resetFilter = document.querySelector('.btnReset');
resetFilter.addEventListener('click', (e) => {
    curArr = makeResetFilter(e, userData, makeRender, mainContent);
    searchField.value = '';
    ageSelect = false;
});
