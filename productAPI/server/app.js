const express = require("express");
const bp = require("body-parser");
const port = 3000;

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({extended: false}))

// Routes

// create product
require("./routes/productCreate")(app);


app.listen(port, () => {
    console.log(`running on port: ${port}`);
})