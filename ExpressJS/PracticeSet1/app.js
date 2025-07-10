const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const HomeRouter = require('./routes/HomeRouter');
const ContactRouter = require('./routes/ContactRouter');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));


app.use(HomeRouter);
app.use(ContactRouter);
app.use(ContactRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
