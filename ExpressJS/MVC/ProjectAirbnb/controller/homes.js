const Home = require("../models/HomesDataBase");

exports.getAddHome = (req, res, next) => {
    res.render('add-home', { currentPage: 'add-Home' });
};

exports.postAddHome = (req, res, next) => {
    const home = new Home(req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoURL);
    home.save();

    res.render('homeAdded', { currentPage: 'homeAdded' });
};

exports.getHome = (req, res, next) => {
    Home.fetchAll((registeredHomes) =>
        res.render('home', { registeredHomes })
    );
};
