var home, gameState = 0, match, score = 0, typeIn;
var wImage, mghoImage;

function preload(){
    wImage = loadImage("water.png");
    mghoImage = loadImage("mag_hydrox.png");

}

function setup(){

    createCanvas(500, 500);

    home = new HomeScreen();
    //console.log("1");
    home.display();

}   

function displayScore(){
    textSize(30);
    text(score + " Coins", 50, 50);
}

function draw(){
   // console.log(frameCount);
   
    //console.log(gameState); 

    //background("white");

    if(gameState === 1){

        home.hide();
        // createElements();
        background("green");
        match.createElements();
       
        gameState = 2;
        //match.dragAndDrop();
       // drawSprites();

    }

    if(gameState === 2){
       
        match.dragAndDrop();
        

    }

    if(score > 0 && gameState === 2){

        gameState = 3;
        
    }
   

    if(gameState === 3){
        background("green");
        
        gameState = 4;
        //console.log(gameState);

        levelTwo();
       
    }

    /*if(gameState === 4){
        //background("black");
        console.log("I am here..")
    }*/

    displayScore(); 
   /* if(touches.length > 0){
        console.log("I am here..");
        touches = [];
    }*/
  


}

function levelTwo(){

    typeIn = new TypeIn();
    console.log("Calling Type in..")
    typeIn.display();
    

}