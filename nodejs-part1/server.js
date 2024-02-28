const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middle-ware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

const viewersRoutes = require("./routes/Viewer");

app.use("/viewers", viewersRoutes);

app.listen(port, () => {
  console.log("Listening on port:", port);
});
