
const form = document.querySelector('.form');
const nombre = document.querySelector('#name');
const data = document.querySelector('#birth-date');
const boton = document.getElementById('boton');

const personas = document.getElementById('demp');

form.addEventListener("submit", consola);

function consola(event) {
    
    nombre.setCustomValidity("");
    nombre.checkValidity();
    console.log(nombre.checkValidity());

    nombre.addEventListener("invalid", () => {
        nombre.setCustomValidity("❌Por favor introduce un Nombre valido❌");
    });


    event.preventDefault();
}

boton.addEventListener('click', () => {

    function dadosDaPessoa() {

        console.log("fui clicado");
        console.log(`nombre : ${nombre.value}`);
        console.log(`data : ${data.value}`);

        //    localStorage.setItem("pessoas", `[${nombre.value},${data.value}]`, JSON.stringify(dadosDaPessoa));

        const dadosDaPessoa = [nombre.value, data.value]

        localStorage.setItem('pessoas', JSON.stringify(dadosDaPessoa));

        const pessoas = JSON.parse(localStorage.getItem('pessoas')) || [];

        alert(pessoas)

        

        personas.innerHTML = `
        <p>${pessoas[0]}</p><p>${pessoas[1]}</p>
        `

    }
    dadosDaPessoa();
    
});




