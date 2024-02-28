const fs = require('fs');

/**
 * Counts the number of students in a database file and prints the count per field.
 * @param {string} path - The path to the database file.
 * @throws {Error} If the database file cannot be loaded.
 */
function countStudents(path) {
  try {
    const db = fs.readFileSync(path, 'utf8').split('\n').filter((line) => line.trim() !== '');
    console.log(`Number of students: ${db.length - 1}`);
    const fields = {};
    db.slice(1).forEach((student) => {
      const field = student.split(',')[3];
      const name = student.split(',')[0];
      if (fields[field]) {
        fields[field].push(name);
      } else {
        fields[field] = [name];
      }
    });
    Object.keys(fields).forEach((key) => {
      console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
