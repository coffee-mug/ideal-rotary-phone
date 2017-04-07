// Update with your config settings.

module.exports = {
    'development': {
        client: 'sqlite3',
        connection: {
          filename: './database.sqlite'
        }
    },
    'mysql': {
        client: 'mysql',
        connection: {
            host     : '127.0.0.1',
            user     : 'root',
            password : '',
            database : 'tereza',
            multipleStatements: true
        }
        ,
        useNullAsDefault: true
    },
    'production': {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        ssl: true,
        migrations: {
            tableName: 'migrations'
        } 
    }
};
