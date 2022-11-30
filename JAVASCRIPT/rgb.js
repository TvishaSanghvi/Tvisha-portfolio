let slider1, slider2, sliderR, sliderG, sliderB, sliderRA, sliderSW,rdshape;
function setup() {
  createCanvas(400, 400);
  
  slider1 = createSlider(0, 8, 1)
  slider1.position(130, 160)
  
  slider2 = createSlider(0, 8, 1)
  slider2.position(130, 190)
  
  colorMode(RGB);
  sliderR = createSlider(0,255,0);
  sliderR.position(130,10);
  
  sliderG = createSlider(0,255,0);
  sliderG.position(130,40);
  
  sliderB = createSlider(0,255,0);
  sliderB.position(130,70);
  
  sliderRA = createSlider(20,70,40);
  sliderRA.position(130,100);
  
  sliderSW = createSlider(1,20,2);
  sliderSW.position(130,130);
  
  rdshape = createRadio()
  rdshape.option("Rect")
  rdshape.option("RoundRect")
  rdshape.option("Circle")
  rdshape.position(100,220)
}

function draw() {
  background(220);
  let val1= slider1.value(), val2= slider2.value()
  let val6 = sliderR.value(), val7 = sliderG.value(), val3 = sliderB.value(), val4 = sliderRA.value(), val5 = sliderSW.value()/4;
  
for(j=0; j<val2; j++)  
  {
    for(i=0; i<val1; i++)
    {
        if(rdshape.value()=="Rect")
      {
        rect( (i*50)+5, (j*50)+5, val4, val4)
      }

    if(rdshape.value()=="RoundRect")
      {
        rect((i*50)+5, (j*50)+5, val4, val4 ,12)
      }

    if(rdshape.value()=="Circle")
      {
        circle((i*50)+5, (j*50)+5, val4)
      }
      
    }
  }
  
  fill("black")
  text("R",108,24)
  text("G",108,54)
  text("B",108,84)
  text("RA",108,113)
  text("SW",108,142)
  text("H",108,172)
  text("V",108,202)
  fill(val6, val7, val3);
  strokeWeight(val5);
}