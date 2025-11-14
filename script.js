function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
  ctx.fillStyle = "#00FF00";

  ctx.fillRect(0, 0, 10, 10);

  ctx.fillRect(20, 20, 10, 10);
}
function buttonFunction1() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "#00eeffff";

  
  for (let i = 0; i <= 10; i++) {
    ctx.fillRect(i * 20, i * 20, 10, 10);
  }

  for (let i = 0; i <= 9; i++) {
    ctx.fillRect(180 - i * 20, i * 20, 10, 10);
  }
}


