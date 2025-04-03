const db = require('../db');

exports.createTransaction = async (req, res) => {
    const { userId, amount, transactionType } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO transactions (user_id, amount, transaction_type) VALUES ($1, $2, $3) RETURNING *',
            [userId, amount, transactionType]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create transaction' });
    }
};

exports.getTransactionsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await db.query('SELECT * FROM transactions WHERE user_id = $1', [userId]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve transactions' });
    }
};
