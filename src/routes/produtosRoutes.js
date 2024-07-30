import express from "express";
import ProdutoController from "../controlers/produtoController.js";

const routes = express.Router();

routes.get("/produtos", ProdutoController.listaProdutos);
routes.get("/produtos/:id", ProdutoController.listaProdutoPorId);
routes.post("/produtos", ProdutoController.cadastrarProduto);
routes.put("/produtos/:id", ProdutoController.atualizarProduto);
routes.delete("/produtos/:id", ProdutoController.excluirProduto);


export default routes;
