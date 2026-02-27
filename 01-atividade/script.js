// EXERCÍCIO 1: BOLO DE POTE
 
const precoVenda = 12.00; 
const custoProducao = 5.50; 
 
let quantidadeVendida = 30; 
 
let lucroPorUnidade = precoVenda - custoProducao
 
let lucroTotal = lucroPorUnidade * quantidadeVendida;
 
console.log("O lucro por unidade foi de R$ " + lucroPorUnidade.toFixed(2) + " e o lucro total da venda foi de R$ " + lucroTotal.toFixed(2) + ".");
 
 
 
// EXERCÍCIO 2: CONFEITARIA
 
let precoBolo = 150.00; 
let porcentagemDesconto = 0.10; 
 
let valorDesconto = precoBolo * porcentagemDesconto;
 
let valorFinal = precoBolo - valorDesconto;
 
console.log(`O valor do desconto foi de R$ ${valorDesconto.toFixed(2)}. O valor final do bolo ficou em R$ ${valorFinal.toFixed(2)}.`);
 
 
 
// EXERCÍCIO 3: ESTILISTA
 
let valorVestido = 800.00; 
let porcentagemComissao = 0.15; 
 
let valorComissao = valorVestido * porcentagemComissao;
 
console.log(`A estilista vai receber uma comissão de R$ ${valorComissao.toFixed(2)} pela venda do vestido.`);
 
 
 
// EXERCÍCIO 4: PSICÓLOGO
 

let valorSessao = 120.00; 
let sessoesRealizadas = 40; 
 
let faturamentoMensal = valorSessao * sessoesRealizadas;
 
console.log("O faturamento mensal do psicólogo com as sessões foi de R$ " + faturamentoMensal.toFixed(2) + ".");