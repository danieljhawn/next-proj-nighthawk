module.exports = {
    "development": {
        "database": "nodejs_login1",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "dialectModule": require('mysql2'),
        "operatorsAliases": false
    },
    "test": {
        "host": "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "dialect": "mysql",
        "dialectModule": require('mysql2'),
        "operatorsAliases": false
    },
    "production": {
        "database": "ylx7dx2klw0gouq3",
        "host": "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "dialect": "mysql",
        "dialectModule": require('mysql2'),
        "operatorsAliases": false
    }
}

