// Achando o elemento pela tag
// Queremos a h1 

 //Pegue o elemento pelo nome da Tag
let titulo = document.getElementsByClassName('h1');

console.log(titulo[0]);

let nome = document.getElementsByTagName('li');
console.log(nome);

// atributo classe
//A Classe  pode ter mais de um pot pa

let Nomedois = document.getElementsByName('nome do estado do brasil');
//console.log(nome dois)

// atributo Id
//  o Id só existe um por pagina 

let paragrafo = document.getElementById('nome do estado do brasil');
//console.log(paragrafo);

// outra forma de acessar elementos HTML 
// queryselector ou querySelectorALL

//A diferença é que com o querSelectorALL ele seleciona todos os elementos de dentro

let lis = document.querySelector('#outro do estado .nome do estado2');

console.log("Nome usando querSelector");
console.log(lis);

// A diferença é que com o querSelectorALL ele seleciona todos os elementos de dentro
console.log("Nome usando querSelectorALL");

let Listodos = document.querySelectorAll('#outro do estado .nome do estado2');
console.log(Listodos);

// Exemplo querSelector

let FraseDoNome = document.querySelector(' #capital  #cidade ');

console.log(FraseDoNome);


function dizOi() {
    alert("Olá Bom Dia!");

}
function soma(a, b) {
    console.log(a + b);
}

soma( 10 , 10 );

// como alterar o conteudo do elemento 

let trocarTitulo = document.querySelector(' #titulo ');

//Agora vou trocar o conteudo 
//innerHTML ela serve para acessar o conteudo do elemento 

trocarTitulo.innerHTML = " Novo Valor ";
//trocarTitulo.innerHTML = " Qualquer coisa "; 

function trocaValor() {
    trocarTitulo.innerHTML = " Transforme-se ";
}

// Outra foram de trocar  o contéudo do elemento 

let trocarSubtitulo = document.querySelector('#subtitulo');

trocarSubtitulo.textContent = "Google";

// removendo um elemento da nossa página

let removeSubtitulo = document.querySelector('#subtitulo');

removeSubtitulo.remove();


