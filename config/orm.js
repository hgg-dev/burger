var connection = require("./connection.js");


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "Select * From burgers" + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            // console.log('Result', resSQL);
            cb(result);
        });
    },
    toEatList: function (tableInput, cb) {
        var queryString = "Select * From burgers Where devoured = 'n'" + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            // console.log('Result', resSQL);
            cb(result);
        });
    },
    insertOne: function (burgerName, cb) {
        var queryString = "insert into burgers (burger_name, devoured) values (?, 'n')"

        connection.query(queryString, [burgerName], function (err, resSQL) {
            if (err) {
                throw err;
            }
            console.log('Result done');
        }
        )
    },
    update: function (burgerName, cb) {
        // not done
        console.log("orm update: " + burgerName);
        var queryString = "update burgers set devoured = 'y' where burger_name = '" + [burgerName] + "' ";

        // "INSERT INTO wishes (wish) VALUES ('"+ [req.body.task] +"')", function(err, result) 

        connection.query(queryString, [burgerName],
            function (err, resSQL) {
                if (err) throw err;
                console.log('Result done');
            }
        )
    }

};
module.exports = orm;