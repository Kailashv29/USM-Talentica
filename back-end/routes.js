const express = require('express');
const appRoot = require('app-root-path');
var user = require(appRoot + '/app/controller/user');
var router = express.Router();

router.post('/api/v1/users', user.create);
router.post('/api/v1/users/login', user.login);
router.put('/api/v1/users/logout/:id', user.logout);
router.get('/api/v1/users', user.getAll);
router.put('/api/v1/users/:id', user.update);
router.get('/api/v1/users/:id', user.get);
router.get('/api/v1/welcome', user.welcome);
module.exports = router;