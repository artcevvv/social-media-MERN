import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'

const app= express();
const CONNECTION_URL = 'mongodb+srv://artcevvv:artcevvv123@main.zvfvgby.mongodb.net/?retryWrites=true&w=majority'
const PORT= process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT} \n http://localhost:5000`)))
    .catch((error) => console.log(error.message))


