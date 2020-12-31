var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(186, 145, 20); // wooden table
fill(255, 255, 255);
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300);
fill(247, 247, 247);

ellipse(126, 124, 80, 64);
ellipse(193, 86, 80, 64);
ellipse(193, 139, 80, 64);

fill(206, 235, 40);
triangle(215, 177, 306, 110, 328, 213);

fill(156, 106, 5);
rect(103, 201, 160, 93);
  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
