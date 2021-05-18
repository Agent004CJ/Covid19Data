/*
Iterere over kolonne navnene og antallet af smittede i Italien
*/

let table;
let count=4;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv','header');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,100,200);
  Italy = table.findRow('Italy','Country/Region');
  Spain = table.findRow('Spain','Coutry/Region');
  head = table.columns;
  textSize(30);
}

function draw(){
  frameRate(200/count);
  background(0,100,200);
  text(Italy.arr[count],500,500);
  text(Spain.arr[count],300,500);
  text(head[count],500,400);

  count +=1;
  if (count>table.getColumnCount()-1){
    count = 4;
  }
}
