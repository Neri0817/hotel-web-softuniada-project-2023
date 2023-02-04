const express = require('express');
const Router = express.Router;
const router = Router();

//TO DO: import controllers

//TO DO: Endpoints and actions 
//Home and Search
/*Example
router.get('/', homeController.getHomePage);
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
