class Verde extends Cultista {

    constructor(app,px, py){
        super(app,px, py);
        
        this.imagen.push(
            this.app.loadImage("./ficha/export/verde0.png")
        );
        this.imagen.push(
            this.app.loadImage("./ficha/export/verde1.png")
        );
      //  this.disparo = this.disparo.bind(this);
      //  setInterval(this.disparo, 3000);
/*
        this.moverDisparo = this.moverDisparo.bind(this);
        */
    }

}