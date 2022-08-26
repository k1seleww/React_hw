export function makeAgeFilter(e, arr, currArr, renderFunc, parent) {
  const currentUsers = [];
  const currArrValues = e.target.value.split("-");

  currArr.forEach((elem) => {
    if (+elem.age > +currArrValues[0] && +elem.age < +currArrValues[1]) {
      currentUsers.push(elem);
    }
  });

  parent.innerHTML = "";
  renderFunc(currentUsers, parent);

  return currentUsers;
}
