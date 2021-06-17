const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://admin:XGVlcXbv9rG4z02D@cluster0.e5o6x.mongodb.net/filmDB?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connect success!!!");
  } catch (error) {
    console.log("Connect fail!!!");
  }
}

module.exports = { connect };
