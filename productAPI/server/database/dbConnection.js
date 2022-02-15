const mongoose = require = require("mongoose");
const uri = "mongodb+srv://admin:admin@productproject.z6uqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

try {
    mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        mongoose.Promise = global.Promise;
        console.log("connected to mongodb")
    })
} catch (error) {
    console.log(error);
    console.log("could not connect");    
}

module.exports = mongoose;