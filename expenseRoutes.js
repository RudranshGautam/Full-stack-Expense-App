const express = require('express');
const { createExpense, getAllExpenses, deleteExpense, updateExpense } = require('../controllers/expenseController');

const router = express.Router();

router.post('/expenses', createExpense);
router.get('/expenses', getAllExpenses);
router.delete('/expenses/:id', deleteExpense);
router.put('/expenses/:id', updateExpense); // [Bonus Task]

module.exports = router;