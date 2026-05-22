const CartaoCredito = require('./cartaodecredito');
const Pix = require('./pix');
const Boleto = require('./boleto');

class PagamentoFactory {
    static criarPagamento(tipo) {
        switch (tipo.toLowerCase()) {
            case 'cartao':
                return new CartaoCredito();

            case 'pix':
                return new Pix();

            case 'boleto':
                return new Boleto();

            default:
                throw new Error('Forma de pagamento inválida');
        }
    }
}

module.exports = PagamentoFactory;