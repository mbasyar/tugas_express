const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRouter=require('./src/routes/productRoute');

const app = express();

dotenv.config();

if (dotenv.error) {
   throw dotenv.error;
}

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("database connected");
    })
    .catch((error) => {
        console.log(error);
    });

    app.use('/product', productRouter)

app.listen(process.env.PORT, () => {
    console.log(`server jalan di Port ${process.env.PORT}`);
});
