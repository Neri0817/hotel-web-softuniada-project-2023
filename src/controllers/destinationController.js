const availabilityService = require('../services/availabilityService');
const destinationService = require('../services/destinationService');
const dateUtil = require('../utils/dateUtil');
const { mapErrors } = require('../utils/errorUtils');
const Reservation = require('../models/Reservation');
const Destination = require('../models/Destination');


exports.getReservePage = async (req, res) => {
    try {
        const destinations = await Destination.find().lean();
        res.render('reserve', { destinations });
    } catch (error) {
        console.log(`Error at GET Reserve page:${error}`);
    }
};

exports.postReservePage = async (req, res) => {

    console.log('Try post---------');

    // user gets redirected to log in page if not logged in
    if (!req.session.username) {
        res.locals.message = 'Please sign in to proceed!';
        req.session.message = res.locals.message;
        return res.redirect('/users/login');
    }

    const { name, startDate, endDate, guestsCount } = req.body;

    //serch by destination and guestCount in destinations
    try {
            const destinations = await Destination.find().lean();
            const searchDestination = await destinationService.findOneDestinationByNameAndGuests(name,guestsCount)
            .populate('destinationOwner').lean();
            if (!searchDestination) {
                throw new Error('There are no destination available yet!');
            }
            console.log('searchDestination:');
            console.log(searchDestination);
           
            const nights = dateUtil.calculateNights(startDate, endDate);
            const price  = searchDestination.price;
            const totalPrice = nights * price;
    
            res.render('reserve', { searchDestination , destinations, guestsCount, totalPrice });
        } catch (err) {
            console.log(`Error booking destination:${err}`);
             const error = mapErrors(err)
            res.render('reserve', { error })
        }
}
    
    //serch by destination, startDate, endDate and guestCount in reservations
    // try {
    //     const destinationId =  await destinationService.findDestinationIdByName(name);
    //     console.log('destinationId')
    //     console.log(destinationId)
    //     const searchReservation = await Reservation.findOne({
    //         destination: destinationId,
    //         guestsCount: {
    //             $gte: guestsCount},
    //             satrtDate: { $gte: startDate},
    //             endDate: {$lte: endDate }
    //     }).lean();
    //     console.log('searchReservation:');
    //     console.log(typeof searchReservation);
       
    //     if (!searchReservation) {
    //         await Reservation.create ({ destination: destinationId , startDate, endDate, guestsCount });
    //     }

    //     res.render('reserve',  )
    // } catch (error) {
    //     console.log(`Error booking destination:${error}`);
    // }


    //     const destinationGuestCapacity = searchResultDestination[0].guestCapacity


    //     if(destinationGuestCapacity >= guestsCount){
    //     console.log(searchResultDestination); // this is an array with our destination - it is filtered by destination and guest count
    //         // return res.render('reserve', { searchResultDestination })
    // }

    //search ONLY by guests
    // const searchResultGuests = await Destination.find({ guestCapacity: { $gte: guestsCount } }).lean();
    // console.log('searchResultGuests:');
    // console.log(searchResultGuests);

    //search ONLY by start and end date
    // try {
    //     const availableDestinations = await availabilityService.checkAvailability(startDate, endDate);
    //     console.log('availableRooms:');
    //     console.log(availableDestinations);
    //     let bookedDestinations;
    //     if (availableDestinations.length === 0) {
    //         //there are no bookings for these dates, so we show all the rooms
    //         bookedDestinations = await Destination.find().lean();
    //         console.log('bookedDestinations');
    //         console.log(bookedDestinations);

    //     } else {
    //         //if there are some rooms we need to find all the rest in rooms 
    //     }
    //     // add check in the template if there are rooms available - show each room, if no rooms available show message 'Unfortunately we are fully booked for your dates!' or similar
    //     //We need to pass the number of the guests to the hbs file, see below
    //     return res.render('reserve', { searchResultDestination, bookedDestinations });
    // } catch (error) {
    //     console.log(error);
    // }
//}


//This function we can use to sort by date added in descending order
// Destination.find({}).sort({ dateAdded: -1 }).exec(function (err, posts) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(posts);
//     }
//   });
