let table;
let table2;
let img;
let count=5;
timedelay = 0;

function preload() {
table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');
table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', 'csv','header');
img = createImg('https://hovedstadensglarmester.dk/wp-content/uploads/2018/05/kort.png','');
img.hide();
imgF = createImg('http://www.gratisskole.dk/sdata/minipic/014/01438-300.png','')
imgF.hide();
imgG = createImg('https://www.gratisskole.dk/sdata/minipic/014/01440-600.png','')
imgG.hide();
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,100,200);
  Denmark = table.findRow('Denmark','Country/Region');
  Denmark = table.getRow(96);
  print(Denmark);
  head = table.columns;
  textSize(60);
  fill(200);
  frameRate(10);
}

function draw(){
  frameRate(20/log(count));
  background(0,0,200);
  image(img,600-100,375-300*0.84,500,480);
  image(imgF,0-100,750-360*0.84,360,200);
  image(imgG,0-100,300-360*0.84,360*2,440);

  antalNyeSmittede = Denmark.arr[count];
  for (i=0;i<antalNyeSmittede;i++){
    ellipse(600,400,100,100);
  }
  text(head[count],570,90);

  count +=1;
  if (count>table.getColumnCount()-1){
    count = 5;
  }
}

function mousePressed(){
  count=5;
}
