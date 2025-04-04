const express = require('express');
const router = express.Router();

// Sample data for the endpoints
const homeData = { message: 'Home data successfully fetched!' };
const boostData = { message: 'Boost data successfully fetched!' };
const earnData = { message: 'Earn data successfully fetched!' };
const faqData = { message: 'FAQ data successfully fetched!' };
const moreData = { message: 'More data successfully fetched!' };
const referralData = { message: 'Referral data successfully fetched!' };
const swapCoinData = { message: 'Swap Coin data successfully fetched!' };
const withdrawData = { message: 'Withdraw data successfully fetched!' };

// Define the endpoints
router.get('/home-data', (req, res) => {
  res.json(homeData);
});

router.get('/boost-data', (req, res) => {
  res.json(boostData);
});

router.get('/earn-data', (req, res) => {
  res.json(earnData);
});

router.get('/faq-data', (req, res) => {
  res.json(faqData);
});

router.get('/more-data', (req, res) => {
  res.json(moreData);
});

router.get('/referral-data', (req, res) => {
  res.json(referralData);
});

router.get('/swapcoin-data', (req, res) => {
  res.json(swapCoinData);
});

router.get('/withdraw-data', (req, res) => {
  res.json(withdrawData);
});

module.exports = router;
