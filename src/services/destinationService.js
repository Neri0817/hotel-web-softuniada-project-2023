const Destination = require('../models/Destination');

exports.findAllByUserId = (userId) =>  Destination.find({destinationOwner: userId});

exports.findDestinationIdByName = async(name) => {
    const dest =  await Destination.findOne({name}).lean();
    const destId = dest._id;
    return destId;
};

exports.findOneDestinationByNameAndGuests = (name, guests) => Destination.findOne({name, guestCapacity: {
    $gte: guests}});
