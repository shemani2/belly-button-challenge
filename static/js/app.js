const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json"

// Fetch the JSON data and console log it
let bellybuttondata = d3.json(url).then(function(bellybuttondata) {
  console.log(bellybuttondata);
});

// create function to initialize startup
function init () {
  //Select dropdown menu with D#
  let dropdownMenu = d3.select("#selDataset");
  //Populate dropdown menu with id's
  d3.json(url).then(function(bellybuttondata) {
      let sampleNames = bellybuttondata.names;
      //Iterate through array and log/append each name
      sampleNames.forEach((name) => {
          //Print in console to check
          //console.log(name)
          //Append each value to populate dropdown menu
          dropdownMenu.append("option")
          .text(name)
          .property("value", name);
      });

          //Call first sample from list
          let firstSample = sampleNames[0]
          //console.log(firstSample)

          //Call first plots to initialize
          buildBarPlot(firstSample);
          buildBubblePlot(firstSample);
          buildMetadata(firstSample);
  });

};

init()

//Create function to build metadata panel
function buildMetadata (sampleID) {
  //Call json data
  d3.json(url).then(function(bellybuttondata) {
      let metadata = bellybuttondata.metadata;

      //Filter data to get values for each sample
      let sampleArray = metadata.filter(sample => sample.id == sampleID);
      //Set first object in sample array to variable
      let sample = sampleArray[0];

      //Select panel from html and set to variable
      let panel = d3.select("#sample-metadata");
      panel.html("");
      //Loop through each key and append data to panel
      for (key in sample) {
          panel.append("h6").text(key.toUpperCase()+": "+sample[key])
      }
  })
}

//Function that builds bar plot
function buildBarPlot (sampleID) {
  d3.json(url).then(function(bellybuttondata) {
      let samples = bellybuttondata.samples;

  //Filter data to get values for each sample
  let sampleArray = samples.filter(sample => sample.id == sampleID);
  let sample = sampleArray[0];
 
  //Assign variables to sample values
  let otu_ids = sample.otu_ids
  let sample_values = sample.sample_values
  let otu_labels = sample.otu_labels
 
  //Set variable for plot values
  let trace1 = [
      {x: sample_values.slice(0,10).reverse(),
      y: otu_ids.slice(0,10).map(otu_id => "OTU "+otu_id).reverse(),
      text: otu_labels.slice(0,10).reverse(),
      type:"bar",
      orientation:"h" }
  ];
  //Define layout
  let layout = {
      title:""
  };

  //Call Plotly to plot
  Plotly.newPlot("bar", trace1, layout)

  });

};

// var data = [
//   {
//     type: "indicator",
//     mode: "gauge+number+delta",
//     value: 7, // Update the value to be within the range of 0-9
//     title: { text: "Speed", font: { size: 24 } },
//     delta: { reference: 4, increasing: { color: "RebeccaPurple" } },
//     gauge: {
//       axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue" }, // Update the axis range to [0, 9]
//       bar: { color: "darkblue" },
//       bgcolor: "white",
//       borderwidth: 2,
//       bordercolor: "gray",
//       steps: [
//         { range: [0, 3], color: "cyan" }, // Adjust the steps ranges accordingly
//         { range: [3, 6], color: "royalblue" },
//         { range: [6, 9], color: "green" }
//       ],
//       threshold: {
//         line: { color: "red", width: 4 },
//         thickness: 0.75,
//         value: 8 // Update the threshold value within the range of 0-9
//       }
//     }
//   }
// ];

// // Attempt at function that builds gauge 
// import plotly.graph_objects as go

