/*
Iterere over kolonne navnene og antallet af smittede i Italien
*/

let table;
let count=5;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,100,200);
  Italy = table.findRow('Italy','Country/Region');
  head = table.columns;
  textSize(60);
  fill(200);
  frameRate(10);
}

function draw(){
  background(0,100,200);

  antalNyeSmittede = Italy.arr[count];//-Italy.arr[count-1];
  for (i=0;i<antalNyeSmittede;i++){
    ellipse(random(windowWidth),random(windowHeight),4,4);
  }
  text(head[count],500,400);

  count +=1;
  if (count>table.getColumnCount()-1){
    count = 5;
  }
}
