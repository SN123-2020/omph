var rain = [], drop, backgroundImage,backgroundImage1;
var om,omImg;
var omcount=100;
var omvisibility=255;
var budhha,budhhaImg;

function preload(){
    getbackgroundImage()
    backgroundImage1=loadImage("nightbangkok1logo.jpg")
    omImg = loadImage("omph1.png")
    budhhaImg = loadImage("budhha.jpg")
  }

function setup(){
    
    createCanvas(windowWidth, windowHeight);
    
    
om = createSprite(windowWidth/2, windowHeight/2,100,100);
      om.addImage(omImg);
      console.log("hello")
    //making 400 drops and putting into rain
    for (var i = 0; i<100; i++){
        drop = new Drop(random(0,width),random(0,height));
        rain.push(drop)
    }
}

function draw(){
    if(backgroundImage){
        background(backgroundImage);
      }else{
          background(backgroundImage1);
      }
    
      budhha = createSprite(windowWidth/2, windowHeight/2,500,2000)
    budhha.addImage(budhhaImg);
    budhha.scale=9;

    for (var i = 0; i < rain.length; i++) {
        rain[i].display();
        rain[i].scale=5;
        rain[i].fall();
        om.width +=0.06;
        om.height+=0.03;
        omcount+=0.05;
        
        
    }

    if(omcount>100 ){

      push();
      omvisibility= omvisibility -0.2;
      tint(255,omvisibility);

      image(omImg,windowWidth/2, windowHeight/2,om.width,om.height)


      pop();


    } else {

      image(omImg,windowWidth/2, windowHeight/2,om.width,om.height)

    }
        console.log("count  "+Math.round(omcount))

      
  
      if(omcount>700){

        omcount=0
        om.width =0;
        om.height=0;
        omvisibility=255
         
      }
    
}

async function getbackgroundImage(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responseJSON=await response.json()

    var dayTime=responseJSON.datetime

    var hour=dayTime.slice(11,13)
    console.log(hour)

    if (hour>=6 && hour <=18) {
      backgroundImage=loadImage("nightbangkok1logo.jpg")
    } else {
      backgroundImage=loadImage("nightbangkok1logo.jpg")
    }
  
  }
