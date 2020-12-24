class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("polygon.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display()
      Imagemode(CENTER)
      image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    }
  }
  