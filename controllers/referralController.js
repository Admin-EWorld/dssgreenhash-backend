const db = require('../db');

exports.createReferral = async (req, res) => {
    const { userId, referredUserId, commission } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO referrals (user_id, referred_user_id, commission) VALUES ($1, $2, $3) RETURNING *',
            [userId, referredUserId, commission]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create referral' });
    }
};

exports.getReferralsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await db.query('SELECT * FROM referrals WHERE user_id = $1', [userId]);
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve referrals' });
    }
};
