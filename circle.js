

 
   var mWidth = document.querySelector('main').offsetWidth,
   mHeight = document.querySelector('main').offsetHeight,

   //Create the canvas
   canvas = document.createElement("canvas");
   canvas.height = mHeight;
   canvas.width = mWidth;
   document.querySelector('main').appendChild(canvas);


   //Create the context
   var ctx = canvas.getContext("2d");


   //Create a circle
ctx.beginPath();
ctx.arc(230, 400, 83, 0, 2 * Math.PI);
ctx.stroke("rbg(200,0,0");
ctx.fillStyle("rgba(0, 0, 200, 0.5")
   
 canvas.addEventListener('mousemove', function(evt){
     var rect = canvas.getBoundingClientRect();
     var x = evt.clientX - rect.left;
     var y = evt.clientY - rect.top;

     //write the cords back to the UI
     document.getElementById('trackX').innerHTML = 'X: ' + x;
     document.getElementById('trackY').innerHTML = 'Y: ' + y;
 });