class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        push();
        if(this.chain.bodyA) {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}

attach(body){
    push();
    this.chain.bodyA = body;
    pop();
}

    fly() {
        this.chain.bodyA = null;
    }
    
}