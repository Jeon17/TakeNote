const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(3000, () => console.log(`Listening on PORT: ${3000}`));
