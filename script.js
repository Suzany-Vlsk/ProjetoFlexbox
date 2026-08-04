function alerta()
{
    alert("Você clicou em Ver Perfil!");
}

function mostrarPersonagem(event) {

    event.preventDefault();

    let personagem = document.getElementById("personagem").value;

    let resposta = document.getElementById("resposta");

    resposta.textContent = "Você escolheu " + personagem + " como seu personagem favorito! 🍥";
}