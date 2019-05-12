var orm = require("../config/orm.js");

var burger = {
    all: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    create: function (cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function (res) {
            callback(res);
        });
    },
    update: function (objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;