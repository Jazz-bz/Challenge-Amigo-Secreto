// Crear un array para almacenar los nombres
let listaAmigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Captura el valor del campo de texto
    const inputNombre = document.getElementById("amigo").value.trim(); 
    if (inputNombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    // Agregar nombre al array
    listaAmigos.push(inputNombre); 
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = ""; 
    // Actualizar la lista visible
    mostrarLista(); 
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    const listaElement = document.getElementById("listaAmigos");
    // Limpiar contenido anterior
    listaElement.innerHTML = ""; 
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo; 
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear."); 
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); 
    const amigoSorteado = listaAmigos[indiceAleatorio];
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

    
   