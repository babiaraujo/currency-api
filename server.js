const express = require('express');
const bodyParser = require('body-parser');
const currencyRoutes = require('./routes/currency');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', currencyRoutes);

app.listen(port, () => {
    console.log(`Currency converter API listening at http://localhost:${port}`);
});
