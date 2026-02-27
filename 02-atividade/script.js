// Exercício 1

let bolosVendidos = 35;
let meta = 30;

if (bolosVendidos >= meta) {
    console.log("A meta foi atingida!");
}

if (bolosVendidos > meta) {
    console.log("A meta foi superada!");
}

// Exercício 2

let valorPedido = 180;
let clienteVIP = true;

if (valorPedido > 200 || clienteVIP === true) {
    console.log("Cliente tem direito ao frete grátis!");
} else {
    console.log("Cliente NÃO tem direito ao frete grátis.");
}

// Exercício 3

let valorServico = 650;
let clienteAntigo = true;

if (valorServico >= 500 && clienteAntigo === true) {
    console.log("Cliente tem direito ao desconto de 10%!");
} else {
    console.log("Cliente NÃO tem direito ao desconto.");
}

// Exercício 4

let horarioDisponivel = true;
let pacienteCadastrado = false;

if (horarioDisponivel && pacienteCadastrado) {
    console.log("Consulta pode ser agendada.");
} else {
    console.log("Consulta NÃO pode ser agendada.");
}