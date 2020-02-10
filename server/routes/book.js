const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/book')

//ENDPOINT - POST DATA TO MONGODB, ROUTING TO CONTROLLER
router.post('', bookCtrl.saveBook);

//ENDPOINT - GET ALL DATA FROM MONGODB, ROUTING TO CONTROLLER
router.get('', bookCtrl.getBooks);

//ENDPOINT - UPDATE DATA IN MONGODB, ROUTING TO CONTROLLER
router.patch('/:id', bookCtrl.updateBook);

//ENDPOINT - DELETE DATA IN MONGODB, ROUTING TO CONTROLLER
router.delete('/:id', bookCtrl.deleteBook);

module.exports = router;