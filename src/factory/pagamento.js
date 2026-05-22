class Pagamento {
    processar(valor) {
        throw new Error('Método processar deve ser implementado');
    }
}

module.exports = Pagamento;