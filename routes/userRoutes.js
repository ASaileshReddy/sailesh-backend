const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Update user's project
router.patch('/:id/project', userController.updateProject);

module.exports = router; 