import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv'
const app = express();
dotenv.config();

app.get('/weather', async (req, res) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=essen&appid=${process.env.SECRET_KEY}`);
    res.send(response.data);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
    }
);