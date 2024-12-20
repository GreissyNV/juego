        var canvas = document.getElementById("myCanvas");
        /**
         * @type {CanvasRenderingContext2D};
        */
        var ctx = canvas.getContext("2d");
        var ballRadius = 10;
        var x = canvas.width/2;
        var y = canvas.height-30;
        var dx = 2;
        var dy = -2;
        var paddleHeight = 10;
        var paddleWidth = 75;
        var paddleX = (canvas.width - paddleWidth) / 2;
        var rightPressed = false;
        var leftPressed = false;
        var brickRowCount = 3;
        var brickColumnCount = 5;
        var brickWidth = 75;
        var brickHeight = 20;
        var brickPadding = 10;
        var brickOffsetTop = 30;
        var brickOffsetLeft = 30;

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        var bricks = [];
        for (c = 0; c < brickColumnCount; c++) {
            bricks[c] = [];
            for (r = 0; r < brickRowCount; r++) {
              bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }

        

        function keyDownHandler(e) {
            if(e.keyCode == 39) {
                rightPressed = true;
            } else if(e.keyCode == 37) {
                leftPressed = true;
             }
        }

        function keyUpHandler(e) {
            if(e.keyCode == 39) {
                rightPressed = false;
            } else if(e.keyCode == 37) {
                leftPressed = false;
             }
            }



            function drawBricks() {
                for (c = 0; c < brickColumnCount; c++) {
                  for (r = 0; r < brickRowCount; r++) {
                    if (bricks[c][r].status == 1) {
                      var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                      var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                      bricks[c][r].x = brickX;
                      bricks[c][r].y = brickY;
                      ctx.beginPath();
                      ctx.rect(brickX, brickY, brickWidth, brickHeight);
                      ctx.fillStyle = "#0095DD";
                      ctx.fill();
                      ctx.closePath();
                    }
                  }
                }
              }

              

              function collisionDetection() {
                for (c = 0; c < brickColumnCount; c++) {
                  for (r = 0; r < brickRowCount; r++) {
                    var b = bricks[c][r];
                    if (b.status == 1) {
                      if (
                        x > b.x &&
                        x < b.x + brickWidth &&
                        y > b.y &&
                        y < b.y + brickHeight
                      ) {
                        dy = -dy;
                        b.status = 0;
                      }
                    }
                  }
                }
              }
              


        function drawBall() {
                ctx.beginPath();
                ctx.arc(x, y, ballRadius, 0, Math.PI*2);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
                }
        
        function drawPaddle() {
                ctx.beginPath();
                ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
                }

        function drawBricks() {
                    for (c = 0; c < brickColumnCount; c++) {
                      for (r = 0; r < brickRowCount; r++) {
                        var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                        var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fillStyle = "#0095DD";
                        ctx.fill();
                        ctx.closePath();
                      }
                    }
                  }
                  

        function draw() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    drawBricks();
                    drawBall();
                    drawPaddle();

                    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
                        dx = -dx;
                    }
                    if(y + dy < ballRadius) {
                        dy = -dy;
                     } 
                     else if(y + dy > canvas.height - ballRadius) {
                        if(x > paddleX && x < paddleX + paddleWidth) {
                            dy = -dy;
                        } 
                        else {
                          alert("GAME OVER");
                          document.location.reload();
                        }   
                     }
                    if(rightPressed && paddleX < canvas.width - paddleWidth) {
                        paddleX += 7;
                    } 
                    else if (leftPressed && paddleX > 0) {
                        paddleX -= 7;
                    }

                    x += dx;
                    y += dy;
                 }
            
                setInterval(draw, 10);
                            


        ctx.beginPath();
        ctx.rect(20, 40, 50, 50);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(160, 10, 100, 40);
        ctx.strokeStyle = "rgba(0, 0, 225, 0.5)";
        ctx.stroke();

        ctx.closePath();

        


        

      
    
       

       
       