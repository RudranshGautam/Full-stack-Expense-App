const Expense = require('../models/expenseModel');

// Create a new expense
exports.createExpense = async (req, res) => {
    try {
        const { amount, description, category } = req.body;
        const newExpense = await Expense.create({ amount, description, category });
        res.json(newExpense);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await Expense.destroy({ where: { id } });
        res.json({ message: 'Expense deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an expense [Bonus Task]
exports.updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, description, category } = req.body;
        const expense = await Expense.findByPk(id);
        if (expense) {
            expense.amount = amount;
            expense.description = description;
            expense.category = category;
            await expense.save();
            res.json(expense);
        } else {
            res.status(404).json({ message: 'Expense not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};