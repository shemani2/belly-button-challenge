# belly-button-challenge

# Disclosure: 
With the help of the module activities, peer consultation, and online search help, the module activity was completed. Various attempts at the bonus were made but none of them work with the current code. Any edits or recommendations would be appreciated. 

Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
Before You Begin
1.	Create a new repository for this project called belly-button-challenge. Do not add this Challenge to an existing repository.
2.	Clone the new repository to your computer.
3.	Inside your local git repository, copy the files from in the StarterCode folder contained within the Module 14 Challenge zip file. i.e. index.html, samples.json, and the static folder.
NOTE
You will not be required to access the samples.json file locally, but it is provided for reference.
4.	Push the above changes to GitHub.
5.	Deploy the new repository to GitHub Pages.
Files
Download the following files to help you get started:
Module 14 Challenge filesLinks to an external site.
Instructions
Complete the following steps:
1.	Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
2.	Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
o	Use sample_values as the values for the bar chart.
o	Use otu_ids as the labels for the bar chart.
o	Use otu_labels as the hovertext for the chart.
 
3.	Create a bubble chart that displays each sample.
o	Use otu_ids for the x values.
o	Use sample_values for the y values.
o	Use sample_values for the marker size.
o	Use otu_ids for the marker colors.
o	Use otu_labels for the text values.
 
4.	Display the sample metadata, i.e., an individual's demographic information.
5.	Display each key-value pair from the metadata JSON object somewhere on the page.
 
6.	Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:
 
7.	Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file
Advanced Challenge Assignment (Optional with no extra points earning)
The following task is advanced and therefore optional.
•	Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.
•	You will need to modify the example gauge code to account for values ranging from 0 through 9.
•	Update the chart whenever a new sample is selected.
 
Hints
•	Use console.log inside of your JavaScript code to see what your data looks like at each step.
•	Refer to the Plotly.js documentationLinks to an external site. when building the plots.
![image](https://github.com/shemani2/belly-button-challenge/assets/153566638/d8696994-d858-4eae-af3d-6c17ee31bff6)
