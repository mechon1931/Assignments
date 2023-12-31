const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route(`/:partnersId`)
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Testing GET for partnersId: ${req.params.partnersId}`);
})
.post((req, res) => {
    res.end(`Will add the partnersId: ${req.body.partnersId} with description of ID: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /partners/${req.params.partnersId}`);
})
.delete((req, res) => {
    res.end('Deleting all partners/partnersId');
});

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

module.exports = partnerRouter;