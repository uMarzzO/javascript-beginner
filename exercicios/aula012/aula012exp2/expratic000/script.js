function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!!
        img.src = `imagens/manha.jpg`
        document.body.style.background = `#f0f2bb`
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde!! 
        img.src = `imagens/tarde.jpg`
        document.body.style.background = `#19bcf7`
    } else {
        // Boa Noite!!
        img.src = `imagens/noite.jpg`
        document.body.style.background = `#240d4f`
    }

}

