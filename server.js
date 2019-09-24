const express = require('express');
require('dotenv/config');

const PORT = process.env.PORT || 8080;

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser);

app.use((err, req, res, next) => {
  res.sendStatus(500);
  console.log(err);
  if(err.fatal) {
    process.exit(1);
  }
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
