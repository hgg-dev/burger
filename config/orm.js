var connection = require("./connection.js");

// selectAll()
// insertOne()
// updateOne()

var orm = {
    selectAll: function(column, table){
        var queryString = "Select * From burgers"

        connection.query(queryString,
            function (err, resSQL) {
                if (err) throw err;
                console.log('Result',resSQL);
            }
        )
    },
    insertOne: function(burgerName){
        var queryString = "insert into  burgers (burger_name, devoured) values (?, 'n')"

        connection.query(queryString, [burgerName],
            function (err, resSQL) {
                if (err) throw err;
                console.log('Result done');
            }
        )
    },
    updateOne: function(burgerName, devoured){
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