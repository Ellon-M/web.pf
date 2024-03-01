"use strict";
const routes = {
    '/': home,
    '/about': about,
    '/work': work
};
const root = document.querySelector('#root');
const path = window.location.pathname;
root.innerHTML = routes[path];
const onNavigate = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    root.innerHTML = routes[pathname];
};
window.onpopstate = () => {
    root.innerHTML = routes[window.location.pathname];
};
//# sourceMappingURL=app.js.map