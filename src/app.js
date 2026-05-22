const DatabaseConnection = require('./singleton/DatabaseConnection');
const PagamentoFactory = require('./factory/PagamentoFactory');
const PedidoBuilder = require('./builder/PedidoBuilder');

console.log('===== SINGLETON =====');

const conexao1 = DatabaseConnection.getInstance();
const conexao2 = DatabaseConnection.getInstance();

console.log(conexao1 === conexao2);

console.log('\n===== FACTORY METHOD =====');

const pagamentoPix = PagamentoFactory.criarPagamento('pix');
pagamentoPix.processar(150);

const pagamentoCartao = PagamentoFactory.criarPagamento('cartao');
pagamentoCartao.processar(300);

const pagamentoBoleto = PagamentoFactory.criarPagamento('boleto');
pagamentoBoleto.processar(500);

console.log('\n===== BUILDER =====');

const pedido = new PedidoBuilder()
    .adicionarItem('Notebook')
    .adicionarItem('Mouse')
    .setEndereco('Rua das Flores, 123')
    .setPagamento('PIX')
    .build();

console.log(pedido);