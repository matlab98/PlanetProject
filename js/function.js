

var planets = []

const planet_1 = {
    name: "Mercurio",
    description: "Planeta",
    image: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/03/21174712/MERCURIO.jpg",
    distanceSun: "0,39",
    DurationDay: "1408",
    distanceEarth: "222",
    surface: "74,8",
    mass: "3,302×10<sup>23</sup>"
}

const planet_2 = {
    name: "Venus",
    description: "Planeta",
    image: "data:image/jpeg;base64,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",
    distanceSun: "0,72",
    DurationDay: "5832",
    distanceEarth: "40",
    surface: "460,2",
    mass: "4,869×10<sup>24</sup>"
}

const planet_3 = {
    name: "Tierra",
    description: "Planeta",
    image: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5ea049335bafe8fce52c678e/tierra-planeta.jpg",
    distanceSun: "1",
    DurationDay: "24",
    distanceEarth: "0",
    surface: "510,1",
    mass: "5,972×10<sup>24</sup>"
}

const planet_4 = {
    name: "Marte",
    description: "Planeta",
    image: "https://services.meteored.com/img/article/des-micro-organismes-terrestres-capables-de-survivre-temporairement-sur-mars-316371-1_768.jpeg",
    distanceSun: "1.52",
    DurationDay: "25",
    distanceEarth: "225",
    surface: "114,8",
    mass: "6,39×10<sup>23</sup>"
}

const planet_5 = {
    name: "Júpiter",
    description: "Planeta",
    image: "https://static.vix.com/es/sites/default/files/d/descubren_planeta_mas_grande_que_jupiter.jpg",
    distanceSun: "5.2",
    DurationDay: "10",
    distanceEarth: "660",
    surface: "61,42",
    mass: "1,898×10<sup>27</sup>"
}

const planet_6 = {
    name: "Saturno",
    description: "Planeta",
    image: "https://juegoderompecabezas.com/wp-content/uploads/2020/12/saturno.jpg",
    distanceSun: "9.54",
    DurationDay: "11",
    distanceEarth: "1.275",
    surface: "42,7",
    mass: "5,683×10<sup>26</sup>" 
}

const planet_7 = {
    name: "Urano",
    description: "Planeta",
    image: "https://images.clarin.com/2021/01/05/urano-se-pone-directo-que___rXgPrBr00_1256x620__1.jpg",
    distanceSun: "19.22",
    DurationDay: "17",
    distanceEarth: "2543164000",
    surface: "8083",
    mass: "8,681×10<sup>25</sup>"
}

const planet_8 = {
    name: "Neptuno",
    description: "Planeta",
    image: "https://www.caracteristicas.co/wp-content/uploads/2017/05/neptuno-e1569255785939.jpg",
    distanceSun: "30.06",
    DurationDay: "16",
    distanceEarth: "4348",
    surface: "7,618",
    mass: "1,024×10<sup>26</sup>"
}

const planet_9 = {
    name: "Plutón",
    description: "Planeta enano",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/250px-Pluto_in_True_Color_-_High-Res.jpg",
    distanceSun: 5906400000,
    DurationDay: "153",
    distanceEarth: "6000000000",
    surface: "17,000,000",
    mass: '1,25×10<sup>22</sup>'
}
const planet_10 = {
    name: "Haumea",
    description: "Planeta enano",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Haumea%2C_Celestia.jpg/1200px-Haumea%2C_Celestia.jpg",
    distanceSun: 52360000000,
    DurationDay: "4",
    distanceEarth: "5108320000000",
    surface: "1,952,160",
    mass: "4,2×10<sup>21</sup>"
}
const planet_11 = {
    name: "Makemake",
    description: "Planeta enano",
    image: "https://st4.depositphotos.com/17187238/28504/i/600/depositphotos_285043532-stock-photo-makemake-dwarf-planet-isolated-on.jpg",
    distanceSun: 6850240000000,
    DurationDay: "-",
    distanceEarth: "5610000000",
    surface: "1,450,000",
    mass: "4×10<sup>21</sup>"
}
const planet_12 = {
    name: "Eris",
    description: "Planeta enano",
    image: "http://cdn.eso.org/images/screen/eso1142a.jpg",
    distanceSun: 52360000000000,
    DurationDay: "-",
    distanceEarth: "14316000000",
    surface: "2,372,000",
    mass: "3,75×10<sup>22</sup>"
}
const planet_13 = {
    name: "Ceres",
    description: "Planeta enano",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29.jpg",
    distanceSun: 371446000000,
    DurationDay: "-",
    distanceEarth: "46000000000",
    surface: "2,850,000",
    mass: "9,43×10<sup>20</sup>"
}

planets.push(planet_1)
planets.push(planet_2)
planets.push(planet_3)
planets.push(planet_4)
planets.push(planet_5)
planets.push(planet_6)
planets.push(planet_7)
planets.push(planet_8)
planets.push(planet_9)
planets.push(planet_10)
planets.push(planet_11)
planets.push(planet_12)
planets.push(planet_13)

Visualizacion(planets)
function Visualizacion(data) {
    let rest_body = document.getElementById("rest-body");
    rest_body.innerHTML = '';
    for (let item of data) {
        rest_body.innerHTML += `
    <tr>
    <td>${item.name}</td>
    <td><img class="image" src=${item.image}></td>
    <td>${item.description}</td>
    <td>${item.distanceSun}</td>
    <td>${item.DurationDay}</td>
    <td>${item.distanceEarth}</td>
    <td>${item.surface}</td>
    <td>${item.mass}</td>
</tr>
`
    }
}

function menor_mayor() {
    const LessDistance = planets;
    LessDistance.sort((a,b)=>a.distanceSun-b.distanceSun)
Visualizacion(LessDistance)
}

function mayor_menor() {
    const LessDistance = planets;
    LessDistance.sort((a,b)=>a.distanceSun-b.distanceSun)
    LessDistance.reverse()
Visualizacion(LessDistance)
}

function buscar() {
    var nombre = document.getElementById("Search_name").value;
    nombre=nombre.toLocaleLowerCase();
    var name = planets.find(({n}) => n.toLowerCase()==nombre)
    rest_body.innerHTML = '';
    rest_body.innerHTML += `
    <tr>
    <td>${item.name}</td>
    <td><img class="image" src=${item.image}></td>
    <td>${item.description}</td>
    <td>${item.distanceSun}</td>
    <td>${item.DurationDay}</td>
    <td>${item.distanceEarth}</td>
    <td>${item.surface}</td>
    <td>${item.mass}</td>
</tr>
`
}

