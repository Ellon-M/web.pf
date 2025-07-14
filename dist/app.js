"use strict";
const routes = {
    '/': home,
    '/contact': contact,
};
const root = document.querySelector('#root');
const pathname = window.location.pathname;
const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/$/, '');
root.innerHTML = routes[normalizedPath];
const onNavigate = (pathname) => {
    const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/$/, '');
    window.history.pushState({}, pathname, window.location.origin + normalizedPath);
    root.innerHTML = routes[normalizedPath];
};
window.onpopstate = () => {
    const normalizedPath = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, '');
    root.innerHTML = routes[normalizedPath];
};
//# sourceMappingURL=app.js.map