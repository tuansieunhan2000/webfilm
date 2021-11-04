const express = require('express')
const path = require("path");
const app = express()
var session = require('express-session');
const methordOverride = require("method-override");
const route = require('./src/routes')
const data = require('./src/config/connect_db')
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "src/public")));
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

data.connect();
app.get('/donggop', function (req, res) {
  res.render('donate')
})
app.get('/nguon', function (req, res) {
  res.render('trangnguon')
})
route(app)


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views" ));


//route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });