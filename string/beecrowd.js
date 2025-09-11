//1168


var lines = InputDeviceInfo.split('\n')

    let leds = {
    '0': 6,
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6
}
let quantidadeNumeros = parseInt(lines[0]) //para cada número
for(let i = 1; i <= quantidadeNumeros;i++){
    let numero = lines[i]
    let soma = 0
    for(let j = 0; j < numero.length; j++){ //para cada letra do número
    soma += leds(numero[j])
    
    }
    console.log(`${soma} leds`)

}

//2779

let total = parseInt(lines[0])
let pacote = parseInt(lines[1])

let nova = new Set ()
for (let i = 2; i <= pacote+1;i++){
    nova.add(lines[i])
}
let faltam = total - nova.size
console.log(faltam)

//2770

input = "10 10 3\n 5 5\n 10 10\n 5 25\n 2 3 1\n 3 2"
lines = input.split(/\s + /) //elemento separador dos espaços e \n

let i = 0
while (i < lines.length){
    let x = parseInt(lines[i++]) // i = 0 //altura da placa da empresa
    let y = parseInt(lines[i++]) // i = 1 // largura da placa da empresa
    let p = parseInt(lines[i++]) //qunatas placas
    for (let j = 0; j < p; j++){
        let Xi = parseInt(lines[i++]) //altura da placa do usuario
        let Yi = parseInt(lines[i++]) //largura da placa do usuario
        if ((Xi <= x && Yi <= y) || (Xi <= y && Yi <= x)){
            console.log('Sim')
        } 
        else {
            console.log('Nao')
        }
    }

}

//1179


let lines = input.trim().split("\n")

let par = [];
let impar = [];

for (let i = 0; i < lines.length; i++) {
  if (parseInt(lines[i]) % 2 === 0) {
    par.push(parseInt(lines[i]));
    if (par.length === 5) { // encheu
      for (let i = 0; i < 5; i++) {
        console.log(par{[i]} = ${par[i]});
      }
      par = []; // esvazia
    }
  } else {
    impar.push(parseInt(lines[i]));
    if (impar.length === 5) { // encheu
      for (let i = 0; i < 5; i++) {
        console.log(impar[${i}] = ${impar[i]});
      }
      impar = []; // esvazia
    }
  }
}

// Depois da leitura, imprime o que restou
for (let i = 0; i < impar.length; i++) {
  console.log(impar[${i}] = ${impar[i]});
}

for (let i = 0; i < par.length; i++) {
  console.log(par[${i}] = ${par[i]});
}






