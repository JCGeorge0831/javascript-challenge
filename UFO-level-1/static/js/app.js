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
      // Append a cell to the row for each value
      // in the UFO Sight object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Using a date form in  HTML document and write JavaScript code 
// Will listen for events and search through the date/time column

// Getting a reference to the button
var button = d3.select("#filter-btn");

button.on("click", function(event) {
    d3.event.preventDefault();
    tbody.html("");

// Getting a reference to the input element 
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");

// Filtering the date and matching them with the input values
var filterUFOdata = tableData.filter(tableData => tableData.datetime === inputValue);
filterUFOdata.forEach(function(datetimeData) {
    var row = tbody.append("tr");
    Object.entries(datetimeData).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
        });
    });   
});

