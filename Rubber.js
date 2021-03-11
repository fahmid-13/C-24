class Rubber{
    constructor(x, y){
        var options = {
            'restitution' : 0.3,
            'friction' : 5,
            'density' : 1
        }

        this.body = Bodies.circle(x, y, width, height, options);
        this.width = 20;
        this.height = 20;
        Matter.Bodies.circle(x, y, 15, options, maxSides);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("orange");
        rect(0, 0, this.width, this.height);
        pop();
    }
}