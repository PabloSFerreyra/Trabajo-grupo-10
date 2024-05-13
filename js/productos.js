const container = document.getElementById("container");

// Hacemos un objeto con el link y nombre de los cupcakes.

let cupcakes = [
    {
        nombre: "Cupcake Ferrero Roger",
        link: "Cupcake-Ferrero-Roger.png",
    },
    {
        nombre: "Cupcake Red Velvet",
        link: "Cupcake-Red-Velvet.png",
    },
    {
        nombre: "Cupcake Cereza",
        link: "Cupcake-Cereza.png",
    },
    {
        nombre: "Cupcake de Frutilla",
        link: "Cupcake-Frutilla.png",
    },
    {
        nombre: "Cupcake de Nuez",
        link: "Cupcake-Oblea.png",
    },
    {
        nombre: "Crema del Cielo",
        link: "Cupcake-Celeste.png",
    },
    {
        nombre: "Cupcake Oreo",
        link: "Cupcake-Oreo.png",
    },
    {
        nombre: "Cupcake de Limón",
        link: "Cupcake-Limon.png",
    }
];

// creamos una variable y almacenamos todos los elementos ahi y luego lo insertamos haciendo mas facil agregar productos.

let pageComponents = '';

for (const cupcake of cupcakes) {
    console.log(cupcake);
    pageComponents += `
    <div class="product">
        <img src="./img/${cupcake.link}" alt="${cupcake.nombre}">
        <p>${cupcake.nombre}</p>
    </div>`;
}

container.innerHTML = pageComponents;