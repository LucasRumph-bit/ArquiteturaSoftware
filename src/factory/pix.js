const Pagamento = require('./Pagamento');

class Pix extends Pagamento {
    processar(valor) {
        console.log(`Pagamento de R$ ${valor} realizado via PIX.`);
    }
}

module.exports = Pix;