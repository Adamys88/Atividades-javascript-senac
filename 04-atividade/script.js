//Exercício 01
let opcao = 2;

switch (opcao) {
    case 1:
        console.log("Sabor escolhido: Chocolate");
        break;
    case 2:
        console.log("Sabor escolhido: Morango");
        break;
    case 3:
        console.log("Sabor escolhido: Leite Ninho");
        break;
    default:
        console.log("Opção inválida");
}

//Exercício 02
let quantidade = 1;

while (quantidade <= 5) {
    console.log("Produzindo bolo número " + quantidade);
    quantidade++;
}

console.log("Todos os 5 bolos foram produzidos!");

//Exercício 03
const tipoServico = "Confecção Sob Medida";

switch(tipoServico) {
    case "Ajuste de Barra":
        console.log("Serviço Escolhido:");
        console.log("Ajuste de Barra \n");
            break;
    case "Confecção Sob Medida":
        console.log("Serviço Escolhido:");
        console.log("Confecção Sob Medida \n");
            break;
    case "Reforma de Vestido":
        console.log("Serviço Escolhido:");
        console.log("Reforma de Vestido \n");
            break;
    default:
        console.log("Selecione um tipo de serviço válido! \n");
}

//Exercício 04
let sessoesDiarias = 1;

while(sessoesDiarias <= 4) {
    console.log("Sessão: " + sessoesDiarias);
    console.log("Status: Realizada! \n");
    sessoesDiarias++;
}