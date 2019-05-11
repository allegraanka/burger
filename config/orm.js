var connection = require("../config/connection.js");

function printQs(n) {
    var array = [];
    for (var i = 0; i > n; i++) {
        array.push("?");
    }
    return array.toString();
}

function convertObjToSql(obj) {
    var array = [];
    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj,key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = `'${value}'`;
            }
            array.push(`${key}=${value}`);
        }
    }
    return array.toString();
}

var orm = {
    selectAll: function(tableName, callback) {
        var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            callback(res);
        });
    },
    insertOne: function(tableName, cols, vals, callback) {
        var queryString = `INSERT INTO ${tableName}`;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQs(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    },
    updateOne: function() {
        // update code here
    }
}

module.exports = orm;