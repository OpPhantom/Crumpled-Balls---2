class Ball{
    constructor(x,y,radius){
        var option = {
            restitution : 0.3,
            density : 1.22,
            friction : 0.5
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        World.add(world,this.body);
        this.image = loadImage("paper.png");
        
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop();
      }
}