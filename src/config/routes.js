const express = require('express');
const Router = express.Router;
const router = Router();

//TO DO: import controllers
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const roomController = require('../controllers/hotelController');
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


//HOTELS
//Add
/*Example
router.get('/hotels/addHotel', hotelController.getAdd);
 */
//Details
/*Example
router.get('/hotels/:id/details', hotelController.getDetails);
 */
//...more

module.exports = router;
