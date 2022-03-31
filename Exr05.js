var salario = 0.0,
    aumento = 0,
    valorAm = 0,
    salarioNovo;

salario = parseFloat(prompt("Valor do salário: "));

if (salario <= 280.0) {
    aumento = 20;
    valorAm = salario * aumento / 100;
    salarioNovo = salario + valorAm;
} else if (salario > 280.0 && salario <= 700.0) {
    aumento = 15;
    valorAm = salario * aumento / 100;
    salarioNovo = salario + valorAm;
} else if (salario > 700.0 && salario < 1500.0) {
    aumento = 10;
    valorAm = salario * aumento / 100;
    salarioNovo = salario + valorAm;
} else if (salario >= 1500.0) {
    aumento = 5;
    valorAm = salario * aumento / 100;
    salarioNovo = salario + valorAm;
}

console.log("Valor do salário antes do aumento: R$" + salario);
console.log("Porcentagem de aumento foi: " + aumento + "%");
console.log("Valor aumentado: R$" + valorAm);
console.log("Seu novo salário é: R$" + salarioNovo);