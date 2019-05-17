class Enemigo {
    
    constructor (app, py) {
        this.app = app;

        this.px = this.app.random(2000, 2300);
        this.py = py;
        this.vel = this.app.random(4.7 , 5);

        this.imagen = [];

        this.mover = this.mover.bind(this);
        setInterval(this.mover, 20);

        this.wiggle = this.wiggle.bind(this);
        setInterval(this.wiggle, 100 * this.vel);

        this.saltin = false;
        this.indice = 0;

        this.sangre;

    }

    pintar() {

        this.app.imageMode(this.app.CENTER);
        this.app.image(
            this.imagen[this.indice], 
            this.px, 
            this.py, 
            148 , 
            148
            );
    }

    mover() {
           this.px -= this.vel;

           


    }

    wiggle() {
        //animacion de imagen y saltito
        if (this.saltin == false) {
            this.py += 4;
            this.indice ++;
            
            this.saltin = true;
        }else{
            this.py -= 4;
            this.indice --;

            this.saltin = false;
        }


    }

    recibirDisparo(dano) {

        this.sangre -= dano;
    }
}