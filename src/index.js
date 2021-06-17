const express = require('express')
const path = require("path");
const app = express()
var session = require('express-session');
const methordOverride = require("method-override");
const route = require('./routes')
const data = require('./config/connect_db')
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methordOverride("_method"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: 'somesecret', 
  cookie: { maxAge: 1000*60*60 }}));

data.connect()
route(app)


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views" ));

//route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });