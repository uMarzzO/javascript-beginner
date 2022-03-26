function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)

        if (fsex[0].checked) {
            gênero = `Homem`
            if (idade >= 0 && idade < 4) {
                //  BEBÊ
                img.setAttribute(`SRC`, `bebe_homem.png`)
            } else if (idade >= 4 && idade < 10) {
                //  CRIANÇA
                img.setAttribute(`SRC`, `crianca_homem.png`)
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute(`SRC`, `jovem_homem.png`)
            } else if (idade >= 21 && idade < 60) {
                //ADULTO
                img.setAttribute(`SRC`, `adulto_homem.png`)
            } else {
                //IDOSO
                img.setAttribute(`SRC`, `idoso_homem.png`)
            }
        } else if (fsex[1].checked) {
            gênero = `Mulher`
            if (idade >= 0 && idade < 4) {
                //  BEBÊ
                img.setAttribute(`SRC`, `bebe_mulher.png`)
            } else if (idade >= 4 && idade < 10) {
                //  CRIANÇA
                img.setAttribute(`SRC`, `crianca_mulher.png`)
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute(`SRC`, `jovem_mulher.png`)
            } else if (idade >= 21 && idade < 60) {
                //ADULTO
                img.setAttribute(`SRC`, `adulta_mulher.png`)
            } else {
                //IDOSO
                img.setAttribute(`SRC`, `idosa_mulher.png`)
            }
        }
        res.textAlign = `center`
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}
