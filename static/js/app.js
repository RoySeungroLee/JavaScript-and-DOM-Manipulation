// from data.js
var tableData = data;

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Volume
 */
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
var date = ""
  // Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input value from the form
    date = d3.select("#datetime").node().value;
    console.log(date);
    // clear the input value
    d3.select("#datetime").node().value = "";
    // Build the plot with the new stock
    buildPlot();
  }

function buildPlot() {
    var tbody = d3.select("tbody");

    for (var i = 0; i <data.length; i++) {
        if (tableData[i].datetime == date){
            var trow = tbody.append("tr")
            console.log(tableData[i])
            trow.append("td").text(tableData[i].datetime);
            trow.append("td").text(tableData[i].city);
            trow.append("td").text(tableData[i].state);
            trow.append("td").text(tableData[i].country);
            trow.append("td").text(tableData[i].shape);
            trow.append("td").text(tableData[i].durationMinutes);
            trow.append("td").text(tableData[i].comments);
        }
    }
}
// function buildPlot() {
//     var tbody = d3.select("tbody");
//     data.forEach(function(weatherReport) {
//         console.log(weatherReport);
//         var row = tbody.append("tr");
//         Object.entries(weatherReport).forEach(function([key, value]) {
//             if(data.datetime==date){
//                 console.log(key, value);
//                 // Append a cell to the row for each value
//                 // in the weather report object
//                 var cell = tbody.append("td");
//                 cell.text(value);
//             }
//         })})
//         }
    
  // Add event listener for submit button
d3.select("#filter-btn").on("click", handleSubmit);

  
// YOUR CODE HERE!
