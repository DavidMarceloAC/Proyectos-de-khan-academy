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
    xPos +=2;
    yPos -=3;
    fill(255,255,255);
    ellipse(xsun, ysun, 50, 50);
    xsun -= 1;
    ysun += 0;
};


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
