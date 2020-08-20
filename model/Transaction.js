const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbSchema = new Schema({
    text: {
        type: String,
        trim: true, 
        required: [true, 'Please enter text']
    }, 
    amount: {
        type: Number, 
        trim: true,
        required: [true, 'Please enter amount']
    }
}, {timestamps: true});

const Transaction = mongoose.model('transactions', dbSchema);
module.exports = Transaction;
