function setup() {
  createCanvas(600,600)
  background(255)
  frameRate(60)
  
  r = 50
  g = 50
  b = 50
  t = 255
  s = 10
  
  startx = 0
  starty = 0
  endx = 0
  endy = 0

  rectMode(CENTER)
}

function draw() {
  
  strokeWeight(s)
  stroke(r,g,b,t)
  
  if (mouseIsPressed){
    line(mouseX,mouseY,pmouseX,pmouseY)
  }
  
  if (keyIsPressed) {
    if (key == '1') r = r - 2
    if (key == '4') r = r + 2
    if (key == '2') g = g - 2
    if (key == '5') g = g + 2
    if (key == '3') b = b - 2
    if (key == '6') b = b + 2
    if (key == '8') t = t + 2
    if (key == '9') t = t - 2
    
    if (key == '=') s = s + 1
    if (key == '+') s = s + 1
    if (key == '-') s = s - 1
    
    if (key == 'Control') background(255)
    if (key == 'Alt') {r = 50
  g = 50
  b = 50
  t = 255
  s = 10}
    
    if (r<0) r = 0
    if (b<0) b = 0
    if (g<0) g = 0
    if (t<0) t = 0
    if (r>255) r = 255
    if (b>255) b = 255
    if (g>255) g = 255
    if (t>255) t = 255
    if (s<2) s = 2
  
    if (key == "q") {
      noStroke()
      fill(r,g,b,t)
      rect(mouseX,mouseY,s,s)
    }
    if (key == "w"){
      line(mouseX,mouseY,pmouseX,pmouseY)
      line(mouseX + s*2,mouseY + s*2,pmouseX + s*2,pmouseY + s*2)
      line(mouseX - s*2,mouseY - s*2,pmouseX -s*2,pmouseY - s*2)
    }

    if (key == "e"){
      startx = mouseX
      starty = mouseY
    }
    if(key == "r"){
      endx = mouseX
      endy = mouseY
      line(startx,starty,endx,endy)
       }
  }  
}