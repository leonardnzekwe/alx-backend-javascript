// full_server/controllers/StudentsController.js

import { readDatabase } from '../utils';

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase(req.dbPath);
            res.status(200).send('This is the list of our students\n' + formatStudents(students));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(req.dbPath);
            const studentsList = students[major] || [];
            res.status(200).send('List: ' + studentsList.join(', '));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

function formatStudents(students) {
    let output = '';
    Object.entries(students).sort(([fieldA], [fieldB]) => fieldA.localeCompare(fieldB)).forEach(([field, names]) => {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    });
    return output;
}

export default StudentsController;
