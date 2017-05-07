var rain = 0;
var temp = 0;
var wind = 0;
var insolation = 0;
var fine_dust = 200;

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('sketch-holder');
  render();
}

function updateWeather(region) {
  region = region || '중구';
  var url = 'http://openapi.seoul.go.kr:8088/436d76704b73657239374c554c6f6a/json/RealtimeWeatherStation/1/5/' + encodeURIComponent(region);
  loadJSON(url, weatherLoaded);
}

function preload() {
  updateWeather();
  
  umbrellas = loadImages("umbrella", 2);
  sunglasses = loadImages("sunglass", 2);
  scarfs = loadImages("scarf", 2);
  mufflers = loadImages("muffler", 2);
  beanies = loadImages("beanie", 2);
  
  sandals = loadImages("sandal", 2);
  sneakerses = loadImages("sneakers", 2);
  winter_shoeses = loadImages("winter_shoes", 2);
  bootses = loadImages("boots", 2);
  
  sweaters = loadImages("sweater", 3);
  sleevelesses = loadImages("sleeveless", 3);
  shortpantses = loadImages("shortpants", 3);
  short_sleeves = loadImages("short_sleeve", 3);
  long_sleeves = loadImages("long_sleeve", 3);
  sevenboo_pantses = loadImages("7boo_pants", 3);
  slackses = loadImages("slacks", 3);
  jackets = loadImages("jacket", 3);
  long_pantses = loadImages("long_pants", 3);
  coats = loadImages("coat", 3);
  winter_coats = loadImages("winter_coat", 3);
  paddings = loadImages("padding", 3);

  mask = loadImage("data/mask.svg");
  
  winterbg = loadImage("data/winterbg.svg");
  springbg = loadImage("data/springbg.svg");
  fallbg = loadImage("data/fallbg.svg");
  summerbg = loadImage("data/summerbg.svg");
  
  locaImg = loadImage("data/loca.svg");
  degreeImg = loadImage("data/degree.svg");
  rainImg = loadImage("data/rain.svg");
  windImg = loadImage("data/wind.svg");
  
}



function loadImages(fileName, len) {
  var images = [];
  for(var i = 0; i < len; i++) {
    images.push(loadImage("data/" + fileName + "_" + (i + 1) + ".svg"));
  }
  return images;
}

function weatherLoaded(data) {
  var weather = data['RealtimeWeatherStation']['row'][0]; // RealtimeWeatherStation안에 row안에 첫번째꺼부르기
  locaName = locaName || weather.STN_NM;
  temp = weather.SAWS_TA_AVG;
  wind = weather.SAWS_WS_AVG;
  rain = weather.SAWS_RN_SUM;
  insolation = weather.SAWS_SOLAR;
  render();
}
  

/*function preload() {
  
}*/

function draw(){
  
}

