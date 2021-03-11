class Sand{
    constructor(x, y){
        var options = {
            'restitution' : 1.3,
            'friction' : 5,
            'density' : 1
        }

        this.body = Bodies.circle(x, y, width, height, options);
        this.width = 5;
        this.height = 5;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        fill("yellow");
        pop();
    }
}