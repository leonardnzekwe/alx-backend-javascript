const express = require('express');
const AppController = require('../controllers/AppController');
/**
 * Controller for handling student-related operations.
 * @type {import('../controllers/StudentsController')}
 */
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
