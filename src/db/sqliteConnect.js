const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const util = require('util')

const db = new sqlite3.Database((path.resolve(__dirname, 'db.db')), (err) => {
    if (err) {
        console.error(err.message);
    }
    return db
});

db.run = util.promisify(db.run);
db.get = util.promisify(db.get);
db.all = util.promisify(db.all);

process.on('SIGINT', () => {
    db.close();
    server.close();
});

module.exports = {

    query: (sql, all = true) => {
        try {
            if (all)
                return db.all(sql)
            else
                return db.get(sql)
        } catch (error) {
            throw new Error(error);
        }
    },

    run: (sql) => {
        try {
            return db.run(sql)
        } catch (error) {
            throw new Error(error);
        }
    }
}