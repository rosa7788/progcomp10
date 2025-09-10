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
