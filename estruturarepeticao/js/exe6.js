function exe6 (){
    let valor, codigo, totalVista = 0, totalPrazo = 0
    for (let conta =1;conta<=5;conta++){
        do {
        codigo = prompt (`Informe o codigo V(á vista) ou P (prazo)`).toUpperCase()
        }
        while (codigo != 'V' && codigo != 'P')
        do {
        valor = Number(prompt(`Informe o valor`))
        }
        while (valor < 0)
        if (codigo == 'V'){
            totalVista = totalVista + valor
        }
        else {
            totalPrazo = totalPrazo + valor
        }
    
    }
    alert (`Total a vista ${totalVista} Total a prazo ${totalPrazo}`)
    alert (`Total geral ${totalPrazo + totalVista} e 1a. parcela ${totalPrazo/3}`)

}