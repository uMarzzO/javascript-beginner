var num = [5, 8, 2, 9, 3, 1]

console.log(num)
num.sort()
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
*/

/*
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem valor ${num[pos]}.`)
}*/// Código de Percurso de Vetores.

for(let pos in num) {//Para cada posição em num eu vou mostrar o num[pos]. funciona apenas com ARRAYS (VETORES) e OBJETOS.
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}