
new p5(function (app){

    let logica;

    app.preload = function () {
        logica = new Logica(app);

        logica.laPrevia();
/*
        this.miCancion = app.loadSound("/ficha/llamado.mp3");

        this.miCancion.setVolume(0.1);
        this.miCancion.play();

*/
    }

    app.setup = function () {

        

        app.createCanvas(1920, 1080);
               
    }

    app.draw = function () {

        logica.pintar();
    }

    app.keyPressed = function () {

        if(app.keyCode == 32) {

            logica.screen();
        
        }
    }

    app.mousePressed = function () {

       // logica.addCozinhos();
        logica.cambiarSelector();
        logica.ponerTorres();
        logica.poderosoSensible();
        
    }
}
);