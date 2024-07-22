// models/User.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please fill a valid 10 digit phone number'],
        unique: true
    },
    gender: {
        type: String, default: "M",
        required: true
    },

    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], required: true }
    },
    password: {
        type: String,
        required: true
    }
});

// Create a geospatial index on the location field
userSchema.index({ location: '2dsphere' });



const User = mongoose.models.User || mongoose.model('User', userSchema, "users");

export default User;
