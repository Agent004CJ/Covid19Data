let table
let total = 0;

function preload() {
  table = loadTable('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv', 'csv', 'header');
}

function setup() {
  sumWorld();
}

function sumWorld() {
  for (j = 4; j < table.getColumnCount() - 1; j++) {
    for (i = 0; i < table.getRowCount() - 1; i++) {
      total = total + table.getNum(i, j);
    }
    print(table.columns[j] + ' ' + total);
    total = 0;
  }
}
