const dbConnection  = require('./connection');
const Author = require('../models/books/author');
const Genre = require('../models/books/genre');
const Book = require('../models/books/book');
const Client = require('../models/client/client');
const Employee = require('../models/employee/employee');
const TypeEmployee = require('../models/employee/typeEmployee');

dbConnection.sync({ force: true })
.then(() =>{
    console.log('Tables created succesfuly');
})
.catch((err) =>{
    console.error(`Error in create tables ${err}`);
});

