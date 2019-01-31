// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server...')
    }
    console.log('Connected to MongoDB server!');

    // find one and update
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c52321d5c696450489c9ea1")
    }, {
        $set: {
            name: "Jamie"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // find one and update
    /*     db.collection('Todos').findOneAndUpdate({
            _id: new ObjectID("5c53452d2700da58b4e24b0d")
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        }); */


    // db.close();
});