-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    hash_power FLOAT DEFAULT 0,
    balance_btc DECIMAL(18, 8) DEFAULT 0,
    balance_usdt DECIMAL(18, 8) DEFAULT 0,
    referral_code VARCHAR(50) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Referrals Table
CREATE TABLE referrals (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    referred_user_id INT REFERENCES users(id),
    commission DECIMAL(18, 8),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Transactions Table
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    amount DECIMAL(18, 8) NOT NULL,
    transaction_type VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Miners Table
CREATE TABLE miners (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    hash_power FLOAT NOT NULL,
    cost_usd DECIMAL(18, 2) NOT NULL,
    subscription_cost_usdt DECIMAL(18, 8) NOT NULL
);

-- Earnings Table
CREATE TABLE earnings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    amount_btc DECIMAL(18, 8),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tasks Table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    hash_power_reward FLOAT NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    user_id INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
