// const availabilityService = require('../services/availabilityService');

// exports.getAvailableDestinations = async(req, res) => {
//     const { startDate, endDate } = req.body;
//     console.log(`startDate: ${startDate}`);
//     console.log(`endDate: ${endDate}`);
//     try {
//         const availableDestinationsArray = await availabilityService.checkAvailability(startDate, endDate);
//         console.log(`availableDestinationsArray: ${availableDestinationsArray}`);
//     } catch (error) {
//         console.log(error);
//     }
//     res.render('/rooms/book', {  })
// };