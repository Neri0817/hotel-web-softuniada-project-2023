const express = require('express');
const Router = express.Router;
const router = Router();


//TO DO: import controllers
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const destinationController = require('../controllers/destinationController');

//TO DO: Endpoints and actions 

//Home and Search
router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/contacts', homeController.getContactPage);
router.post('/contacts', homeController.postContactPage);

//AUTH
//Login
router.get('/users/login', userController.getLogin);
router.post('/users/login', userController.postLogin);
//Register
router.get('/users/register', userController.getRegister);
router.post('/users/register', userController.postRegister);
//Logout
router.get('/users/logout', userController.logout);
//Profile
router.get('/users/profile', userController.getProfile);
router.post('/users/profile', userController.postProfile);

//Destinations
router.get('/destinations/book', destinationController.getReservePage);
router.post('/destinations/book', destinationController.postReservePage);

<<<<<<< HEAD

=======
router.post('/test', destinationController.postBookDestination);
// router.get('*', homeController.notFoundPage)
>>>>>>> b4bd603cbdb42ad99754dfc6b4a62d01675dc490
module.exports = router;
