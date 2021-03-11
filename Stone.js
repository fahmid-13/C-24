class Stone{
    constructor(x, y){
        var options = {
            'restitution' : 0.6,
            'friction' : 1,
            'density' : 5
        }

        this.body = Bodies.square(x, y, width, height, options);
        this.width = 20;
        this.height = 20;

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
        fill("black");
        pop();
    }
}