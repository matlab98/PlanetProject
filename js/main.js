nombre_planetas = Array("Tierra", "Marte")
let distancias = [3, 4, 5, "67"]
const tamanio = [102,]
const planetas = []
const planeta = { 
    nombre : "Tierra", 
    tamanio : 30000000, 
    distanciaAlaTierra : 0, 
    distanciaAlsol : 1899999999, 
    minerales: ["oro", "cobre", "carbón"] }

    planetas.push(planeta)
    planetas.push({nombre :"Marte", 
    tamanio :80000, 
    distanciaAlaTierra :6737333333})

let resta = (n1, n2) => n1 - n2

nombre_planetas[2]="Jupiter"

console.log(nombre_planetas[10])
console.log(distancias)
console.log(tamanio)

console.log("=======PLANETAS=======")
console.log(planetas)
console.log(planeta)


console.log("======WHILE======")
let i = 0

while (i <= 2) {
    console.log(nombre_planetas[i])
    i = i + 1
}

console.log("======FOR======")
for (var j = 0; j < distancias.length; j++) {
    console.log(distancias[j])
}

console.log("======FOR IN======")
for (const key in nombre_planetas) {
    console.log(nombre_planetas[key])
}

for (const key in distancias) {
    if (distancias[key] == 5) {
        console.log("Se encontro distancia 5")
    }
}


for (const iterator of nombre_planetas) {
    console.log(iterator)
}

console.log("======FOR OF========")
for (const planeta of nombre_planetas) {
    console.log(planeta)
}

console.log("====FOREACH=====")

function sumar(n1, n2) {
    return n1 + n2
}

console.log(sumar(2, 3))
console.log(resta(20, 30))

let resultado = nombre_planetas.forEach((planeta)=> console.log("El planeta es: "+planeta))
console.log(resultado)

console.log("=====map======")
let resultado_map =nombre_planetas.map((planeta, index)=>"El tamaño de "+planeta+" es "+tamanio[index])
console.log(resultado_map)

console.log("=======filter======")
let resultado_filter=tamanio.filter((t)=>{return t%2==0})
console.log(resultado_filter)

console.log("=======find======")
let resultado_find=planetas.find(({nombre,distanciaAlaTierra})=>nombre.toLocaleLowerCase()=="marte")
console.log(resultado_find)

console.log("=====findIndex======")
let resultado_findIndex=nombre_planetas.findIndex((p)=>p.toLocaleUpperCase()=="MARTE")
console.log(resultado_findIndex)

console.log("======includes=======")
let resultado_includes=nombre_planetas.includes("Tierra",0)
console.log(resultado_includes)

if(1===1){
    const mifuncion=()=>8*8

}

let iterador=(valor)=>{
    console.log("Elemento", valor)
}

console.log("ITERACIÓN PLANETAS")
planetas.forEach(iterador)
console.log("ITERACIÓN NOMBRE PLANETAS")
nombre_planetas.forEach(iterador)


/*                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>*/


                                