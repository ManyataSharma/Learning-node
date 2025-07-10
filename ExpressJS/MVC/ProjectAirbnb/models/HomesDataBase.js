const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtils');

// fake daabase
let registeredHomes = [];

module.exports = class Home {
    constructor(houseName, price, location, rating, photoURL) {
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.photoURL = photoURL;
    }

    save() {
        Home.fetchAll((registeredHomes) => {
            registeredHomes.push(this);
            const homeDataPath = path.join(rootDir, 'data', 'home.json');
            fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
                console.log("file writing concluded", error);
            });
        })
    }

    static fetchAll(callback) {
        const homeDataPath = path.join(rootDir, 'data', 'home.json');
        fs.readFile(homeDataPath, (err, data) => {
            if (err) {
                registeredHomes = [];
            }
            registeredHomes = JSON.parse(data);

            callback(registeredHomes);
        });
    }
}