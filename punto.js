"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        console.log("(" + this.x + "," + this.y + ")");
    };
    Punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    Punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.distancaiAlOrigen = function () {
        var distancia;
        distancia = Math.sqrt((Math.pow(this.x, 2)) + (Math.pow(this.y, 2)));
        return distancia;
    };
    Punto.prototype.calcularDistancai = function (otroPunto) {
        var distancia;
        distancia = Math.sqrt((Math.pow((otroPunto.x + this.x), 2)) + (Math.pow((otroPunto.y + this.y), 2)));
        return distancia;
    };
    Punto.prototype.calcularCuadrante = function () {
        var resultado;
        if (this.x == 0 || this.y == 0) {
            resultado = 0;
        }
        else if ((this.x > 0) && (this.y > 0)) {
            resultado = 1;
        }
        else if ((this.x < 0) && (this.y > 0)) {
            resultado = 2;
        }
        else if ((this.x < 0) && (this.y < 0)) {
            resultado = 3;
        }
        else if ((this.x > 0) && (this.y < 0)) {
            resultado = 4;
        }
        return resultado;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var puntoCerca;
        var numDistancia = new Array();
        for (var i = 0; i < puntos.length; i++) {
            numDistancia[i] = Math.sqrt((Math.pow((puntos[i].x + this.x), 2)) + (Math.pow((puntos[i].y + this.y), 2)));
        }
        return numDistancia;
    };
    return Punto;
}());
exports.Punto = Punto;
var punto1 = new Punto(22, 0);
var punto2 = new Punto(2, 34);
var punto3 = new Punto(32, 22);
var puntoArr = [punto2, punto3];
console.log(punto1.calcularMasCercano(puntoArr));
