const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.SERVERPORT || 5000;
require('dotenv').config();
require('./config/database');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/', require('./routes/urls'));
app.use('/api', require('./routes/urls'));

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});
