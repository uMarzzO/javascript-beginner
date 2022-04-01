let amigo = {nome:'Joe',
sexo: 'M',
peso: 100,
engordar(p = 0) {
    console.log(`Engordou!!`)
    this.peso += p
}
}
//console.log(typeof amigo)
amigo.engordar(-10)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)