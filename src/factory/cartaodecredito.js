const Pagamento = require('./Pagamento');

class CartaoCredito extends Pagamento {
    processar(valor) {
        console.log(`Pagamento de R$ ${valor} realizado no Cartão de Crédito.`);
    }
}

module.exports = CartaoCredito;