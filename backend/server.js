const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const jwtSecret = process.env.JWT_SECRET;

//Authentication Middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send('Access Denied');
    }

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).send('Invalid token');
        }

        req.user = user;
        next();
    });
};

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Signup Route
app.post('/signup', async (req, res) => {
    console.log("Hello signup");
    try {
        const { name, username, password } = req.body;
        console.log(name);
        console.log(username,password);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, username, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User created');
    } catch (error) {
        console.error('Signup error:', error);
        res.status(400).send(error.message);
    }
});

// Login Route
app.post('/', async (req, res) => {
    console.log("Hello login");
    try {
        const { username, password } = req.body;
        console.log(username,password);
        
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(400).send('User not found');
        }
        console.log(user)
        
        const isPasswordValid = await bcrypt.compare(req.body.password[0], user.password);
        
        if (!isPasswordValid) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
        const redirectPath =  'home';

        res.json({ token, redirectPath });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(400).send(error.message);
    }
});

// Apply authentication middleware to protect subsequent routes
app.use(authenticateToken);

// Protected Routes
app.get('/home', (req, res) => {
    res.send('This is the home page');
});

app.get('/bookings', (req, res) => {
    res.send('This is the bookings page');
});

app.get('/hotels', (req, res) => {
    res.send('This is the bookings page');
});

app.get('/trains', (req, res) => {
    res.send('This is the bookings page');
});

app.get('/checkpnr', (req, res) => {
    res.send('This is the bookings page');
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
