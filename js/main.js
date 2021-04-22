nombre_planetas=Array("Tierra", "Marte")
let distancias=[3,4,5,"67"]
const tamanio=[]

let resta=(n1,n2)=> n1-n2

function functionforeach(planeta,index,arreglo){
    console.log("El planeta es : "+planeta,index,arreglo)
}

function mifuncionIteradora(planeta){
    console.log("El planeta es: "+planeta)
}
nombre_planetas[2]="Jupiter"

console.log(nombre_planetas)
console.log(distancias)
console.log(tamanio)

console.log("======WHILE======")
let i=0

while (i<=2){
    console.log(nombre_planetas[i])
    i=i+1
}

console.log("======FOR======")
for (var j=0;j<3;j++){
console.log(distancias[j])
}

for(const key in nombre_planetas){
console.log(nombre_planetas[key])
}

for(const iterator of nombre_planetas){
    console.log(iterator)
}

for(const key in distancias){
    if(distancias[key]==5){
        console.log("Se encontro distancia 5")
    }
}

console.log("======FOR OF========")
for(const planeta of nombre_planetas){
    console.log(planeta)
}

console.log("====FOREACH=====")
console.log(sumar(2,3))
console.log(resta(20,30))
function sumar(n1,n2){
    return n1+n2
}

nombre_planetas.forEach()
