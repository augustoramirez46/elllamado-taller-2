class Caballin extends Enemigo {

    constructor(app, py){
        super(app, py);

        this.imagen.push(
            this.app.loadImage("./ficha/export/ene2.png")
        );

        this.imagen.push(
            this.app.loadImage("./ficha/export/ene2.1.png")
        );

        this.sangre = 10;
    }




}