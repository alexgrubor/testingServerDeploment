import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv'
const port = process.env.PORT || 3000;
const app = express();
dotenv.config();

app.get('/weather', async (req, res) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=essen&appid=${process.env.SECRET_KEY}`);
    res.send(response.data);
})

app.listen(port, () => {
    console.log('Server is listening on port 3000');
    }
);