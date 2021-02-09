var balloon1;
var database;
var position1;

function preload() {
    //preload the images here
    backgroundImg = loadImage("sprites/backgroundimg.png");
    ab = loadImage("sprites/AirBalloon.png");
    }
    

function setup(){
    createCanvas(windowWidth-50,windowHeight-20);
    balloon1 = createSprite(250,250,10,10);
    balloon1.scale=0.5
    balloon1.addImage(ab)
    balloon1.shapeColor = "red";
    database=firebase.database()

database.ref("balloon1/position").on("value",readPos,showError)

}

function draw(){
    background(backgroundImg);
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
        balloon1.scale=balloon1.scale-0.01;
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
function readPos(data){
    position1=data.val()
    console.log(position1)
    balloon1.x=position1.x;
    balloon1.y=position1.y;
    
}


function writePosition(x,y){
    database.ref("balloon1/position").set({
        x:position1.x+x,
        
        y:position1.y+y
    })
}



function showError(){
    console.log("Error")
}
