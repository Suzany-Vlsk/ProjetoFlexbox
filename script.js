function alerta()
{
    alert("Você clicou em Ver Perfil!");
}

/* EXERCICO II */

function mostrarCuriosidade() {

    document.getElementById("textoCuriosidade").innerText =
        "Curiosidade: Naruto Uzumaki foi o primeiro personagem criado por Masashi Kishimoto para a série.";

}


/* EXERCICO III */
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