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
    insertOne: function (burgerName,cb) {
        var queryString = "insert into burgers (burger_name, devoured) values (?, 'n')"

        connection.query(queryString, [burgerName], function (err, resSQL) {
                if (err) {
                    throw err;
                }
                console.log('Result done');
            }
        )
    },
    updateOne: function (burgerName, devoured) {
        // not done
        var queryString = "insert into  burgers (burger_name, devoured) values (?, 'n')"

        connection.query(queryString, [burgerName],
            function (err, resSQL) {
                if (err) throw err;
                console.log('Result done');
            }
        )
    }

};
module.exports = orm;