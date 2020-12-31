var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 0) {
    fill(240, 237, 237);
    text("Aun no", 176, 200);
    text("IMPLEMENTED", 159, 229);
}else if ( answer === 2 ){
    fill(204, 255, 0);
    text("Sigue asi", 159, 229);
}else if ( answer === 3 ){
    fill(209, 38, 81);
    text("Mas suerte la proxima", 140, 229);
}else if ( answer === 4 ){
    fill(79, 80, 105);
    text("No lo creo", 159, 229);
}else {
    fill(212, 255, 246);
    text("Eres un ganador",158,219);}




  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
