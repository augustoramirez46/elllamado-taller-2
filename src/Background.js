class Background {

    constructor(app) {

        this.app = app;

        this.imagen = [];
        for (let i = 0; i < 6; i++) {
            this.imagen.push(
                this.app.loadImage("./ficha/export/bg" + i + ".png")
            );

        }
    }

    pintar(pantalla) {

        this.app.imageMode(this.app.CORNER);
        this.app.image(this.imagen[pantalla], 0, 0);
    }
}