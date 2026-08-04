function alerta()
{
    alert("Você clicou em Ver Perfil!");
}

function mostrarPersonagem(event) {

    event.preventDefault();

    let personagem = document.getElementById("personagem").value;
    let resposta = document.getElementById("resposta");

    if (personagem.trim() === "") {
        resposta.textContent = "Digite o nome de um personagem!";
        return;
    }

    resposta.innerHTML = 
        'Você escolheu <strong class="nome-personagem">' 
        + personagem 
        + '</strong> como seu personagem favorito! 🍥';
}