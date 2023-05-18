const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    description: {
        type: String
    }
  },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Goal', goalSchema);