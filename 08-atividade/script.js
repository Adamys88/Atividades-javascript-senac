// 1️ Cadastro de cliente – Empresa de bolo de pote

let cliente = {
    nome: "Maria",
    telefone: "11999999999",
    pedidoFavorito: "Bolo de pote de chocolate"
};

console.log(cliente.nome);

cliente.cidade = "São Paulo";

delete cliente.telefone;

console.log(cliente);



// 2️ Cadastro de produto – Confeitaria

let bolo = {
    sabor: "Morango",
    preco: 15
};

let ingredientes = {
    massa: "Baunilha",
    recheio: "Creme de morango"
};

let produtoFinal = {};

Object.assign(produtoFinal, bolo, ingredientes);
console.log(produtoFinal);



// 3️ Serviço do ateliê de costura

let servico = {
    tipo: "Ajuste de vestido",
    preco: 50
};

servico.preco = 70;

servico.p
console.log(servico);



// 4️ Ficha de paciente – Psicólogo

let paciente = {
    nome: "João",
    idade: 30,
    problema: "Ansiedade"
};

let propriedades = Object.keys(paciente);

console.log(propriedades);



// 5️ Cadastro de costureira – Ateliê de costura

let costureira = {
    nome: "Ana",
    experiencia: 5,
    especialidade: "Vestidos"
};

costureira.experiencia += 1;

console.log(costureira);



// 6️ Informações do terapeuta – Clínica de psicologia

let terapeuta = {
    nome: "Carlos",
    especialidade: "Terapia Cognitivo-Comportamental",
    cidade: "São Paulo"
};

let [nome, especialidade, cidade] = Object.values(terapeuta);

console.log(nome);
console.log(especialidade);
console.log(cidade);