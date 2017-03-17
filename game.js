
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

Img = new Image ();
ImgFrog.src = "images/mikethefrog.png";
ImgFrog.addEventListener("Load", init, false);

var requestAnimFrame
			window.requestAnimFrame
			window.webkitRequestAnimationFrame
			window.mozRequestAnimationFrame
			window.oRequestAnimationFrame
			window.msRequestAnimationFrame
			function (callback) {
				window.setTimeout(callback, 1000,60);
			}
function init() {
	RequestAnimFrame(update);

}
function update(){
	context.DrawImage(ImgFrog,  65,  65,  100,  77);
	context.fillRect(  10,  10,  40,  380,  "#000000");
	context.fillRect(  10,  10,  380,  40, "#000000");
	context.fillRect(  10,  350,  380,  40, "#000000");
	context.fillRect(  350,  10,  40,  380,  "#000000");
	context.fillRect(  180,  10,  40, 380,  "#000000");
}