// SPA implementation
type RouteType = {
  [key: string] : string
}

const routes: RouteType = {
    '/': home,
    '/about': about,
    '/contact': contact
}

const root: HTMLElement = document.querySelector('#root')!;
const path: keyof RouteType = window.location.pathname;
root.innerHTML = routes[path];

const onNavigate = (pathname: string) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  root.innerHTML = routes[window.location.pathname];
};

