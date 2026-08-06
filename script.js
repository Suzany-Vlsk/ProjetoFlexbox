function alerta()
{
    alert("Você clicou em Ver Perfil!");
}

/* EXERCICO II */

function mostrarCuriosidade() {

    document.getElementById("textoCuriosidade").innerHTML = 
    '<strong class="titulo-curiosidade">Curiosidade: </strong>Naruto Uzumaki foi o primeiro personagem criado por Masashi Kishimoto para a série.';

}


/* EXERCICO III */

function mostrarPersonagem(event) {

    event.preventDefault(); /* Impede o formulário de ser enviado/recarregar a página para que o javacript possa mostrar a resposta diretamente na página */

    let personagem = document.getElementById("personagem").value;
    let resposta = document.getElementById("resposta");
                                           /* <strong> serve para deixar nome do personagem em destaque */
    resposta.innerHTML ='Você escolheu <strong class="nome-personagem">' + personagem + '</strong> como seu personagem favorito! 🍥';
}

/* EXERCICIO IV */

function calcularPontos(){

    let missoes = Number(document.getElementById("missoes").value);
    let pontos = Number(document.getElementById("pontos").value);

    let total = missoes * pontos;

    document.getElementById("resultadoPontos").innerText =
        "Seu ninja conquistou " + total + " pontos!";
}

