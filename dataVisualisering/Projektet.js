/*
Iterere over kolonne navnene og antallet af smittede i Italien
*/

let table;
let img;
let count=5;
timedelay = 0;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,200,200);
  textSize(40);
  fill(0);
  frameRate(10);
  noStroke();
}

function draw(){
  frameRate(4);
  background(255,200,200);
  stroke(5);
  fill(255,200,200)
  rect(900,250,500,150)
  stroke(5);
  fill(255,200,200)
  rect(900,200,167,200)
  stroke(5);
  fill(255,200,200)
  rect(1067,100,175,300)
  fill(0);
  stroke(0);
  text('1',1140,150)
  text('2',970,250)
  text('3',1310,300)


  max = 0;
  max2 = 0;
  land = '';
  land2 = '';

  maksimum = [0,0,0];
  lande = ['','',''];

  for (let j = 0; j<3; j++){

  for (let i = 0; i<table.getColumnCount(); i++){
    if (parseInt(table.getColumn(count)[i])>=maksimum[0]){
      maksimum[0] = parseInt(table.getColumn(count)[i]);
      lande[0] = table.getColumn(1)[i];
      console.log(table.getColumn(count)[i]);
    }
  if (parseInt(table.getColumn(count)[i])>maksimum[j] && parseInt(table.getColumn(count)[i])<maksimum[j-1]){
      maksimum[j] = parseInt(table.getColumn(count)[i]);
      lande[j] = table.getColumn(1)[i];
    }
}

}

  for (let i = 0; i <3; i++){
    if(i==1){
      text(lande[i],1100,90);
    }
    if(i==2){
      text(lande[i],930,190);
    }
    if(i==1){
      text(lande[i],1270,240);
    }

  }

/*  confirmed = table.getColumn(count);*/


  count += 7;
  if (count>table.getColumnCount()-1){
    count = table.getColumnCount()-1;
  }
}
function mousePressed(){
  count=5;
}
