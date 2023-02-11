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

router.get('/rooms/book', destinationController.getReservePage);
router.post('/rooms/book', destinationController.postSearchDestinations);

router.get('/test', destinationController.postBookDestination);

router.post('/test', destinationController.postBookDestination);



//Rooms
//Add
router.get('/rooms/add', roomController.getCreateRoom);
router.post('/rooms/add', upload.single('imageUrl') , roomController.postCreateRoom);
//Details
/*Example
router.get('/hotels/:id/details', hotelController.getDetails);
 */
//...more

module.exports = router;
