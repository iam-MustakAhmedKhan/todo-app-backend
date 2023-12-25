const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoute = require('./routes/auth.route');
const taskRoute = require('./routes/task.route');
const mongoose = require('mongoose');
const fireBaseAdmin = require('firebase-admin')
const globalErrors = require('./middlewares/globalError.middleware');
dotenv.config()



const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

fireBaseAdmin.initializeApp({
    credential: fireBaseAdmin.credential.cert({
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
    }),
});


// health route
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok'
    })
})

// routes
app.use(userRoute)
app.use(taskRoute)

// global error Handiling
app.use(globalErrors)

const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Database Connection established")
        app.listen(port, () => {
            console.log("Server listening on port " + port)
        })
    }).catch(err => {
    console.log("Error To connect")
})
