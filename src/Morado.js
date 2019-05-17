class Morado extends Cultista {

    constructor(app, px, py) {
        super(app, px, py);

        this.imagen.push(
            this.app.loadImage("./ficha/export/morado0.png")
        );
        this.imagen.push(
            this.app.loadImage("./ficha/export/morado1.png")
        );
    }

    disparoT(otropx, otropy) {

        
        
        if(this.disparado == 0) {
        if(otropx < 1900 && this.posX < otropx && otropy < this.posY + 15 && otropy > this.posY - 15) {
            
            this.disparado = 200;

     
            return true;            
        }else{
 
            return false;
            
        }     
    } 
    
    }



}