// 3-read_file_async.js

const fs = require('fs');

/**
 * Counts the number of students in each field from the database file asynchronously
 * @param {string} path - The path to the database file
 * @returns {Promise<void>} - A Promise that resolves when the operation is complete
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(Boolean);
        const students = {};

        for (const line of lines.slice(1)) {
          const [firstname, lastname, age, field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
        }

        console.log(`Number of students: ${lines.length - 1}`);
        for (const field in students) {
          console.log(
            `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`,
          );
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
