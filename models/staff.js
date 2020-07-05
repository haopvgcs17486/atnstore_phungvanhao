const mongoose = require('mongoose');

var staffSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Information: String,
    urlImg: String    
} , { collection: 'Staff' } );

var Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;