var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var path= require("path");
var express = require('express');
var cors = require('cors');
var app = express();
var url = 'mongodb://admin:jyothi123@ds137703.mlab.com:37703/mongosiri';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname +'/'));
app.post('/register', function (req, res) {
    MongoClient.connect(url, function(err, client) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        var db =client.db('mongosiri')
        insertDocument(db, req.body, function() {
            res.write("Successfully inserted");
            res.end();
        });
    });
});
app.post('/search', function (req, res) {
    MongoClient.connect(url, function(err, client) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        var db =client.db('mongosiri')
        search(db, req.body, function() {
            res.write("Successfully Retrieved");
            res.end();
        });
    });
});
var insertDocument = function(db, data, callback) {
    db.collection('Students').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Inserted a document into the Users collection.");
        callback();

    });
};
var search = function(db,callback){
    var cursor = db.collection('Students').find({"major": "data science"});
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.log("Class ID:" + doc.ClassID);
            console.log("First Name:" + doc.sname);
            console.log("Course:" + doc.course);
            console.log("Major:" + doc.major);
            console.log("Minor:" + doc.minor);
        }
    });
};
var server = app.listen(8081,'localhost',function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});