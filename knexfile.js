// Update with your config settings.

module.exports = {
    'development': {
        client: 'sqlite3',
        connection: {
          filename: './database.sqlite3'
        },
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
