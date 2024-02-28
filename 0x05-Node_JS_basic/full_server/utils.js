// full_server/utils.js

import fs from "fs";

/**
 * Reads the database asynchronously and returns a Promise
 * @param {string} filePath - Path to the database file
 * @returns {Promise<Object>} - Object of arrays of first names per fields
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
      } else {
        const students = {};
        data.split("\n").forEach((line) => {
          const [firstname, , , field] = line.split(",");
          if (field && field.trim()) {
            if (!students[field]) students[field] = [];
            students[field].push(firstname);
          }
        });
        resolve(students);
      }
    });
  });
}
