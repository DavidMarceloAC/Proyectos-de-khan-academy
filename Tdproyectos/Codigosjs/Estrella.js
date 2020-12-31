var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);

var xPos = 50;
var yPos = 50;
var xPos2 = 350;
var yPos2 = 50;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    xPos = +5;
    yPos = -5;
    ellipse(yPos2, yPos2, 10, 10);
    yPos2 -=2;
    xPos2 +=2;
};



  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
