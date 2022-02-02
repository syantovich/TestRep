const userScheme=require("./schems/user");
const mongoose = require("mongoose");

function create(obj,db,collection) {
// подключение
    mongoose.connect("mongodb://localhost:27017/"+db, {useUnifiedTopology: true, useNewUrlParser: true});
    const User = mongoose.model(collection, userScheme);
    User.create(obj, function (err, doc) {
        mongoose.disconnect();

        if (err) return console.log(err);
        console.log("Сохранен объект user", doc);
    });
}

module.exports = create;