const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for a group object
const groupSchema = new Schema({
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    buyIn: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    startDate: {
        type: Date,
        default: new Date(Date.now)
    },
    endDate: {
        type: Date,
        default: new Date((new Date().getTime())+7*24*60*60*1000).getTime()
    }
});

// Create a model
const Group = mongoose.model('group', groupSchema);

// Export the model
module.exports = Group;  