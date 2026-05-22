const Pagamento = require('./Pagamento');

class Boleto extends Pagamento {
    processar(valor) {
        console.log(`Pagamento de R$ ${valor} realizado via Boleto.`);
    }
}

module.exports = Boleto;