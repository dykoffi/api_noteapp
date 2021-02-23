const { Client } = require('pg')
if (process.env.DATABASE_URL) {
    pg = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    });
} else {
    pg = new Client({
        user: 'oscav',
        host: 'localhost',
        database: 'noteapp',
        password: '1234'
    })
}
pg.connect((err) => { err && console.log(err) })
module.exports = pg