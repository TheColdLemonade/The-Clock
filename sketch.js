function setup() {
  createCanvas(400, 400);
  textAlign(CENTER)
  noStroke()
  isAnalog = true
  darkMode = false
}

function draw() {
  if (darkMode) background(0)
  else background(255)
  if (isAnalog) {
   analog()
  }
  else {
    digital()
  }
  
  textSize(20)
  if (darkMode) fill(255,255,255, 150)
  else fill(0,0,0)
  if (7<hour()){
    if (hour() < 18) text("Day", width/2, height - 50)
    else text("Night", width/2, height - 50) }
  else text("Night", width/2, height - 50)
}
function analog() {
  if (darkMode) fill(235,94,94,150)
  else fill(235, 94, 94)
  rectRotate(width/2,height/2,100,2, -90 + second()*6)
  
  if (darkMode) fill(94, 186, 235, 150)
  else fill(94, 186, 235)
  rectRotate(width/2,height/2,100,5, -90 + minute()*6 + second() * 0.1)
  
  if (darkMode) fill(88, 237, 95, 150)
  else fill(88, 237, 95)

  rectRotate(width/2,height/2,60,8, -90 + hour()*30  + minute()*0.5 +  + second()*0.5/60)
  
  fill(235, 227, 73)
  ellipse(width/2, height/2, 15,15)
}

function rectRotate(x,y,w,h, d) {
  
  push()
  translate(x,y)
  rotate(radians(d))
  rect(0, 0 - h/2,w,h)
  pop()
}

function digital() {
  if (darkMode) fill(255,255,255,200)
  else fill(0,0,0)
  textSize(40)
  text(hour(), width/2 - 70, height/2)
  text(':', width/2 - 35, height/2)
  text(minute(), width/2, height/2)
  text(':', width/2 + 35, height/2)
  text(second(), width/2 + 70, height/2)
  
}

function mousePressed() {
  isAnalog = !isAnalog
}

function keyPressed() {
  if (key == 'q'){
    darkMode = !darkMode
  }
}
