const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api', expenseRoutes);

sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));