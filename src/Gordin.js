class Gordin extends Enemigo {

    constructor(app, py){
        super(app, py);

        this.vel = this.vel / 4;
        
        this.imagen.push(
            this.app.loadImage("./ficha/export/ene3.png")
        );

        this.imagen.push(
            this.app.loadImage("./ficha/export/ene3.1.png")
        );

        this.sangre = 35;
    }




}