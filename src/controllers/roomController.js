const availabilityService = require('../services/availabilityService');

const Reservation = require('../models/Reservation');
const Room = require('../models/Room');

exports.getReservePage = (req, res) => {
    res.render('reserve');
};

exports.postSearchRooms = async (req, res) => {
    const { destination, startDate, endDate, guests } = req.body;
    console.log('Log at POST SEARCH:')
    console.log('destination:');
    console.log(destination);

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    console.log('guests');
    console.log(guests);

    //we need to check wich are the search criterias and 

    //serch ONLY by destination
    const searchResultDestination = await Room.find({ destination }).lean();
    console.log('searchResultDestination:');
    console.log(searchResultDestination);

    //search ONLY by guests
    const searchResultGuests = await Room.find({ guestCapacity: { $gte: guests } }).lean();
    console.log('searchResultGuests:');
    console.log(searchResultGuests);


    try {
        const availableRooms = await availabilityService.checkAvailability(startDate, endDate);
        console.log('bookings:');
        console.log(availableRooms);
        let bookedRooms;
        if (availableRooms.length === 0) {
            //there are no bookings for these dates, so we show all the rooms
            bookedRooms = await Room.find().lean();
            console.log('bookedRooms');
            console.log(bookedRooms);
            
        } else {
            //if there are some rooms we need to find all the rest in rooms 
        }
        // add check in the template if there are rooms available - show each room, if no rooms available show message 'Unfortunately we are fully booked for your dates!' or similar

        res.render('reserve', { availableRooms, bookedRooms });
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
    //const roomId = req.body.roomId;
    console.log('Log at POST bookRoom')
    console.log('req.body:')
    console.log(req.body)
    console.log('req.session.username:')
    console.log(req.session.username)
    //const room = await Room.findById(roomId);
    //const userId = 

    //await Reservation.create( {startDate, endDate, status})


};

exports.getCreateRoom = (req, res) => {
    res.render('createRoom');
};

exports.postCreateRoom = async (req, res) => {
    const { name, destination, rooms, guestCapacity, beds, amenities, price, image } = req.body;

    const imageUrl = '/images/' + image;

    const room = new Room({
        name,
        destination,
        rooms,
        guestCapacity,
        beds,
        amenities: amenities.toString(),
        price,
        imageUrl
    });

    try {
        await room.save();
        res.redirect('/');
    } catch (error) {
        throw new Error(error);
    }
};