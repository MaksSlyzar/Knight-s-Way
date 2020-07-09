sprites = new Sprites();

var ctx = canvas.getContext("2d");
var now_sword = 1;

function Update(){
    Draw();
    requestAnimationFrame(Update);
}

function ChangeSword(value){
    now_sword += value;
}

function Draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sprites.All.Hero, 0, 0)
    ctx.drawImage(sprites.All.Swords, now_sword * 64, 0, 64, 75, 0, 0, 64, 75);
}

Update();