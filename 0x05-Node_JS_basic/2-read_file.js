// 2-read_file.js

const fs = require("fs");

/**
 * Counts the number of students in each field from the database file
 * @param {string} path - The path to the database file
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8").split("\n").filter(Boolean);
    const students = {};

    for (const line of data.slice(1)) {
      const [firstname, lastname, age, field] = line.split(",");
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    }

    console.log(`Number of students: ${data.length - 1}`);
    for (const field in students) {
      console.log(
        `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(", ")}`,
      );
    }
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
