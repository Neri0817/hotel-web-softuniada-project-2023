const availabilityService = require('../services/availabilityService');

const Reservation = require('../models/Reservation');
const Destination = require('../models/Destination');


exports.getReservePage = (req, res) => {
    res.render('reserve');
};

exports.postSearchDestinations = async (req, res) => {

    console.log('Try post---------');
  
    // user gets redirected to log in page if not logged in
    if(!req.session.username) {
        const message = 'Please sign in to proceed!'
        return res.render('sign-in', { message });
    }

    const { destination, startDate, endDate, guests } = req.body;

    //we need to check wich are the search criterias and 

    //serch ONLY by destination
    const searchResultDestination = await Destination.find({ destination }).lean();
    console.log('searchResultDestination:');
    console.log(searchResultDestination);

    //search ONLY by guests
    const searchResultGuests = await Destination.find({ guestCapacity: { $gte: guests } }).lean();
    console.log('searchResultGuests:');
    console.log(searchResultGuests);

    //search ONLY by start and end date
    try {
        const availableDestinations = await availabilityService.checkAvailability(startDate, endDate);
        console.log('availableRooms:');
        console.log(availableRooms);
        let bookedDestinations;
        if (availableRooms.length === 0) {
            //there are no bookings for these dates, so we show all the rooms
            bookedDestinations = await Destination.find().lean();
            console.log('bookedDestinations');
            console.log(bookedDestinations);
            
        } else {
            //if there are some rooms we need to find all the rest in rooms 
        }
        // add check in the template if there are rooms available - show each room, if no rooms available show message 'Unfortunately we are fully booked for your dates!' or similar

        res.render('reserve', { availableDestinations, bookedDestinations });
    } catch (error) {
        console.log(error);
    }
}

exports.getBookDestination= (req, res) => {
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

exports.postBookDestination = async (req, res) => {
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

// exports.getCreateDestination = (req, res) => {
//     res.render('createRoom');
// };

// exports.postCreateDestination = async (req, res) => {
//     const { name, guestCapacity, amenities, price } = req.body;
//     console.log('LOG AT POST DESTINATION')
//     let imageUrl = '/static/images/' + req.body.imageUrl;
//     console.log(amenities)
//     console.log(req.body);
//     console.log(req.file); //returns undefinied

//     // console.log(req.file.path); //returns undefinied
//     // const imageUrl = req.file;


//     const destination = new Destination({
//         name,
//         guestCapacity,
//         amenities: amenities.toString(),
//         imageUrl,
//         price,
//         destinationOwner: req.session.user._id
//     });


//     try {
//         await destination.save();
//         res.redirect('/');
//     } catch (error) {
//         throw new Error(error);
//     }
// };


//This function we can use to sort by date added in descending order
// Destination.find({}).sort({ dateAdded: -1 }).exec(function (err, posts) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(posts);
//     }
//   });