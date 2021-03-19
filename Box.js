class Box  {
  constructor(x, y, width, height) {
    var options = {
       
        restitution :0.4,
        friction :0.5,
        //isStatic:true
       
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    
    if (this.body.speed < 3) {
      var pos = this.body.position;
    var angle = this.body.angle;
    push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    } else {
        push();
        World.remove(world, this.body);
        this.visibility = this.visibility - 1;
        //tint(255, this.visibility);
        pop();
    }

  }
}
