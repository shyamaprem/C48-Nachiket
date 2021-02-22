class TypeIn{

    constructor(){

        
        this.title = createElement('h4','Choose the name of the element! ');
        this.title.position(100, 100);
        this.water = createSelect();
        this.mgho =  createSelect();

        this.water.position(50, 400);
        this.water.option("water");
        this.water.option("Magnesium Hydroxide");
        this.water.option("Glucose");
        this.water.option("Common Salt");
        this.water.option("Acetic acid");
        
        this.water.selected("Common Salt");

        this.mgho.position(250, 400);
        this.mgho.option("water");
        this.mgho.option("Magnesium Hydroxide");
        this.mgho.option("Glucose");
        this.mgho.option("Common Salt");
        this.mgho.option("Acetic acid");
       
        this.mgho.selected("Glucose");

    }

    display(){


        imageMode(CENTER);
      
        image(wImage, 50, 300, 100, 100);
        image(mghoImage, 250, 300, 100, 100);

       

       

    }

}