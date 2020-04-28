const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Archery Games'
  });
});

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
