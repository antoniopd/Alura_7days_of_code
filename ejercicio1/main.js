
const boton = document.getElementById('boton');

boton.addEventListener("click", consola );

function consola (event) {
    const nombre = document.querySelector('#name');
    const data = document.querySelector('#birth-date');
    console.log(`nombre : ${nombre.value}`);
    console.log(`data : ${data.value}`);

    event.preventDefault();
}
    