class Plane {
    constructor(x,y,width,height) {
      var options = {
        restitution:1,
        friction:2,
        density:10,
        isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x,pos.y)
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };