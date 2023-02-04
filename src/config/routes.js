const express = require('express');
const Router = express.Router;
const router = Router();

//TO DO: import controllers
const homeController = require('../controllers/homeController');
//TO DO: Endpoints and actions 
//Home and Search

router.get('/', homeController.getHomePage);
/*Example
router.get('/search', homeController.getSearch);
 */

//AUTH
//Login
/*Example
router.get('/auth/login', authController.getLogin);
 */
//Register
/*Example
router.post('/auth/register', authController.postRegister);
*/

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