// fig = go.Figure(go.Indicator(
//     mode = "gauge+number+delta",
//     value = 7, // Update the value to be within the range of 0-9
//     domain = {'x': [0, 1], 'y': [0, 1]},
//     title = { text: "Belly Button Washing Frequency", font: { size: 24 } },
//     delta = { reference: 4, increasing: { color: "RebeccaPurple" } },
//     gauge = {
//       axis: { range: [0, 9], tickwidth: 1, tickcolor: "darkblue" }, // Update the axis range to [0, 9]
//       bar: { color: "darkblue" },
//       bgcolor: "white",
//       borderwidth: 2,
//       bordercolor: "gray",
//       steps: [
//         { range: [0, 3], color: "cyan" }, // Adjust the steps ranges accordingly
//         { range: [3, 6], color: "royalblue" },
//         { range: [6, 9], color: "green" }],
//       threshold: {
//         line: { color: "red", width: 4 },
//         thickness: 0.75,
//         value: 8}}))

// fig.update_layout(paper_bgcolor = "lavender", font = {'color': "darkblue", 'family': "Arial"})

// fig.show()

//Function that builds bubble plot
function buildBubblePlot (sampleID) {
  d3.json(url).then(function(bellybuttondata) {
      let samples = bellybuttondata.samples;

  //Filter data to get values for each sample
  let sampleArray = samples.filter(sample => sample.id == sampleID);
  let sample = sampleArray[0];
 
  //Assign variables to sample values
  let otu_ids = sample.otu_ids
  let sample_values = sample.sample_values
  let otu_labels = sample.otu_labels
 
  //Set variable for plot values
  let trace2 = [
      {x: otu_ids,
       y: sample_values,
       text: otu_labels,
       mode:"markers",
       marker:{
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"
       }
       
      }];

  //Define layout
  let layout = {
      xaxis: {title:"OTU ID"}
  };
  //Call Plotly to plot
  Plotly.newPlot("bubble", trace2, layout)

  });
};

//Function that updates plots on change
function optionChanged(sampleID) {
  buildMetadata(sampleID);
  buildBarPlot(sampleID);
  buildBubblePlot(sampleID);
};


// function buildGaugePlot(sampleID) {
//   d3.json(url).then(function(data) {
//       let metadata = data.metadata;
//       let sampleArray = metadata.filter(sample => sample.id == sampleID);
//       let sample = sampleArray[0];
      
//       // Get the washing frequency for the gauge chart
//       let washFrequency = sample.wfreq;
      
//       // Define the data for the gauge chart
//       let data = [
//           {
//               domain: { x: [0, 1], y: [0, 1] },
//               value: washFrequency,
//               title: { text: "Belly Button Washing Frequency" },
//               type: "indicator",
//               mode: "gauge+number",
//               gauge: {
//                   axis: { range: [0, 9] },
//                   steps: [
//                       { range: [0, 1], color: "rgb(248, 243, 236)" },
//                       { range: [1, 2], color: "rgb(244, 241, 229)" },
//                       { range: [2, 3], color: "rgb(233, 230, 202)" },
//                       { range: [3, 4], color: "rgb(229, 231, 179)" },
//                       { range: [4, 5], color: "rgb(213, 228, 157)" },
//                       { range: [5, 6], color: "rgb(183, 204, 146)" },
//                       { range: [6, 7], color: "rgb(140, 191, 136)" },
//                       { range: [7, 8], color: "rgb(138, 187, 143)" },
//                       { range: [8, 9], color: "rgb(133, 180, 138)" }
//                   ],
//                   threshold: {
//                       line: { color: "red", width: 4 },
//                       thickness: 0.75,
//                       value: washFrequency
//                   }
//               }
//           }
//       ];

//       // Define the layout for the gauge chart
//       let layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };

//       // Call Plotly to plot the gauge chart
//       Plotly.newPlot("gauge", data, layout);
//   });
// };

// function init() {
//   // Your existing code for populating dropdown menu and initializing other plots

//   // Call the buildGaugePlot function to initialize the gauge chart
//   buildGaugePlot(firstSample);
// };

// function optionChanged(sampleID) {
//   buildMetadata(sampleID);
//   buildBarPlot(sampleID);
//   buildBubblePlot(sampleID);
//   buildGaugePlot(sampleID); // Add this line to update the gauge chart
// };