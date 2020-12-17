class Plinko{
     constructor(x,u,r){
         var options = {
             isStatic: true
         }
         this.body=Bodies.circle(x,y,this.r,options);
         this.color=color(random(0,255), random(0, 255), random(0,255));
         World.add(world,this.body);
     }
     display(){
        var pos = this.body.options;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.r);
    }
    }