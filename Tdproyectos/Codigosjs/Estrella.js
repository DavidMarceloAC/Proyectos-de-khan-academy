var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var xPos = 100;
var yPos = 350;
var xsun = 350;
var ysun = 50;
draw = function() {
    background(0,0,0);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    xPos +=3;
    yPos -=2;
    ellipse(xsun, ysun, 50, 50);
    xsun -= 3;
    ysun += 2;
};


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
