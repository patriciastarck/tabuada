function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    //abaixo, quer dize que se o campo ficar em branco, retorne a mensagem 'digite um nº'
    if (num.value.length == 0) {
        alert('Digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Para limpar e mostrar tabuada nova.
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
        }
    }
}