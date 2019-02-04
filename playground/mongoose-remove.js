const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({ _id: '5c5895a99c77863a1f6c8835' }).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5c5895a99c77863a1f6c8835').then((todo) => {
    console.log(todo);
});