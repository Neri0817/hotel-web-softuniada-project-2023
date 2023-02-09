const express = require('express');
const Router = express.Router;
const router = Router();
const upload = require('../util/uploadFile');

//TO DO: import controllers
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const roomController = require('../controllers/roomController');
//TO DO: Endpoints and actions 

//Home and Search
router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/contacts', homeController.getContactPage);

//AUTH
//Login
router.get('/users/login', userController.getLogin);
router.post('/users/login', userController.postLogin);
//Register
router.get('/users/register', userController.getRegister);
router.post('/users/register', userController.postRegister);
//Logout
router.get('/users/logout', userController.logout);

router.get('/rooms/book', roomController.getRooms);
router.post('/rooms/book', roomController.postSearchRooms);

router.get('/test', roomController.getBookRoom);

router.post('/test', roomController.postBookRoom);


//Rooms
//Add
router.get('/rooms/add', roomController.getCreateRoom);
router.post('/rooms/add', upload.single('image') , roomController.postCreateRoom);
//Details
/*Example
router.get('/hotels/:id/details', hotelController.getDetails);
 */
//...more

module.exports = router;
