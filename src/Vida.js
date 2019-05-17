class Vida {

    constructor(app, py) {
        this.app = app;

        this.py = py;
        this.px = 70;

        this.imagen = [];
        this.imagen.push(
            this.app.loadImage("./ficha/export/vidas.png")
        );
        this.imagen.push(
            this.app.loadImage("./ficha/export/vidas1.png")
        );

        this.indice = 0;

        this.animacion = this.animacion.bind(this);
        setInterval(this.animacion, 150);




    }

    pintar() {

        this.app.imageMode(this.app.CENTER)

        this.app.image(this.imagen[this.indice], this.px, this.py, 150, 150);



    }

    animacion() {
        //animacion de imagen y saltito
        if (this.saltin == false) {

            this.indice = 1;
            
            this.saltin = true;
        }else{
      
            this.indice = 0;

            this.saltin = false;
        }


    }




}