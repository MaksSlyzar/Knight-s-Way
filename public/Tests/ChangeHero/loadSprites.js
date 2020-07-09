class Sprites{
    All = {

    }
    SpriteNames = {
        Hero: {url:"images/hero.png"},
        Swords: {url:"images/swords.png"}
    }
    constructor (){
        for (var SpriteName in this.SpriteNames){
            this.All[SpriteName] = new Image();
            this.All[SpriteName].src = this.SpriteNames[SpriteName].url;
        }
        console.log("Load sprites succesfully");
    }
}