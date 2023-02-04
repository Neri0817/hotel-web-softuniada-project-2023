const express = require('express');
const Router = express.Router;
const router = Router();

//TO DO: import controllers
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
//TO DO: Endpoints and actions 
//Home and Search

router.get('/', homeController.getHomePage);
/*Example
router.get('/search', homeController.getSearch);
 */


router.get('/about', homeController.getAboutPage);

router.get('/contacts', homeController.getContactPage);
//AUTH
//Login

router.get('/users/login', userController.getLogin);

/*Example
router.get('/auth/login', authController.getLogin);
 */
//Register
router.get('/users/register', userController.getRegister);
router.post('/users/register', userController.postRegister);

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
