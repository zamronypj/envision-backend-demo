var express = require('express');
var router = express.Router();
const LocationController = require('../controllers/locationController')

router.get('/', LocationController.listLocation);
router.get('/:name', LocationController.getLocation);
router.post('/', LocationController.createLocation);
router.delete('/:name', LocationController.deleteLocation);
router.put('/:name', LocationController.updateLocation);

module.exports = router;
