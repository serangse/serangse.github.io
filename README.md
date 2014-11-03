<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <script src="p5.min.js"></script>
  <script>
    var setup = function() {
        var w = windowWidth;
        var h = windowHeight;
        createCanvas(w, h);
    };

    var draw = function() {
    };

    var drawCircle = function(x, y) {
        var l = random()*100;
        stroke(0,0,0,0);
        var gradientY = y / windowHeight;
        var gradientX = x / windowWidth;
        //fill((1-gradientX) * 200 + 55 * random(), random() * 100, gradientX * 100 + 90 + 65 * random(), gradientY * 50+5);
        fill(random()*500+200, random()*200+50, random()*200+30);
        ellipse(x, y, l, l);
    };

//    var mousePressed = function() {
//        drawCircle(mouseX, mouseY);
//    };
   
        
//    var touchMoved = function(e) {
//        for (var i = 0; i < e.touches.length; i++) {
//            var x = e.touches[i].clientX;
 //           var y = e.touches[i].clientY;
  //          drawCircle(x, y);
 //       }
  //      e.preventDefault();
//    };
        
        
        
  var mousePressed = function(e) {
drawCircle(e.x, e.y);
e.preventDefault();
};      
          
</script>
  <style>
    
      html, body, canvas {
        padding: 0;
        margin: 0;
        overflow: hidden;
      }
    
    </style>
</head>
<body>
<canvas id="defaultCanvas" class="  p5_hidden" width="1920" height="971" style="width:1920px !important; height:971px !important;"></canvas>
</body>
</html>
