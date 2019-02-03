const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


User.findById('5c535a57e1dabbac16d9833b').then((user) => {
    if (!user) {
        return console.log('Unable to find user')
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});

/* var id = "5c547198eba7ebb846f75fc9";

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos: ', JSON.stringify(todos, undefined, 2));
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('ID not found');
    }
    console.log('Todo by ID', todo);
}).catch((e) => console.log(e)); */