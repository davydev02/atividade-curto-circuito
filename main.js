console.log("Ana" || "Visitante");

console.log("" || "Visitante");

console.log(0 || 10);

console.log(0 ?? 10);

console.log("" ?? "Visitante");

console.log(null ?? "Visitante");

console.log(undefined ?? "Visitante");

console.log(true && "executou");

console.log(false && "executou");


function quantidadeA(qtd) {
    return qtd || 1;
}

function quantidadeB(qtd) {
    return qtd ?? 1;
}

console.log(quantidadeA(0));
console.log(quantidadeB(0));