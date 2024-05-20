const express = require("express");
const { commonRoute } = require("./common/route.js");

const app = express();
const cors = require("cors");
const port=process.env.port
app.use(express.json());
app.use(cors());

app.use(commonRoute);

app.listen(port, () => {
  console.log(`running on port http://localhost:5000`);
});
