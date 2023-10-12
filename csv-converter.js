const fs = require('fs').promises;
const json2csv = require('json-2-csv');

const convertJsonToCsv = async (inputFile, outputFile) => {
    try {
      // Read the JSON file
      const jsonData = await fs.readFile(inputFile, 'utf8');
  
      // Parse the JSON content
      const jsonObject = JSON.parse(jsonData);
  
      // Ensure the parsed JSON is an array. If not, wrap it in an array for conversion.
      const jsonArray = Array.isArray(jsonObject) ? jsonObject : [jsonObject];
  
      // Convert JSON array to CSV
      const csvData = await json2csv.json2csv(jsonArray);
  
      // Write the CSV content to the output file
      await fs.writeFile(outputFile, csvData, 'utf8');
  
      console.log(`CSV has been written to ${outputFile}`);
    } catch (error) {
      console.error('Error converting JSON to CSV:', error);
    }
  };

  convertJsonToCsv('translation.json','output.csv');