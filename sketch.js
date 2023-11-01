var hipnoBall, database;
var position;

function setup() {
    database = firebase.database();
    console.log(database);
    createCanvas(900, 900);
    hipnoBall = createSprite(450, 450, 10, 10);
    hipnoBall.shapeColor = "White";
    var hipnoBallP = database.ref('ball/position');
    hipnoBallP.on("value", readPosition(), showError());
}

function draw() {
    background("black");
    if(position!==undefined){
        if(keyDown(LEFT_ARROW)){
            writePosition(-1, 0)
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1, 0)
        }

        else if(keyDown(UP_ARROW)){
            writePosition(0, -1)
        }
        else if(keyDown(keyDown_ARROW)){
            writePosition(0, 1)
        }
        drawSprites();
    }
}

function writePosition(x, y){
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y,
    })
}

function readPosition(data){
    position = data.val()
    console.log(position.x)
    hipnoBall.x = position.x
    hipnoBall.y = position.y
}

function showError(){
    console.log("Erro do miserávi")
    console.log("Tomi")
}