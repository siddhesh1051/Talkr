const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const {notFound, errorHandler} = require('./middleware/errorMiddleware');



dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('api running!');
});

app.use('/api/user',userRoutes)

app.use(notFound);
app.use(errorHandler);



app.listen(5000, () => {console.log("server started on port 5000");});