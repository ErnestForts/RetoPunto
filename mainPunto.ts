import {Punto} from "./punto"
import {Triangulo} from "./punto"

let punto1:Punto = new Punto (22,33)
let punto2:Punto = new Punto (2,34)
let punto3:Punto = new Punto (32,22)
let puntoArr : Punto[] = [punto2,punto3]

punto1.toString()
console.log(punto1.distancaiAlOrigen())
console.log(punto1.calcularDistancai(new Punto(4,3)))
console.log(punto1.calcularCuadrante())
console.log(punto1.calcularMasCercano(puntoArr))

let triangulo1:Triangulo = new Triangulo (new Punto (2,3),new Punto (22,55),new Punto (8,9))
console.log(triangulo1.calcularLongitudLados())
