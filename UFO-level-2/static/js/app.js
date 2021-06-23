// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Examing UFO Sight values for each column
tableData.forEach(function(SightsofUFOs) {
    console.log(SightsofUFOs);
    var row = tbody.append("tr");
    Object.entries(SightsofUFOs).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value in the UFO Sight object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Getting a reference to the button
var button = d3.select("#filter-btn");

button.on("click", function(event) {
    d3.event.preventDefault();
    tbody.html("");

// Getting a reference to the input elements
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");
var inputCity = d3.select("#city").property("value");
var inputState = d3.select("#state").property("value");
var inputCountry = d3.select("#country").property("value");
var inputShape = d3.select("#shape").property("value");

// Checking city value
// console.log(inputCity);

// Filtering the date, city, state, country, and shape and matching them with the input values
var filterUFOdata = tableData

if (inputValue) { 
  filterUFOdata = filterUFOdata.filter(tableData => tableData.datetime === inputValue);
}
if (inputCity) { 
  filterUFOdata = filterUFOdata.filter(tableData => tableData.city === inputCity);
}
if (inputState) { 
  filterUFOdata = filterUFOdata.filter(tableData => tableData.state === inputState);
}
if (inputCountry) { 
  filterUFOdata = filterUFOdata.filter(tableData => tableData.country === inputCountry);
}
if (inputShape) { 
  filterUFOdata = filterUFOdata.filter(tableData => tableData.shape === inputShape);
}


filterUFOdata.forEach(function(datetimeData) {
    var row = tbody.append("tr");
    Object.entries(datetimeData).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
        });
    });   
});

