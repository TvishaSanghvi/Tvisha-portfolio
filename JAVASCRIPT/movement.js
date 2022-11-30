function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  
  frameRate(5);
   background("lightblue")
   noStroke()
   fill("white")
   circle((frameCount/2%400)+50,50,40)
   circle((frameCount/2%400)+70,57,30)
   circle((frameCount/2%400)+30,55,30)
   circle((frameCount/3%400)+20,100,40)
   circle((frameCount/3%400)+40,107,30)
   circle((frameCount/3%400),105,30)
   circle((frameCount%400)+20,100,40)
   circle((frameCount%400)+40,107,30)
   circle((frameCount%400),105,30)
   strokeWeight(8)
   stroke(255, frameCount*2%255,0)
   line(175,100,175,400-frameCount%60-150)   
  
  text ( 280-(frameCount%60) , 50, 50 )
  
  // line(175,100,400-frameCount%60-180,400-frameCount%60-280)
  line (175, 100, 280,180)
   noStroke()
   fill("yellow")
   circle(175,100, 65)
}
