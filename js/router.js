const routes = [
    { path: '/' ,       action: 'agregar'},
    { path: '/pagina1', action: 'listar'},
    { path: '/pagina2', action: 'buscar'},
    { path: '/pagina3', action: 'favorito'},
    { path: 'contact', action: 'contact'}
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findActionByPath = (path, routes) => routes.find(r=> r.path == path || undefined );