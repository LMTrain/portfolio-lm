const express = require('express');
const router = express.Router();

const resumeCtrl = require('../controllers/resume')
const authService = require('../services/auth');

//ENDPOINT - POST DATA TO MONGODB, ROUTING TO CONTROLLER
router.post('', authService.checkJWT, 
                authService.checkRole('siteOwner'), 
                resumeCtrl.saveResume);

//ENDPOINT - GET ALL DATA FROM MONGODB, ROUTING TO CONTROLLER
router.get('', resumeCtrl.getResumes);

//ENDPOINT - GET DATA BY ID FROM MONGODB, ROUTING TO CONTROLLER
router.get('/:id', resumeCtrl.getResumeById);

// //ENDPOINT - UPDATE DATA IN MONGODB, ROUTING TO CONTROLLER
router.patch('/:id', authService.checkJWT, 
                        authService.checkRole('siteOwner'), 
                        resumeCtrl.updateResume);

// //ENDPOINT - DELETE DATA IN MONGODB, ROUTING TO CONTROLLER
router.delete('/:id',  authService.checkJWT, 
                        authService.checkRole('siteOwner'),
                        resumeCtrl.deleteResume);

module.exports = router;