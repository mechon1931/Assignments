const express = require('express');
const partnerRouter = express.Router();
const Partner = require('../models/partner');

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get(async (req, res) => {
    try {
        const partner = await Partner.findById(req.params.partnerId);
        res.json(partner);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
.post(async (req, res) => {
    try {
        const newPartner = await Partner.create(req.body);
        res.json(newPartner);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
.put(async (req, res) => {
    try {
        const updatedPartner = await Partner.findByIdAndUpdate(
            req.params.partnerId,
            { $set: req.body },
            { new: true }
        );
        res.json(updatedPartner);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
.delete(async (req, res) => {
    try {
        await Partner.findByIdAndDelete(req.params.partnerId);
        res.json({ message: 'Partner deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
})
.get(async (req, res) => {
    try {
        const partners = await Partner.find({});
        res.json(partners);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
.post(async (req, res) => {
    try {
        const newPartner = await Partner.create(req.body);
        res.json(newPartner);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
.put((req, res) => {
    res.status(403).json({ error: 'PUT operation not supported on /partners' });
})
.delete(async (req, res) => {
    try {
        await Partner.deleteMany({});
        res.json({ message: 'All partners deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = partnerRouter;
