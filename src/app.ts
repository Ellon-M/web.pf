// SPA implementation
type RouteType = {
  [key: string] : string
}

const routes: RouteType = {
  '/': home, 
  '/contact': contact,
};

const root: HTMLElement = document.querySelector('#root')!;
const pathname = window.location.pathname;

const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/$/, '');

root.innerHTML = routes[normalizedPath];

const onNavigate = (pathname: string) => {
  const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/$/, '');

  window.history.pushState({}, pathname, window.location.origin + normalizedPath);
  root.innerHTML = routes[normalizedPath];
};

window.onpopstate = () => {
  const normalizedPath = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, '');

  root.innerHTML = routes[normalizedPath];
};
