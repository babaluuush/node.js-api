const express = require('express');
const router = express.Router();
const contactControllers = require('../controllers/controller');

router.get('/contacts', contactControllers.getAllContacts);
router.get('/contacts/:id', contactControllers.getContactById);
router.post('/contacts', contactControllers.createContact);
router.put('/contacts/:id', contactControllers.updateContact);
router.delete('/contacts/:id', contactControllers.deleteContact);

module.exports = router;
