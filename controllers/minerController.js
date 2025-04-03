const db = require('../db');

exports.createMiner = async (req, res) => {
    const { name, hashPower, costUsd, subscriptionCostUsdt } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO miners (name, hash_power, cost_usd, subscription_cost_usdt) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, hashPower, costUsd, subscriptionCostUsdt]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create miner' });
    }
};

exports.getAllMiners = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM miners');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve miners' });
    }
};
