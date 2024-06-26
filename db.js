/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://postgres:2002@127.0.0.1:5432/lunchly");

db.connect();

module.exports = db;
