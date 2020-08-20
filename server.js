const path = require('path');
const express = require('express'),
router = require('./routes/transactionRoutes'),
connectDB = require('./config/db'),
morgan = require('morgan'),
dotenv = require('dotenv'),
colors = require('colors'),
app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
app.use('/transaction',router);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

dotenv.config({ path: './config/config.env' });
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server running on ${process.env.NODE_ENV} mode port ${PORT}`.yellow.bold));
