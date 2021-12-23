var express = require('express');
var router = express.Router();
const MessageController = require('../controllers/messageController')

router.get('/', MessageController.listMessage);
router.get('/:id', MessageController.getMessage);
router.post('/', MessageController.createMessage);
router.delete('/:id', MessageController.deleteMessage);
router.put('/:id', MessageController.updateMessage);

module.exports = router;
