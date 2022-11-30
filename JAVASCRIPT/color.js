function setup() {
  createCanvas(400, 400);
   
}

function draw() {
  background("black")
  
  if (mouseX<200 && mouseY<200)
  {
    fill("red")
  }
  else if (mouseX<200 && mouseY>200)
  {
    fill("blue")
  }
  else if (mouseX>200 && mouseY>200)
  {
    fill("green")
  }
  else
  {
    fill("yellow")
  }
  rect(mouseX, mouseY, 100,100)
  }