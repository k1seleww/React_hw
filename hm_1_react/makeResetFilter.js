export function makeResetFilter(e, users, renderFunc, parent){
    parent.innerHTML = '';
    renderFunc(users, parent);
    return users;
}