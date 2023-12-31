const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route(`/:promotionsId`)
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Testing GET for promotionsId: ${req.params.promotionsId}`);
})
.post((req, res) => {
    res.end(`Will add the promotionsId: ${req.body.promotionsId} with description of ID: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /promotions/${req.params.promotionsId}`);
})
.delete((req, res) => {
    res.end('Deleting all promotions/promotionsId');
});

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

module.exports = promotionRouter;