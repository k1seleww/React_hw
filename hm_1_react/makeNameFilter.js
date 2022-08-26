export function makeNameFilter(e, users, currArr, renderFunc, parent) {
  const currentValue = e.target.value.toLowerCase();
  const arrForSearch = [];

  users.forEach((elem) => {
    if (elem.name.toLowerCase().includes(currentValue)) {
      arrForSearch.push(elem);
    }
  });

  currArr = currArr.filter((elem) => arrForSearch.indexOf(elem) !== -1);

  parent.innerHTML = "";
  renderFunc(currArr, parent);
  return currArr;
}
