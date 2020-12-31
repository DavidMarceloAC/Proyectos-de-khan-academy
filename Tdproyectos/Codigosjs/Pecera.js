var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(600,500);
background(0, 65, 106);
var dessinpoisson = function (centerX, centerY, bodyLength, bodyHeight, tailWidth, taiHeight){

var bodyColor = color (random (255), random(255), random(255));

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/3;
var tailHeight = bodyHeight/3;
triangle(centerX-bodyLength/3, centerY,
         centerX-bodyLength/3-tailWidth, centerY-tailHeight,
         centerX-bodyLength/3-tailWidth, centerY+tailHeight);
// eye
fill(0, 0, 0);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

    dessinpoisson (500 , 400 , 50 , 80 , 30 , 40 );
    dessinpoisson (100 , 100 , 80 , 100 , 60 , 60 );
    dessinpoisson (240 , 60 , 120 , 80 , 30 , 40 );
    dessinpoisson (300 , 270 , 100 , 180 , 10 , 40 );

mouseClicked = function () {
    dessinpoisson (mouseX, mouseY, mouseY, 30, 30);
};




  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
