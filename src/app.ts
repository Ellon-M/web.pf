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
const path: keyof RouteType = pathname === '/' ? pathname : pathname.replace(/\/$/, ''); // Normalize the path by removing trailing slashes.

root.innerHTML = routes[path];

const onNavigate = (pathname: string) => {
  const normalizedPath = pathname === '/' ? pathname : pathname.replace(/\/$/, ''); // Normalize the path by removing trailing slashes.
  window.history.pushState({}, pathname, window.location.origin + normalizedPath);
  root.innerHTML = routes[normalizedPath];
};

window.onpopstate = () => {
  const normalizedPath = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, ''); // Normalize the path by removing trailing slashes.
  root.innerHTML = routes[normalizedPath];
};
