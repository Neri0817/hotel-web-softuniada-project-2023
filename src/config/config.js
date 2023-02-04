const config = {
    production: {
        PORT: 2222,
        DB_URI: 'mongodb://localhost:27017/hotel'
    },
    development: {
        PORT: 3000,
        DB_URI: 'mongodb://localhost:27017/hotelApp'
    }
}

module.exports = config[process.env.node_env || 'development'];