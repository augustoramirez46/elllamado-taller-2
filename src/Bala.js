class Bala {

    constructor(app, px, py) {

        this.app = app;

        this.px = px;
        this.py = py;
        this.vel = this.app.random(4.7, 5);

        this.imagen = this.app.loadImage("/ficha/export/atk1.png");

        this.mover = this.mover.bind(this);
        setInterval(this.mover, 20); 

        this.dano = 5;


    }

    pintar() {
        this.app.imageMode(this.app.CENTER);
        
        this.app.image(
            this.imagen,
            this.px,
            this.py,
            148,
            148
        );
        
    }

    mover() {

        this.px += this.vel;

    }
}