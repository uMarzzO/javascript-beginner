var idade = 68
console.log(`Sua idade é de ${idade}.`)
if (idade < 16) {
    console.log('Não vota!!')
} else if (idade >= 16 && idade < 18 || idade >= 67) {
    console.log('Voto facultativo!!')
} else {
    console.log('Voto Obrigatório!!')
}