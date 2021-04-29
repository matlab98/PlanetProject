
function datos_33() {
    var distancia1 = planetas.filter(({ distanciaTierra }) => distanciaTierra.includes(91))
    verDatos(distancia1)
}




//For in
for (const key in planetas) {
    console.log(planetas[key]);
}

//For of
for (const planeta of planetas) {
    console.log(planeta);
}

//Funcion anonima
const it = (planeta) => console.log("El planeta es " + planeta.nombre)
//For each
planetas.forEach(it)

planetas.forEach(function (planeta) {
    console.log("La superficie es " + planeta.superficie)
})

//Funcion anonima dentro de un arrow dentro de un foreach
planetas.forEach((planeta) => console.log("La masa es" + planeta.masa))

//.map
let resultado = planetas.map((planeta, index) => "La superficie del planeta " + planeta.nombre + " es " + planeta.superficie[index])
console.log(resultado)

//.filter para todos los valores
let distanciaSol_filter = planetas.filter((t) => t.distanciaSol % 2 == 0)
console.log(distanciaSol_filter)

//.find para valor especifico
let distanciaTierra_find = planetas.find((valor) => valor.distanciaTierra % 2 == 0)
console.log(distanciaTierra_find)

//find index - si no lo encuentra -1, si lo encuentra muestra el index
let nombre_findindex = planetas.findIndex((nombre) => nombre.nombre.toLocaleLowerCase() == "tierra")
console.log(nombre_findindex)

//includes
let resultado_includes = planetas.includes("tierra")
console.log(resultado_includes)