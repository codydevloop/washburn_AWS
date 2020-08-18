const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const dotenv = require('dotenv');
dotenv.config();
const atlas = "mongodb+srv://"+process.env.REACT_APP_DB_USERNAME+":"+process.env.REACT_APP_DB_PW+"@cluster0.fbrxu.mongodb.net/washburn_db?retryWrites=true&w=majority"
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB  Susie Atlas


// Connect to the Mongo DB  Cody Atlas

mongoose.connect(process.env.MONGODB_URI || atlas, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

  
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
