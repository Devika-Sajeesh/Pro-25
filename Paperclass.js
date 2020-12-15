class Paper{
    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitutions:0.3,
            friction:0.5,
            density:1.2
        }

        this.x=x;
		this.y=y;
        this.r=100;
       // this.width= width/2;
        //this.height = 670;
        this.body= Bodies.circle(this.x,70, this.r/2, options)
        this.image = loadImage("paper.png");
		World.add(world, this.body);

    }
    display(){
        var paperpos = this.body.position;
       // paperpos = this.position;
        push();
        translate(paperpos.x,paperpos.y);
        image(this.image, 0, -95, this.r);
        pop();
    }
}