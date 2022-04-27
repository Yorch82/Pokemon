// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.getElementById("gen-1").innerText="Generasión 1 Pokimon";

// 2. Cambia el color de fondo de la primera generación de Pokimon.

document.getElementById("gen-1").nextElementSibling.style.backgroundColor = "#BDE4A7"; 

// // 3.Imprime por consola la URL de la página.

console.log(document.URL);

// // 4. Imprime por consola el dominio de la página.

console.log(document.domain);

// // 5. Imprime todos los nodos de imagen.

// // 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const image = document.getElementsByTagName("IMG");
for (let i = 0; i < image.length; i++) {
    image[i].src="https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    console.log(image[i])    
}

// // 7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

const data = document.getElementsByClassName("infocard-lg-data text-muted");
for (let i = 0; i < data.length; i++) {
    const flying = document.getElementsByClassName("itype flying");
    flying[i].closest("div").style.backgroundColor= "#FFFD98";
}