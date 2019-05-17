class Amarillo extends Enemigo {



    constructor(app, py) {
        super(app, py);

        this.vel = this.vel / 2;

        this.imagen.push(
            this.app.loadImage("./ficha/export/ene1.png")
        );

        this.imagen.push(
            this.app.loadImage("./ficha/export/ene1.1.png")
        );

        this.sangre = 15;
    }




}