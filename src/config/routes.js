const express = require('express');
const Router = express.Router;
const router = Router();
const upload = require('../util/uploadFile');

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
router.post('/destinations/book', destinationController.postSearchDestinations);
//Add
//router.get('/destinations/add', destinationController.getCreateDestination);
//router.post('/destinations/add', upload.single('imageUrl') , destinationController.postCreateDestination);
//Details
/*Example
router.get('/hotels/:id/details', hotelController.getDetails);
 */
//...more
router.get('/test', destinationController.postBookDestination);

router.post('/test', destinationController.postBookDestination);
router.get('*', homeController.notFoundPage)
module.exports = router;
