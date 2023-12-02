class Drop{
    constructor(x,y){
        this.x = x;
        this.y = y;
        // this.radiusX = random(50,80);
        // this.radiusY = random(50,80);

        this.radiusX = random(30,50);
        this.radiusY = random(30,50);
        this.image = loadImage("om.png")

    }

    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.radiusX,this.radiusY )
        
        //greenish yellow colors
        //fill(random(0, 255),random(100,255),0);
        //ellipse(this.x,this.y,this.radiusX,this.radiusY);
    }

    fall(){
        this.y = this.y+random(2, 10)
        if (this.y > height) {
            this.y = 0;
        }
    }
}