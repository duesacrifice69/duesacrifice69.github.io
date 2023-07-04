const express = require("express");
const app = express();
const path = require("path");
const port = 80;
const cors = require("cors");
const corsOptions = {
  origin: "http://127.0.0.1:5500",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");

const publicDir = path.join(__dirname, "../public");
app.use(express.static(publicDir));

app.get("/*", (req, res) => {
  sendFile(res, "index.html");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}/`);
});

function sendFile(res, file) {
  return res.sendFile(path.join(__dirname, "../pages/" + file));
}
