const express = require('express');
const router = express.Router();

const blogCtrl = require('../controllers/blog')
const authService = require('../services/auth');


//ENDPOINT - GET DATA BY ID FROM MONGODB, ROUTING TO CONTROLLER
router.get('/me', authService.checkJWT, 
                authService.checkRole('siteOwner'),
                blogCtrl.getUserBlogs);


router.get('/:id', blogCtrl.getBlogById);

//ENDPOINT - POST DATA TO MONGODB, ROUTING TO CONTROLLER
router.post('', authService.checkJWT, 
                authService.checkRole('siteOwner'), 
                blogCtrl.createBlog);

//ENDPOINT - GET ALL DATA FROM MONGODB, ROUTING TO CONTROLLER
// router.get('', portfolioCtrl.getPortfolios);

// //ENDPOINT - UPDATE DATA IN MONGODB, ROUTING TO CONTROLLER
router.patch('/:id', authService.checkJWT, 
                authService.checkRole('siteOwner'), 
                blogCtrl.updateBlog);
// router.patch('/:id', authService.checkJWT, 
//                         authService.checkRole('siteOwner'), 
//                         portfolioCtrl.updatePortfolio);

//ENDPOINT - DELETE DATA IN MONGODB, ROUTING TO CONTROLLER
router.delete('/:id',  authService.checkJWT, 
                        authService.checkRole('siteOwner'),
                        blogCtrl.deleteBlog);

module.exports = router;