/*
Iterere over kolonne navnene og antallet af smittede i Italien
*/
let podieX = -40;
let podieY = 139;
let table;
let img;
let count = 5;
let totalCasesCount;
timedelay = 0;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', 'csv', 'header');

  img = createImg('https://github.com/mpsteenstrup/Covid19DatabaseTutorial/blob/master/images/map.jpg?raw=true');
  img.hide();

  //Podiebillede//
  img2 = createImg('https://image.freepik.com/free-vector/blank-winners-podium-with-spotlights-pedestal_275806-988.jpg');
  img2.hide();

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 200, 200);
  fill(200);
  frameRate(10);
  noStroke();
}

function draw() {
  frameRate(20 / log(count));
  background(255, 200, 200);
  image(img, 400 - 360, 400 - 360 * 0.84, 360 * 2, 440);

  //Dato//
  fill(255, 200, 200);
  textSize(40)
  text(table.columns[count], 600, 150);


  //Lokale variable//
  lat = table.getColumn('Lat');
  long = table.getColumn('Long');
  confirmed = table.getColumn(count);

  //Title//
  textSize(60);
  stroke(0);
  strokeWeight(3);
  noFill();
  text("Overview of Covid-19 cases", 370, 70);
  fill(0);
  noStroke();
  textSize(60);
  text("Total cases worldwide:", 300, 700);
  strokeWeight(1);


  //Podium//
  stroke(5);
  fill(255, 200, 200)
  rect(900 + podieX, 250 + podieY, 500, 150)
  stroke(5);
  fill(255, 200, 200)
  rect(900 + podieX, 200 + podieY, 167, 200)
  stroke(5);
  fill(255, 200, 200)
  rect(1067 + podieX, 100 + podieY, 175, 300)
  fill(0);
  stroke(0);
  textSize(40);
  text('1', 1140 + podieX, 150 + podieY)
  text('2', 970 + podieX, 250 + podieY)
  text('3', 1310 + podieX, 300 + podieY)

  //Landenavne//
  max = 0;
  max2 = 0;
  land = '';
  land2 = '';

  maksimum = [0, 0, 0];
  lande = ['', '', ''];

  for (let j = 0; j < 3; j++) {

    for (let i = 0; i < table.getColumnCount(); i++) {
      if (parseInt(table.getColumn(count)[i]) >= maksimum[0]) {
        maksimum[0] = parseInt(table.getColumn(count)[i]);
        lande[0] = table.getColumn(1)[i];
        console.log(table.getColumn(count)[i]);
      }
      if (parseInt(table.getColumn(count)[i]) > maksimum[j] && parseInt(table.getColumn(count)[i]) < maksimum[j - 1]) {
        maksimum[j] = parseInt(table.getColumn(count)[i]);
        lande[j] = table.getColumn(1)[i];
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      text(lande[i], 1095 + podieX, 90 + podieY);
    }
    if (i == 1) {
      text(lande[i], 925 + podieX, 190 + podieY);
    }
    if (i == 2) {
      text(lande[i], 1265 + podieX, 240 + podieY);
    }

  }

  //Smittecirkler//
  for (i = 0; i < table.getRowCount(); i++) {
    fill(180, 50, 50);
    noStroke();
    ellipse(400 + long[i] * 2, 400 - lat[i] * 2, log(confirmed[i]), log(confirmed[i]));
  }

  count += 7;
  if (count > table.getColumnCount() - 1) {
    count = table.getColumnCount() - 1;
  }
  //Total cases//
  fill(0);
  noStroke();
  textSize(60);
      totalCasesCount=0
      for (let i=1; i<275; i++){
      totalCasesCount += parseInt(table.getRow(i).arr[count]);
      }
      text(totalCasesCount, 900, 700);

}

function mousePressed() {
  count = 5;
}
