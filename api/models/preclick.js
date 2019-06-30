const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    clicking_user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    clicked_user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
})

module.exports = mongoose.model('Preclick', preclickSchema)