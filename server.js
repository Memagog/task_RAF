const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT =  5000;
const doc = require('./routes/rout');

const config = require('./config/key');
const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:3000"
  };
app.use(cors(corsOptions));

app.use('/doc', doc);
app.use(bodyParser.json());


mongoose.connect(
    config.mongoUrl
    , {useNewUrlParser: true}
)
.then(()=> console.log("MongoDb successfully connected"))
.catch( err => console.log(err));

const port = process.env.PORT || 5000;

app.listen( port, () => console.log(`Server has been started ${port}!`));
