const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const app = express();

const PORT  = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URL, {
        }).then(() => console.log("Ava Banking solution is online"))
          .catch((e) => console.log(e))



app.use(express.json());
const userRoute = require("./routes/userData")
app.use(userRoute)

if(process.env.NODE_ENV == "production") {
  app.use(express.static("p84/build"));
}

app.listen(PORT,() => console.log(`PORT is running at ${PORT}`))