const router = require('express').Router();
const urlController = require('../controllers/urls');

router.post('/short', urlController.uploadUrl);
router.get('/:urlId', urlController.redirectUrl);

module.exports = router;
