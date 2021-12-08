class Polygon{
    constructor(x,y,r) {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("Images/polygon.png");
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,60);
        pop();
    }
}