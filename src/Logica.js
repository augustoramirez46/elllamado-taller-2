class Logica {

    constructor(app) {
        this.app = app;
        this.bg = new Background(this.app);

        this.cultos = [];
        this.ojos = [];
        this.tentaculos = [];

        this.spX = 110;
        this.spY = 150;
        this.torre = 0;
        this.sTorre = [];
        this.sTorre.push(
            this.app.loadImage("./ficha/export/verde0.png")
        );
        this.sTorre.push(
            this.app.loadImage("./ficha/export/morado0.png")
        );


        this.cinzel = this.app.loadFont("/ficha/font/Cinzel/Cinzel-Black.ttf");
        this.vingg = this.app.loadImage("/ficha/vingg.png")


        this.pantalla = 0;
        this.cronometro = 0;
        this.dinero = 30;
        this.puntaje = 0;
        this.poderoso = false;

        this.timer = this.timer.bind(this);

        this.poderosoThread = this.poderosoThread.bind(this);

        this.addCozinhos = this.addCozinhos.bind(this);


        this.cozinhos = [];
        this.pY = [560, 710, 860];
        this.enemigos = 0;

        this.vidas = [];
        for (let i = 0; i < 3; i++) {

            this.vidas.push(
                new Vida(this.app, this.pY[i])
            );
        }

        this.disparo = this.disparo.bind(this);
        setInterval(this.disparo, 100);


        console.log(this.vidas);


    }

    laPrevia() {
        this.app.soundFormats('mp3', 'ogg');
        this.miCancion = this.app.loadSound("/ficha/llamado.mp3");

    }

    pintar() {

        this.bg.pintar(this.pantalla);
        switch (this.pantalla) {
            case 3:

                if (this.poderoso) {
                    this.bg.pintar(4);
                }

                this.indicadores();

                for (let i = 0; i < this.vidas.length; i++) {
                    this.vidas[i].pintar();


                }

                this.selector();

                for (let i = 0; i < this.cozinhos.length; i++) {
                    this.cozinhos[i].pintar();

                    for (let e = 0; e < this.tentaculos.length; e++) {


                        let enemiguitos = this.insertionSort(this.cozinhos);

                        this.tentaculos[e].pintar();
                        this.tentaculos[e].mover(enemiguitos[0].px, enemiguitos[0].py);

                    }


                }

                for (let i = 0; i < this.cultos.length; i++) {
                    this.cultos[i].pintar();

                }

                for (let i = 0; i < this.ojos.length; i++) {
                    this.ojos[i].pintar();

                }

                this.colision();
                break;

            case 4:

                break;
        }

        this.app.imageMode(this.app.CORNER);
        this.app.image(this.vingg, 0, 0);

        this.pillarMiMouse();

    }

    screen() {
        // inicia los hilos solo 1 vez
        if (this.pantalla == 2) {

            this.miCancion.setVolume(0.5);
            this.miCancion.play();

            this.cronos = setInterval(this.timer, 1000);
            this.enemigg = setInterval(this.addCozinhos, 15000);
            this.ojotote = setInterval(this.poderosoThread, 35000);
        }

        if (this.pantalla != 3 ) {
            //pantalla ++
            this.pantalla++;
        }

        //restart
        if (this.pantalla > 4  ) {
            this.pantalla = 0;
            this.tentaculos.splice(0);
            for (let i = 0; i < 3; i++) {

                this.vidas.push(
                    new Vida(this.app, this.pY[i])
                );
            }

            //resetea variables
            this.enemigos = 0;
            this.cronometro = 0;
            this.dinero = 30;
            this.puntaje = 0;
            this.poderoso = false;

            //para los hilos
            clearInterval(this.cronos);
            clearInterval(this.enemigg);
            clearInterval(this.ojotote);
            this.miCancion.stop();

            
        }
    }

    ponerTorres() {

        if (this.pantalla == 3 &&
            this.app.mouseX > 140 &&
            this.app.mouseX < 1873 &&
            this.app.mouseY > 500 &&
            this.app.mouseY < 932) {
            switch (this.torre) {
                case 0:
                    if (this.dinero >= 15) {
                        this.cultos.push(new Verde(
                            this.app,
                            this.app.mouseX,
                            this.app.mouseY));

                        this.dinero -= 15;

                    }
                    break;

                case 1:
                    if (this.dinero >= 40) {
                        this.cultos.push(new Morado(
                            this.app,
                            this.app.mouseX,
                            this.app.mouseY));

                        this.dinero -= 40;
                    }

                    break;
            }


        }


    }

    addCozinhos() {

        this.enemigos++;

        for (let i = 0; i < this.enemigos; i++) {
            let b = this.app.random(0, 1);


            let a = [0, 1, 2];
            let c = this.app.random(a);


            if (b <= 0.7) {
                this.cozinhos.push(new Amarillo(
                    this.app,
                    this.pY[c])
                );
            }
            if (b > 0.7 && b <= 0.9) {
                this.cozinhos.push(new Caballin(
                    this.app,
                    this.pY[c])
                );
            }
            if (b > 0.9) {
                this.cozinhos.push(new Gordin(
                    this.app,
                    this.pY[c])
                );
            }

        }






    }

    timer() {

        this.cronometro += 1;

        console.log('tentaCULOS' + ' ' + this.tentaculos.length);

        if (this.cronometro % 2 == 0) {
            this.dinero++;
        }

        if (this.cronometro % 3 == 0) {
            this.puntaje++;
        }
    }

    disparo() {



        for (let i = 0; i < this.cultos.length; i++) {


            for (let f = 0; f < this.cozinhos.length; f++) {
                console.log("olaaa");


                // determina que disparo se dispara
                if (this.cultos[i] instanceof Verde) {

                    if (this.cultos[i].disparo(this.cozinhos[f].px, this.cozinhos[f].py)) {



                        this.ojos.push(new Bala(
                            this.app,
                            this.cultos[i].posX,
                            this.cultos[i].posY)
                        );
                    }
                }

                if (this.cultos[i] instanceof Morado) {

                    if (this.cultos[i].disparoT(this.cozinhos[f].px, this.cozinhos[f].py)) {

                        this.tentaculos.push(new Tentaculo(
                            this.app,
                        )
                        );
                        return;
                    }
                }



            }
        }

    }

    pillarMiMouse() {

        //pilla donde esta mi mouse
        this.app.fill(255);
        this.app.textSize(16);
        this.app.textAlign(this.app.CENTER);
        this.app.text("(" + this.app.floor(this.app.mouseX) + ", " + this.app.floor(this.app.mouseY) + ")", this.app.mouseX, this.app.mouseY);
    }

    selector() {

        //grafica del selector de torres
        this.app.fill(90, 60, 60);
        this.app.ellipse(this.spX, this.spY, 190, 190);
        this.app.imageMode(this.app.CENTER);
        this.app.image(
            this.sTorre[this.torre],
            this.spX,
            this.spY,
            190, 190);

        switch (this.torre) {
            case 0:
                this.app.fill(255);
                this.app.textFont(this.cinzel);
                this.app.textSize(30);
                this.app.textAlign(this.app.CENTER);
                this.app.text("COSTO:" + " " + 15, 110, 290);
                break;

            case 1:
                this.app.fill(255);
                this.app.textFont(this.cinzel);
                this.app.textSize(30);
                this.app.textAlign(this.app.CENTER);
                this.app.text("COSTO:" + " " + 40, 110, 290);

                break;
        }


    }

    cambiarSelector() {

        //selecciona la torre a poner
        if (this.app.dist(this.app.mouseX, this.app.mouseY, this.spX, this.spY) < 95) {
            if (this.torre == 0) {
                this.torre = 1;
            } else {
                this.torre = 0;
            }
        }
    }

    insertionSort(list) {

        //sort copiado para poder saber cual es el men que esta mas a la izquierda
        const len = list.length
        for (let i = 1; i < len; i++) {
            if (list[i].px < list[0].px) {
                // move current element to the first position
                list.unshift(list.splice(i, 1)[0])
            }
            else if (list[i].px > list[i - 1].px) {
                // maintain element position
                continue
            }
            else {
                // find where element should go
                for (let j = 1; j < i; j++) {
                    if (list[i].px > list[j - 1].px && list[i].px < list[j].px) {
                        // move element
                        list.splice(j, 0, list.splice(i, 1)[0])
                    }
                }
            }
        }
        return list
    }

    colision() {
        for (let i = 0; i < this.cozinhos.length; i++) {


            //colison ojos
            for (let e = 0; e < this.ojos.length; e++) {


                if (this.app.dist(this.ojos[e].px, this.ojos[e].py, this.cozinhos[i].px, this.cozinhos[i].py) < 15) {


                    this.ojos.splice(e, 1);
                    this.cozinhos[i].recibirDisparo(5);
                }





            }

            //DoT tentaculos
            for (let g = 0; g < this.tentaculos.length; g++) {

                if (this.app.dist(this.tentaculos[g].px, this.tentaculos[g].py, this.cozinhos[i].px, this.cozinhos[i].py) < 15) {



                    this.cozinhos[i].recibirDisparo(0.04);
                }
            }

            //morir final
            if (this.cozinhos[i].px < 0) {

                this.cozinhos.splice(0);
                this.vidas.splice(0);
                this.cultos.splice(0);
                this.pantalla = 5;

                return;
            }


            // colision con vidas
            for (let a = 0; a < this.vidas.length; a++) {
                if (this.app.dist(this.vidas[a].px, this.vidas[a].py, this.cozinhos[i].px, this.cozinhos[i].py) < 15) {


                    this.vidas.splice(a, 1);
                    this.cozinhos.splice(i, 1);
                    return;
                }
            }

            //morir enemigg
            if (this.cozinhos[i].sangre <= 0) {
                this.cozinhos.splice(i, 1);
                this.dinero += 10;
                this.puntaje += 10;
                return;
            }





        }

    }

    indicadores() {

        this.app.fill(255);
        this.app.textFont(this.cinzel);
        this.app.textSize(30);
        this.app.textAlign(this.app.LEFT);
        this.app.text("tiempo:" + " " + this.cronometro, 15, 35);
        this.app.text("dinero:" + " " + this.dinero, 300, 35);
        this.app.text("puntaje:" + " " + this.puntaje, 550, 35);



    }

    poderosoThread() {
        this.poderoso = true;
    }

    poderosoSensible() {
        if (this.poderoso && this.app.dist(this.app.mouseX, this.app.mouseY, 1095, 432) < 140) {

            

            this.cozinhos.splice(0);
            
            this.ojos.splice(0);
            this.dinero -= this.dinero / 2;
            this.poderoso = false;
            return;

        }
    }





}