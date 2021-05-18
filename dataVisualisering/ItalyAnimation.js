let table;
let i = 5;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', 'csv','header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
	background(100);
	text('antal rækker: ' + table.getRowCount(),600,400);
	text('antal søjler: ' + table.getColumnCount(),600,420);

	frameRate(3);
}

function draw(){
	background(100);
	fill(200,0,0);
	d = table.findRow('Italy','Country/Region').arr[i];
	ellipse(600,600,d/10,d/10);
	fill(0);
	text(d,600,460);

	i +=1;
	if (i>72){
		i = 5;
	}
}
