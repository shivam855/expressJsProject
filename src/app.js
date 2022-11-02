const express  = require("express");
const path  = require("path");
const hbs = require("hbs");
const requests = require("requests");

const app = express();
// const port = process.env.PORT || 8000;   using in this way for dynamic port no. if we are using any service
const port = process.env.PORT || 8000

const publicPath = path.join(__dirname,"../public");
const template = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

app.use(express.static(publicPath));

app.set("view engine", "hbs");
app.set("views", template);

hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/temp", (req, res) => {
    res.render("temp");
});

app.get("/thanks", (req, res) => {
    res.render("thanks");
});

app.get("*", (req, res) => {
    res.send("Opp's its a 404 page");
});

app.listen(port,() => {
    console.log(`we are listening at ${port}`);
});
