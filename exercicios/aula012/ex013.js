var agora = new Date()
var diaSem = agora.getDay()
/*
    Array = [Dias da Semana]

    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/
console.log(diaSem)
/*Aparece a posição na array, portanto deve-se alterar p/ que imprima o nome do dia da semana. */

switch (diaSem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break
    case 2:
        console.log(`Terça`)
        break
    case 3:
        console.log(`Quarta`)
        break
    case 4:
        console.log(`Quinta`)
        break
    case 5:
        console.log(`Sexta`)
        break
    case 6:
        console.log(`Sábado`)
        break
    default:
        console.log(`[ERRO] Dia Inválido!`)
        break
}