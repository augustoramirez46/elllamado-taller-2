class Tentaculo {

    constructor(app, py) {

        this.app = app;

        this.px = -50;
        this.py = -50;
        this.vel = this.app.random(4.7, 5);

        this.imagen = this.app.loadImage("/ficha/export/atk2.png");

    }

    pintar() {
        this.app.imageMode(this.app.CENTER);
        
        this.app.image(
            this.imagen,
            this.px - 5,
            this.py - 18,
            148,
            148
        );
        
    }

    mover(otropx, otropy) {

        this.px = otropx;
        this.py = otropy;
        

    }
}