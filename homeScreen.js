class HomeScreen{

    constructor(){

        this.button = createButton('Start');
        this.title = createElement('h2','Welcome to ChemXpert! ');
        this.options = createButton('Settings');
        this.themes = createButton('Click to view themes');
        this.coins = createButton('Click to show/hide coins');

    }

    hide(){

        this.title.hide();
        this.button.hide();
        this.options.hide();
        this.themes.hide();
        this.coins.hide();

    }

    display(){

        //console.log("2");

        this.title.position(100, 100);
        this.button.position(250, 250);
        this.options.position(200, 50);

        this.options.mousePressed(()=> {

            //console.log("3");

            this.themes.show();
            this.themes.position(300, 75);

            this.coins.show();
            this.coins.position(300, 100);
        });

        this.button.mousePressed(()=> {

            //console.log("4");

            gameState = 1;
            match = new Match();            

        });

    }

}