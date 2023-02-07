// const availabilityService = require('../services/availabilityService');

// exports.getBookingPage = (req, res) => {
//     res.render('book-room');
// };

// exports.postSearchRooms = async(req, res) => {
//     const { startDate, endDate } = req.body;
//     console.log(`startDate: ${startDate}`);
//     console.log(`endDate: ${endDate}`);
//     try {
//         const availableRoomsArray = await availabilityService.checkAvailability(startDate, endDate);
//         console.log(`availableRoomsArray: ${availableRoomsArray}`);
//         // add check in the template if there are rooms available - show each room, if no rooms available show message 'Unfortunately we are fully booked for your dates!' or similar
//         res.render('/hotels/book', { availableRoomsArray });
      
//     } catch (error) {
//         console.log(error);
//     }
// }

