const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    server: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    wa: {
        type: String,
        required: true
    },
    list: {
        type: String,
        required: true
    },
    jenispembayaran: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', UserSchema);