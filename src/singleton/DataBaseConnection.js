class DatabaseConnection {
    static instance;

    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }

        console.log('Conectando ao banco de dados...');
        this.connection = 'Banco conectado';

        DatabaseConnection.instance = this;
    }

    static getInstance() {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }

        return DatabaseConnection.instance;
    }
}

module.exports = DatabaseConnection;