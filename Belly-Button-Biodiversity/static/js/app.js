
function buildMetadata(sample) {

    // @TODO: Complete the following function that builds the metadata panel
  // Use `d3.json` to fetch the metadata for a sample
  var metadataURL = "/metadata/" + sample; 
// Use d3 to select the panel with id of `#sample-metadata`
  var panelMetaData = d3.select("#sample-metadata");
  var metaData = panelMetaData.append("div");
  d3.json(metadataURL).then(function(data){
  console.log('test')
    // Use `.html("") to clear any existing metadata
    panelMetaData.html("");
// Use `Object.entries` to add each key and value pair to the panel
    // Object.entries(data).forEach(function([key, value]) {
    //   console.log(key,value);

    //   var cell_key = panel_body.append("td");
    //   cell_key.text(key + ": ");

    //   var cell_val = panel_body.append("td");
    //   cell_val.text(value);

    //   panel_body.append("br");

    })

  }
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);


  

buildMetadata(selDataset)
function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots

    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
