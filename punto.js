"use strict";
exports.__esModule = true;
exports.Triangulo = exports.Punto = void 0;
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
        var numDistancia = new Array();
        for (var i = 0; i < puntos.length; i++) {
            numDistancia[i] = Math.sqrt((Math.pow((puntos[i].x + this.x), 2)) + (Math.pow((puntos[i].y + this.y), 2)));
        }
        return numDistancia;
    };
    return Punto;
}());
exports.Punto = Punto;
var Triangulo = /** @class */ (function () {
    function Triangulo(vertice1, vertice2, vertice3) {
        this.vertice1 = vertice1;
        this.vertice2 = vertice2;
        this.vertice3 = vertice3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var distanciaLados = new Array();
        distanciaLados[0] = Math.sqrt((Math.pow((this.vertice1.getX() + this.vertice2.getX()), 2)) + (Math.pow((this.vertice1.getY() + this.vertice2.getY()), 2)));
        distanciaLados[1] = Math.sqrt((Math.pow((this.vertice2.getX() + this.vertice3.getX()), 2)) + (Math.pow((this.vertice2.getY() + this.vertice3.getY()), 2)));
        distanciaLados[2] = Math.sqrt((Math.pow((this.vertice3.getX() + this.vertice1.getX()), 2)) + (Math.pow((this.vertice3.getY() + this.vertice1.getY()), 2)));
        return distanciaLados;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
