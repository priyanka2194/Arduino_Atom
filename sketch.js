var table;

function preload(){
  table = loadTable("data/data.csv");
 //img = loadImage("images/2657b678c2393d7.jpg");
}

function setup() {

  var canvas = createCanvas(1000, 500);
  canvas.parent("header");
  console.log(table.getRowCount());
  console.log(table.getColumnCount());
}

function draw(){
  //background('black');
  //image(img, 0,0,900,550);
  var dataTipXY = drawLine("#E56C94","#01FDBC","#790DFA");
  //dataTip(dataTipXY[0], dataTipXY[1], dataTip[2]);
}

function keyPressed(){ // code for seperating data and highlighting only one set of values on click

  clear();
   if(keyCode === 88){ // click key 'x'
     drawLine("#E56C94","white","white");
   }

   else if(keyCode === 89){ //  click key 'y'
     drawLine("white","#01FDBC","white");

   }
   else if(keyCode === 90){ //  click key 'z'

     drawLine("white","white","#790DFA");
   }
else{ // click any other key
  drawLine("#E56C94","#01FDBC","#790DFA");
}
}

function drawLine(x_color, y_color, z_color){

strokeWeight(2);
  //noStroke();
  var lastXax = 100;// change to change to start point
  var lastYax = 200;

  var lastXay = 100;
  var lastYay = 200;

  var lastXaz = 100;
  var lastYaz = 200;

  var markerSize = 5;
  var startPoint =  1500;
  var endPoint = table.getRowCount()-300;

  for( i=0; i<table.getRowCount(); i++){
    var row = table.getRow(i);
    var ax = row.get(0);// accelerometer x reading
    var ay = row.get(1);// accelerometer y reading
    var az = row.get(2);// accelerometer z reading
    var timeStamp = i * 200;
  //x-accelerometer
    var y = map(ax, -25, 5, 0, height/2);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 100, width);
    fill(x_color);
    stroke(x_color);
    ellipse(x,y,markerSize,markerSize);
    line(lastXax, lastYax, x,y);
    lastXax = x;
    lastYax = y;
    //y-accelerometer
    var y = map(ay, -25, 5, 0, height/2);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 100, width);
    fill(y_color);
    stroke(y_color);
    rect(x,y,3,3);
    line(lastXay, lastYay, x,y);
    lastXay = x;
    lastYay = y;
    //z-accelerometer
    var y = map(az, -25, 5, 0, height/2);
    var x = map(timeStamp, 0, 200*table.getRowCount(), 100, width);
    fill(z_color);
    stroke(z_color)
    ellipse(x,y,3,3);
    line(lastXaz, lastYaz, x,y);
    lastXaz = x;
    lastYaz = y;
    }

return [dataTipX, dataTipY]
}
