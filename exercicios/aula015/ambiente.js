let num = [5, 8, 2, 9, 3, 1]
num.push(7)// Add um elemento, o 7 no caso!! Como adicionei o elemento depois de organizar, ele entra na última posição!! Ordem dos atributos influência!!
num.sort()//Coloca em ordem crescente!!

//num.indexOf(7)//Procura o valor 7 na Array, e retorna a posição. Caso imprima -1, quer dizer que o valor não foi encontrado na Array!!
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)// variavel.length == número de elementos da Array!!
console.log(`O primeiro valor do vetor é ${num[0]}.`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`Valor não está contido na array!!`)
} else {
    console.log(`O valor está na posição ${pos}.`)
}
