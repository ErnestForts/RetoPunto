export class Punto{
    private x:number
    private y:number

    constructor(x:number,y:number){
        this.x = x
        this.y = y
    }

    toString(){
        console.log("("+this.x+","+this.y+")")
    }
    setX(newX:number){
        this.x = newX
    }
    setY(newY:number){
        this.y = newY
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    distancaiAlOrigen():number{
        let distancia : number 
        distancia =  Math.sqrt((this.x ** 2) + (this.y ** 2))
        return distancia
    }
    calcularDistancai(otroPunto:Punto):number{
        let distancia : number 
        distancia =  Math.sqrt(((otroPunto.x + this.x)** 2) + ((otroPunto.y + this.y)** 2))
        return distancia
    }
    calcularCuadrante():number{
        let resultado : number
        if(this.x == 0 || this.y == 0){
            resultado = 0
        }else if((this.x > 0) && (this.y > 0)){
            resultado = 1
        }else if((this.x < 0) && (this.y > 0)){
            resultado = 2
        }else if((this.x < 0) && (this.y < 0)){
            resultado = 3
        }else if((this.x > 0) && (this.y < 0)){
            resultado = 4
        }
        return resultado
    }
    calcularMasCercano(puntos:Punto[]){
        let numDistancia : number[] = new Array()
        for(let i = 0; i<puntos.length; i++){
            numDistancia[i] = Math.sqrt(((puntos[i].x + this.x)** 2) + ((puntos[i].y + this.y)** 2))
        }
        return numDistancia
    }
}

