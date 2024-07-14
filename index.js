//criei variáveis para guardar minhas informações pessoais
//variáveis do tipo string, number, float, boolean e array
let nome = "Gabrielle";
let sobrenome = "Gonçalves Da Rocha";
let idade = 29;
let loira = false;
let altura = 1.52;
let minhaFamilia = ["Fran", "Thalia", "Dica", "Otavio"];

// a variável minhaFamilia recebe um Array e posso usar
//métodos para consultar esse array e alterar ele;
//por exemplo se eu quero percorrer esse array eu posso
//usar o método "length", se eu quiser adicionar um elemento
//no final do meu array eu posso usar o método "push()" 
//há vários métodos para manipulação de um array, aqui citei dois.


//aqui na linha 22 eu criei uma estrutura de decisão 
//utilizando if else, usei o operador de diferente
//para a resolução de saber se o nome estava ou não correto

if(nome != "Gabrielle"){
    console.log("nome incorreto")
} else {
    console.log("nome correto")
}

//aqui abaixo na minha linha 32 
//eu realizei a criação de um objeto simples
//contendo algumas informações pessoais sobre mim

let minhasInformacoes = {
    cidade: "São Paulo",
    filhos: 0,
    interesses: ["tecnologia", "livros"],
    dirige: true
}

//aqui na minha linha x eu criei uma function
//simples que recebe dois parametros

function extrairDados(nome, cep) {
    console.log("consta como nome " + nome)
    console.log("consta como rg " + cep)
}

extrairDados("gabrielle", "02017010")

console.log(extrairDados)











