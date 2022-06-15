//HORA DO DIA
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    if (hora >= 6 && hora < 12) {
        //BOM DIA
        msg.innerHTML = `Bom dia! Agora são ${hora} horas e ${minutos} minutos.`
        img.src = './img/manha.png'
        document.body.style.background = '#8c9d79'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas e ${minutos} minutos.`
        img.src = './img/tarde.png'
        document.body.style.background = '#d7701e'
    } else {
        //BOA NOITE
        msg.innerHTML = `Boa noite! Agora são ${hora} horas e ${minutos} minutos.`
        img.src = './img/noite.png'
        document.body.style.background = '#35616e'
    }
}
