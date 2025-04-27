function calcular(){
    //recuperar valor da ação social digitado
    //declaração variavel sem tipo
    soma = 0
    let pontosKit = 0
   let acaoSocial = document.getElementById("acaoSocial").value;
   soma = soma + Number(acaoSocial)
   //recupera o valor da homenagem digitado
   let homenagem = document.getElementById("homenagem").value;
   soma = soma + Number(homenagem)
   //vamos somar os valores
   let leite = document.getElementById("leite").value;
   soma = soma + Number(2* leite)
   //recupera qtd de leite
   let kit = Number (document.getElementById("kit").value);
   soma = soma + Number(15* kit)
   //
   let equipe = document.getElementById("equipe").value

   //recupera a cor da equipe
   if (equipe == "Laranja") {
    //equipe é laranja
        if ((kit) >=97 && suplemento >=49) { 
            pontosKit = 5000 + ((kit-97)*30) + ((suplemento - 25)*15)
        }
        else if ((kit) >=78 && suplemento >=39) {
            pontosKit = 4000 + ((kit-78)*30) + ((suplemento - 25)*15)
        }
        else if ((kit) >=49 && suplemento >=25) {
            pontosKit = 2500 + ((kit-49)*30) + ((suplemento - 25)*15)
        }
        else if ((kit) >=19 && suplemento >=10) {
            pontosKit = 1000 + ((kit-19)*30) + ((suplemento - 25)*15)
        }
        else pontosKit = 0
    }

   let suplemento= document.getElementById("suplemento").value;
   soma = soma + Number(30 * suplemento)
   //
   let pacoteArroz = document.getElementById("pacoteArroz").value;
   soma = soma + Number(1 * pacoteArroz)
   //
   let pacoteFeijao = document.getElementById("pacoteFeijao").value;
   soma = soma + Number(1 * pacoteFeijao)
   //
   let pacoteMacarrao = document.getElementById("pacoteMacarrao").value;
   soma = soma + Number(0.5 * pacoteMacarrao)
   //
   let oleo = document.getElementById("oleo").value;
   soma = soma + Number(1 * oleo)
   //devolve o resultado para o HTML
   document.getElementById("soma").innerHTML = soma.toFixed(2)

   let sangue = Number(document.getElementById("sangue").value);
   let pontosSangue = 0;

   if (equipe == "Laranja") {
    if (sangue >=49) {
        pontosSangue = 2500 + ((sangue-49)*20);
    } else {
        pontosSangue = sangue*20;
    } 
    } else if (equipe == "Preta"){
    if (sangue >= 52){
        pontosSangue = 2500 + (sangue - 52)*20
    }
    else {
        pontosSangue = sangue * 20
    } 
    } else if (equipe == "Roxa") { // equipe roxa
    if (sangue >= 51) {
        pontosSangue = 2500 + ((sangue-51)*20);
    } else {
        pontosSangue = sangue*20;
    }
    } else if (equipe == "Verde") { // equipe verde
    if (sangue >= 44) {
        pontosSangue = 2500 + ((sangue-44)*20);
    } else {
        pontosSangue = sangue*20;
    }
    } else { // equipe vermelha
    if (sangue >= 47) {
        pontosSangue = 2500 + ((sangue-47)*20);
    } else {
        pontosSangue = sangue*20;
    }
}

soma += pontosSangue; // soma a pontuação da doação de sangue a pontuação total

document.getElementById("soma").innerHTML = soma.toFixed(2); // devolve o resultado para o HTML
}






