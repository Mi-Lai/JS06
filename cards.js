//vamos a crear  etiquetas de perfil para cada usuario
/* Crear tarjeta
* make section for cards
*Img
*Name, desc, age, list of fav things
*[]insert card
*[] show in div.container
*
*/

const CARDS_CONTAINER= document.querySelector("#card-container");
//document.getElementById("#card-container");
// sino se puede usar document.querySelector elemneto ".card-container" poner dato por id "#card-container"
const USER={
    id:1,
    username: "Mi-Lai",
    desc:"sobre mi",
    age:25,
    fav_books: {
        books: ["Brida",
     "La mecanica del corazón", 
     "El principito",
     "Pequeño cerdo capitalista"
    ],
    },
};

///crear secciones    
const card = document.createElement("div"); //va a crear un div
const name_section= document.createElement("h3");
const desc_section= document.createElement("p");
const age_section= document.createElement("p");
const book_section= document.createElement("div");

//lista-----------
const bookList= USER.fav_books.books.map((e)=> {
    const item =document.createElement("ul");
    item.textContent=e;
    return item;

});
console.log(bookList);

//se crea un objeto SE DECLARAN CON LLAVES, TIENEN (LLAVE,VALOR)

//Crear targeta
//inyectar info
name_section.textContent=USER.username;
desc_section.textContent= USER.desc;
age_section.textContent= USER.age;
book_section.append(...bookList);

card.append(name_section,desc_section,age_section, book_section);

//inyectar targeta en e container
CARDS_CONTAINER.appendChild(card);