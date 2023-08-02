"use strict";
const routes = {
    '/': home,
    '/contact': contact,
};
const root = document.querySelector('#root');
const pathname = window.location.pathname;
const path = pathname === '/' ? pathname : pathname.replace(/\/$/, ''); // Normalize the path by removing trailing slashes.
root.innerHTML = routes[path];
const onNavigate = (pathname) => {
    const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/$/, ''); // Normalize the path by removing trailing slashes.
    window.history.pushState({}, pathname, window.location.origin + normalizedPath);
    root.innerHTML = routes[normalizedPath];
};
window.onpopstate = () => {
    const normalizedPath = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, ''); // Normalize the path by removing trailing slashes.
    root.innerHTML = routes[normalizedPath];
};
//# sourceMappingURL=app.js.map