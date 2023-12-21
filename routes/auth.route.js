const {Router } = require('express');
const { googleAuth } = require('../controller/auth.controller');

const router = Router();

router.post('/auth', googleAuth);


module.exports = router