function render() {
  background(255);

  textFont("Noto Sans");
    
 
  
  ////////////////////////draw dress////////////////////////////////
//var items;
//var index;
//var item;

if ( 5 < rain){
    index = Math.floor(Math.random() * 2);
    item = umbrellas[index];
    
    image(item, 0, 0);
  }
  
  
  
  if (6 < insolation){
    //text("선글라스", 50, 250);
    index = Math.floor(Math.random() * 2);
    item = sunglasses[index];
    
    image(item, 0, 0);
    
  }

  if(25 <= temp) {
    //text("오늘은", 50, 50);
    image(summerbg, 0, 0);
    index = Math.floor(Math.random() * 3);
    item = sleevelesses[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 3);
    item = shortpantses[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 2);
    item = sandals[index];
    
    image(item, 0, 0);
    
  } else if(20 <= temp && temp <= 24) {
    //text("반팔, 반바지", 50, 50);
    image(summerbg, 0, 0);
    index = Math.floor(Math.random() * 3);
    item = short_sleeves[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 3);
    item = shortpantses[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 2);
    item = sandals[index];
    
    image(item, 0, 0);
    
  } else if (17 <= temp && temp <= 19) {
    //text("긴팔, 7부바지", 50, 50);
    image(springbg, 0, 0);
    index = Math.floor(Math.random() * 3);
    item = long_sleeves[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 3);
    item = sevenboo_pantses[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 2);
    item = sneakerses[index];
    
    image(item, 0, 0);
    
      
  } else if(14 <= temp && temp <= 16) {
    image(springbg, 0, 0);
    //text("니트, 슬랙스", 50, 50);
    index = Math.floor(Math.random() * 3);
    item = sweaters[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 3);
    item = slackses[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 2);
    item = sneakerses[index];
    
    image(item, 0, 0);
    
    
    if(4 <= wind && wind <= 6) {
       //text("손수건", 250, 50);
       
        index = Math.floor(Math.random() * 2);
        item = scarfs[index];
    
        image(item, 0, 0);
    }
  } else if(10 <= temp && temp <= 13) {
    //text("자켓, 긴바지", 50, 50);
    image(fallbg, 0, 0);
    index = Math.floor(Math.random() * 3);
    item = jackets[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 3);
    item = long_pantses[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 2);
    item = winter_shoeses[index];
    
    image(item, 0, 0);
    
    
    
       if(4 <= wind && wind <= 6) {
       //text("손수건", 250, 50);
       
        index = Math.floor(Math.random() * 2);
        item = scarfs[index];
    
        image(item, 0, 0);
    }
  } else if(5 <= temp && temp <= 9) {
      //text("트렌치코트, 긴바지", 50, 50);
    image(winterbg, 0, 0);
    index = Math.floor(Math.random() * 3);
    item = coats[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 3);
    item = long_pantses[index];
    
    image(item, 0, 0);
  
    index = Math.floor(Math.random() * 2);
    item = winter_shoeses[index];
  
    image(item, 0, 0);
  
        if(4 <= wind && wind <= 6) {
        //text("머플러", 250, 50);
        index = Math.floor(Math.random() * 2);
        item = mufflers[index];
    
        image(item, 0, 0);
    }
  } else if(0 <= temp && temp <= 4) {
      //text("겨울코트, 긴바지", 50, 50);
    image(winterbg, 0, 0); 
    index = Math.floor(Math.random() * 3);
    item = winter_coats[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 3);
    item = long_pantses[index];
    
    image(item, 0, 0);
    
    index = Math.floor(Math.random() * 2);
    item = bootses[index];
    
    image(item, 0, 0);

    if(4 <= wind) {
     //text("머플러", 250, 50);
     index = Math.floor(Math.random() * 2);
     item = mufflers[index];
    
     image(item, 0, 0);
    }
    if(7 <= wind) {
     //text("비니", 250, 50);
     index = Math.floor(Math.random() * 2);
     item = beanies[index];
    
     image(item, 0, 0);
    }
  } else {
      //text("패딩, 긴바지,목도리", 50, 50);
      
          image(winterbg, 0, 0);
      
          index = Math.floor(Math.random() * 3)  
          item = paddings[index];
          
          image(item, 0, 0);
          
          index = Math.floor(Math.random() * 3);
          item = long_pantses[index];
          
          image(item, 0, 0);
          
          index = Math.floor(Math.random() * 2);
                   item = mufflers[index];
            
                   image(item, 0, 0);
          
          index = Math.floor(Math.random() * 2);
                  item = bootses[index];
                  
                  image(item, 0, 0);


             if(3 <= wind) {
         //text("비니", 250, 50);
         index = Math.floor(Math.random() * 2);
         item = beanies[index];
  
         image(item, 0, 0);
         }
          
 /*if (100 < fine_dust){
    //text("마스크", 50, 350);
    image(mask, 0, 0);
  }*/         
  }
          ////////////////////////text////////////////////////////////
  
  var tempStr = Math.floor(temp * 100) / 100 + "℃";
  var windStr = Math.floor(wind * 100) / 100 + "m/s";
  var rainStr = rain + "mm";
  
  image(locaImg, 30, 110-18 );
  image(degreeImg, 30, 170-24);
  image(windImg, 30, 220-18);
  image(rainImg, 30, 260-18)
  
  
  textStyle(NORMAL);
  textSize(15);
  fill(100);
  text(locaName,82,110);
  
  
  textStyle(BOLD);
  textSize(30);
  fill(100);
  text(tempStr, 78, 170);
  
  
  textStyle(NORMAL);
  textSize(15);
  text(windStr, 82, 220);
 
  text(rainStr, 82, 260);
  
  
}
