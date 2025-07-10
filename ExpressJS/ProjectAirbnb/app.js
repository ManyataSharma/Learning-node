const path = require('path');
const express = require('express');
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtils");

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
    res.status(404).render('404');
});


const PORT = 3003;
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});