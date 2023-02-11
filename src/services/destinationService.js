const Destination = require('../models/Destination');

exports.findAllByUserId = (userId) =>  Destination.find({destinationOwner: userId});