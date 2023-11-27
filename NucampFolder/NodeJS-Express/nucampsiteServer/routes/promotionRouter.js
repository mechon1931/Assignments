const express = require('express');
const promotionRouter = express.Router();
const Promotion = require('../models/promotion');

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get(async (req, res) => {
    try {
        const promotion = await Promotion.findById(req.params.promotionId);
        res.json(promotion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
.post(async (req, res) => {
    try {
        const newPromotion = await Promotion.create(req.body);
        res.json(newPromotion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
.put(async (req, res) => {
    try {
        const updatedPromotion = await Promotion.findByIdAndUpdate(
            req.params.promotionId,
            { $set: req.body },
            { new: true }
        );
        res.json(updatedPromotion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
.delete(async (req, res) => {
    try {
        await Promotion.findByIdAndDelete(req.params.promotionId);
        res.json({ message: 'Promotion deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get(async (req, res) => {
    try {
        const promotions = await Promotion.find({});
        res.json(promotions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
.po
