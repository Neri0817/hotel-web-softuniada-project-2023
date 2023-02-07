const availabilityService = require('../services/availabilityService');

exports.getAvailableRooms = async(req, res) => {
    const { startDate, endDate } = req.body;
    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);
    try {
        const availableRoomsArray = await availabilityService.checkAvailability(startDate, endDate);
        console.log(`availableRoomsArray: ${availableRoomsArray}`);
    } catch (error) {
        
    }
    res.render('/hotels/book', {  })
};