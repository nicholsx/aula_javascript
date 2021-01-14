

function clicou() {
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento) {
    //document.getElementById("MouseMove").innerHTML = "Obrigado por passar o Mouse";
    //alert("Trocar Texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    //document.getElementById("MouseMove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Pagina Carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}




/* Funções (Diferença de variavel global e local)
function soma(n1,n2) {
    return n1 + n2;
}

//function setReplace(frase,nome, nome_novo){
//    return frase.replace(nome, nome_novo)
//}
*/

/*
function validaIdade(idade) {
    var validar;
    if (idade >=18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

//alert(soma(5,10));
//alert(setReplace("Vai Japao", "Japao", "Brasil"));
*/

/* Datas
var data = new Date();
alert(data);
alert(data.getDay());
alert(data.getHours());
alert(data.getMinutes());
*/

/* Estrutura com For
var count;
for(count=0; count <= 3; count++){
    alert(count);
};
*/

/* Contador com While
var count = 0;
while (count <= 5) {
    console.log(count);
    //count = count + 1;
    alert(count);
    count ++;
};
*/


/* Condicionais e Laços de Repetição
var idade = prompt("Qual sua idade");

if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/


/* Lista com Dicionario
var frutas = [{nome:"maça", cor:"vermelha"} , {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/* Variaveis, alert, console.log
var nome = "Nicholas Costa";
var idade = 38;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo " + nome + " com " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
//console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", " Brasil"));
*/

/* Lista
var lista = ["maça", "pera", "laranja"];
lista.push("uva"); //Push Adicionar um item a lista
lista.pop("pera"); //Pop Retira o ultimo elemento adicionado
//alert(lista[1]); // Mostra o elemento da posição 1 da lista
console.log(lista);
//console.log(lista.length); // Tamanho da lista
//console.log(lista.reverse()); // Inverte a lista
//console.log(lista.toString());
//console.log(lista.join(" | "));
*/

/* Dicionario
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


