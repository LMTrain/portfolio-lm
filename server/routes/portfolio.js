const express = require('express');
const router = express.Router();
const portfolioCtrl = require('../controllers/portfolio')
const authService = require('../services/auth');

//ENDPOINT - POST DATA TO MONGODB, ROUTING TO CONTROLLER
router.post('', authService.checkJWT, authService.checkRole('siteOwner'), portfolioCtrl.savePortfolio);

//ENDPOINT - GET ALL DATA FROM MONGODB, ROUTING TO CONTROLLER
router.get('', authService.checkJWT, authService.checkRole('siteOwner'), portfolioCtrl.getPortfolios);

// //ENDPOINT - UPDATE DATA IN MONGODB, ROUTING TO CONTROLLER
// router.patch('/:id', bookCtrl.updateBook);

// //ENDPOINT - DELETE DATA IN MONGODB, ROUTING TO CONTROLLER
// router.delete('/:id', bookCtrl.deleteBook);

module.exports = router;