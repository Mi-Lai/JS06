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
function createElement(){
    const card0bj={
        name_section: document.createElement("h3"),
        desc_section: document.createElement("p"),
        age_section: document.createElement("p"),
        book_section: document.createElement("div"),
    }
    return card0bj;
}


//se crea un objeto SE DECLARAN CON LLAVES, TIENEN (LLAVE,VALOR)

//Crear targeta
//inyectar info
function injectData(obj){
    const bookList=USER.fav_books.books.map ((e)=> {
    const item = document.createElement("ul");
    item.textContent=e;
    return item;
    });

    obj.name_section.textContent=USER.username;
    obj.desc_section.textContent= USER. desc;
    obj.age_section.textContent= USER.age;
    obj.book_section.append(...bookList);
}

function renderCard(card0bj) { // Llama a la función para renderizar las tarjetas de usuario
    const card = document.createElement("div");
    card.append( //se ingresa las secciones del nombre
        card0bj.name_section,
        card0bj.desc_section,
        card0bj.age_section,
        card0bj.book_section,
    );
    CARDS_CONTAINER.appendChild(card);
}
    

