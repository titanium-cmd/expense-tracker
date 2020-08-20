const express = require('express'), 
router = express.Router(), 
transactionController = require('../controllers/transactionController');

router.get('/', transactionController.get_transaction);
router.post('/', transactionController.post_transaction);
router.delete('/:id', transactionController.delete_transaction);

module.exports = router;
