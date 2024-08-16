// alert("Ola mundo");

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 30;

var criaMosquitoTempo = 2700

var nivel = window.location.search;
nivel = nivel.replace("?", "");     // RETIRANDO O ? DA BARRA DE URL

// CRIANDO O NIVEL DO JOGO

if(nivel === "facil"){
  //2.700
  criaMosquitoTempo = 3700
}else if( nivel === "normal"){
  //1000
  criaMosquitoTempo = 1500
} else if (nivel === "chucknorris"){
  //750
  criaMosquitoTempo = 750
}

// É NESSESARIO DECLARAR A VARIAVÉL FORA DO ESCOPO DA FUNCAO PARA PODE USAR ELA DENTRO DA FUNCAO

function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight; // METODO PARA VER A DIMENSAO DA JANELA
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function() {
    tempo -= 1;

    if (tempo < 0) {
        clearInterval(cronometro) // Eliminando a funcao da memoria com clearInterval
        clearInterval(criaMosquito)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById("cronometro").innerHTML = tempo;
    }

}, 1000)

function posicaoRandomica() {

    // remover o mosquito anterior (caso exista)

    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()

        // console.log("O Elemento selecionado foi: v" + vidas);
        if (vidas > 3) {

            // alert("interromper o jogo (Gamer Over!)")
            window.location.href = "fim_de_jogo.html"
        } else {

            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90 // METODO Math.random() PARA TRAZER UM NUMERO RANDOMICO
    var posicaoY = Math.floor(Math.random() * altura) - 90 // METODO Math.floor()  PARA ARREDONDAR AS CASAS DECIMAIS PARA BAIXO

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY);

    // CRIAR O ELEMENTO HTML
    // document.createElement("img")

    // CRIANDO MOSQUITO 

    var mosquito = document.createElement("img") // cliando o elemento e passando para a variavel
    mosquito.src = "imagens/mosquito.png" // incluindo o novo elemtno no body da pagina
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"

    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);

}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    // console.log('valor -> ' + classe);

    switch (classe) {
        case 0:
            return "mosquito1"

        case 1:
            return "mosquito2"

        case 2:
            return "mosquito3"

    }
}

function ladoAleatorio() {

    var classe = Math.floor(Math.random() * 2);
    // console.log('valor -> ' + classe);

    switch (classe) {
        case 0:
            return "ladoA"

        case 1:
            return "ladoB"

    }

}