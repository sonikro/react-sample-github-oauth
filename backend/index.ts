import express from "express";
import Axios from "axios";
require("dotenv").config();
const app = express();
var cors = require('cors')
app.use(cors())

app.get("/token", (request, response) => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  Axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: clientId,
      client_secret: clientSecret,
      code: request.query.code
    },
    {
      headers: {
        Accept: "application/json"
      }
    }
  )
    .then(axiosResponse => {
      response.send(axiosResponse.data);
    })
    .catch(error => response.status(401).send("Error exchanging tokens"));
});

const port = process.env.PORT || 3001;
var server = app.listen(port, () => {
  console.log("Backend listening at at http://%s:%s", "localhost", port);
});
