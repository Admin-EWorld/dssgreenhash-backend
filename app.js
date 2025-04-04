const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const transactionRoutes = require('./routes/transactions');
const referralRoutes = require('./routes/referrals');
const minerRoutes = require('./routes/miners');
const taskRoutes = require('./routes/tasks');
const frontendRoutes = require('./routes/frontendRoutes'); // Import the new route file

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/referrals', referralRoutes);
app.use('/api/miners', minerRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/', frontendRoutes); // Use the new route file

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
