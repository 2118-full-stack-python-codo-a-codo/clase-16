let myOjbJSON = {"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"}

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

let myComponent = new Vue(
    {
    el: '#app',
    data: {
      message: 'Bienvenido a  Codo a Codo 4.0 !!!'
        }
    }
 );