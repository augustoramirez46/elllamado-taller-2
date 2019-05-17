class Cultista {

    constructor (app, mpx, mpy) {
        this.app = app;
        
        if(mpx > 140 && mpx < 1873){
        this.px = parseInt (this.app.map (mpx, 140, 1873, 0, 12, true));
        this.posX = 212 + this.px * 146;
        }
        if(mpy > 500 && mpy < 932){
        this.py = parseInt (this.app.map (mpy, 500,932, 0,3, true));
        this.posY = 573 + 146* this.py
        }

        console.log(this.px, this.py);

        this.animacion = this.animacion.bind(this);
        setInterval(this.animacion, 200);

        this.imagen = [];
        this.disparado = 0;
        this.indice = 0;

        
        
    }

    pintar() {

        this.app.imageMode(this.app.CENTER);
        this.app.image(
            this.imagen[this.indice], 
             this.posX , 
             this.posY, 
            148 , 148);
      
    }

    animacion() {
        //animacion de imagen y saltito
        if (this.saltin == false) {
 
            this.indice = 1;
            
            this.saltin = true;
        }else{

            this.indice = 0;

            this.saltin = false;
            if(this.disparado > 0)this.disparado--;
    
        }


    }

    disparo(otropx, otropy) {
        
        if(this.disparado == 0) {
        if(otropx < 1900 && this.posX < otropx && otropy < this.posY + 15 && otropy > this.posY - 15) {
            
            this.disparado = 5;

            return true;            
        }else{
        
            return false;
            
        }     
    } 
    
    }

    




}