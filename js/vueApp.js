let myOjbJSON = { "userId": 1, "id": 2, "title": "qui est esse", "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla" }

let myObj = {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}

console.log(myObj);
console.log(JSON.stringify(myObj)); // convierto a JSON

console.log(myOjbJSON);
//console.log(JSON.parse(myOjbJSON)); // convierto a objeto

let porDos = (x) => x * 2
porDos(2);// esto devuelve 4

// A partir de aca definimos y usamos nuestro objeto vue
let myComponent = new Vue(
    {
        el: '#app',
        data: {
            message: 'Bienvenido a  Codo a Codo 4.0 !!!',
            personajes: []
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                fetch("https://rickandmortyapi.com/api/character/")
                    .then(response => response.json())
                    .then(data => {
                        this.personajes = data.results
                        console.log(data)
                    })
            }
        }
    }
);

const router = () => {
    const path = parseLocation();

    const {action = 'error' } = findActionByPath(path, routes) || {};

    // Antes de cambiar de route, limpio la vista
    //app.cleanView();

    switch (action) {
        case "contact":
            alert("ahora mostraria un Vue component de contacto");
            break;
        case "agregar":
            //app.agregar("#app") // falta definir metodo agregar
            break;
        case "listar":
            //app.listar("#app") // falta definir metodo list
            break;
        case "buscar":
            //app.buscar("#app")
        break;
        case "favorito":
            //FavouriteComponent("#app");
        break;
        default:
            //ErrorComponent("#app");
            break;
    }
}

//$( window ).on( 'load', () => {
    router();
//});

//document.readyState()

window.addEventListener("hashchange",() =>{
    router();
} )
//$( window ).on('hashchange', )