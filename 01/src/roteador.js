const express = require('express');
const { buscarProdutos, detalharProduto, calcularfrete } = require('./controlador/produtos');

const rotas = express();

rotas.get('/produtos', buscarProdutos );
rotas.get('/produtos/:idProduto', detalharProduto );
rotas.get('/produtos/:idProduto/frete/:cep', calcularfrete )





module.exports= rotas;