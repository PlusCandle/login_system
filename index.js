var express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require("./routes/");

app.listen(3000, () => {
    console.log(`Server is running on PORT ${PORT}`);
})