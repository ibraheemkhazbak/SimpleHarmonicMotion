var s,displacement,time=0;
function setup(){
    createCanvas(1500,1000);
frameRate(30);
s=new Spring(0,0,50,500,30);
}
function draw(){
background(0);
translate(0,height/2);
stroke(255);
s.show();
s.update();


}
class Spring{
    constructor(x,y,radius,zero,winds){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.detail=1000;
        this.zero=zero;
        this.displacement=0;
        this.time=0;
        this.winds=winds;
    }
    show(){
        var pointOnCircle ={
x:0,
y:0
        };
        stroke(255,255,0);
        line(this.zero, 0, this.zero, height);
        
        stroke(255,255,255);
        beginShape();
        noFill();
        var x=0;
        for (let i = 0; i < PI*2*this.winds;i+=PI*2*this.winds/this.detail) {
            pointOnCircle.x=x+this.x+this.radius*cos(i)-this.radius;
            pointOnCircle.y=this.y+this.radius*sin(i);
         vertex(pointOnCircle.x,pointOnCircle.y);   
         x+=((this.displacement+this.zero)/this.detail);

        }
        endShape(CLOSE);
    }
    update(){
        this.time+=0.5;
        this.displacement=20*cos(this.time);
    }
}