const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('input.csv') // Replace with your CSV file
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync('output.json', JSON.stringify(results, null, 2));
    console.log('CSV file successfully converted to JSON!');
  });




