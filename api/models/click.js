const mongoose = require('mongoose')

const clickSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_1: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    user_2: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    shared_events: [{
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }],

})

module.exports = mongoose.model('Click', clickSchema)