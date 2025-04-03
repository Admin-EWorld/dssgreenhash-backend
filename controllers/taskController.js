const db = require('../db');

exports.createTask = async (req, res) => {
    const { description, hashPowerReward, userId } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO tasks (description, hash_power_reward, user_id) VALUES ($1, $2, $3) RETURNING *',
            [description, hashPowerReward, userId]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create task' });
    }
};

exports.getTasksByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await db.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve tasks' });
    }
};

exports.updateTask = async (req, res) => {
    const { taskId } = req.params;
    const { description, hashPowerReward, isCompleted } = req.body;
    try {
        const result = await db.query(
            'UPDATE tasks SET description = $1, hash_power_reward = $2, is_completed = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
            [description, hashPowerReward, isCompleted, taskId]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};
