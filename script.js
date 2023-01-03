function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        // BOM DIA
        img.src = 'imagens/1.png'
        document.body.style.background = '#DBCC62'

    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'imagens/2.png'
        document.body.style.background = '#C46724'
    } else {
        // BOA NOITE
        img.src = 'imagens/3.png'
        document.body.style.background = '#16001C'
    }
}