const { Router } = require('express');
const { createTask, getTask, deleteTask, updateTask, getSingleTask, filterTask } = require('../controller/task.controller');
const verifyUser = require('../middlewares/verifyUser.middleware');

const router = Router();

router.post('/create-task', verifyUser, createTask);
router.post('/get-task', verifyUser, getTask);
router.post('/delete-task', deleteTask);
router.patch('/update-task', updateTask);
router.post('/single-task', getSingleTask);
router.post('/filter-task', filterTask);

module.exports = router;