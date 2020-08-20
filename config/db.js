const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true, useNewUrlParser: true
        });
        console.log(`Mongo db connected to ${conn.connection.host}`.blue.underline.bold);
    } catch (error) {
        console.log(`'${process.env.MONGO_URI}' DB CONNECTION ERR: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}

module.exports = connectDB;