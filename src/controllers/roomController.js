const availabilityService = require('../services/availabilityService');

const Reservation = require('../models/Reservation');
const Room = require('../models/Room');

exports.getRooms = (req, res) => {
    res.render('reserve');
};

exports.postSearchRooms = async (req, res) => {
    const { startDate, endDate } = req.body;


    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);
    try {
        const availableRoomsArray = await availabilityService.checkAvailability(startDate, endDate);
        console.log(`availableRoomsArray: ${availableRoomsArray}`);
        console.log('roomController');
        // add check in the template if there are rooms available - show each room, if no rooms available show message 'Unfortunately we are fully booked for your dates!' or similar
        res.render('/hotels/book', { availableRoomsArray });
      
    } catch (error) {
        console.log(error);
    }
}

exports.getBookRoom = (req, res) => {
    res.send(`
    <h2>Login</h2>
    <form action="" method="POST">
    <label for="startDate">startDate</label>
    <input type="date" name="startDate" id="startDate">

    <label for="endDate">endDate</label>
    <input type="date" name="endDate" id="startDate">

    <label for="status">Status</label>
    <input type="text" name="status" id="status">

    <input type="submit" value="Submit Request">
</form>
    `)
};

exports.postBookRoom = async (req, res) => {
    const { startDate, endDate, status } = req.body;

    console.log(startDate);
    console.log(endDate);
    console.log(status);


    //get roomId from req.params.roomId;
    //const roomId = req.params.roomId;
    //const room = await Room.findById(roomId);


    await Reservation.create( {startDate, endDate, status})

    
};