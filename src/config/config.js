const config = {
    production: {
        PORT: 2222,
        DB_URI: 'mongodb://localhost:27017/hotel',
        SECRET: 'F.O.U.R.secret',
        ONE_DAY: 1000 * 60 * 60 * 24
    },
    development: {
        PORT: 3000,
        DB_URI: 'mongodb://localhost:27017/hotelApp',
        SECRET: 'F.O.U.R.secret',
        ONE_DAY: 1000 * 60 * 60 * 24
    }
}

module.exports = config[process.env.node_env || 'development'];