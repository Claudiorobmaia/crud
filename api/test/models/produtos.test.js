import produtos from "../../../api/models/produtos.js";
import { expect } from "@jest/globals";

describe("Testando o modelo produtos", () => {
  const objetoProdutos = {
    nome: "Nativa",
    preco: 100,
    descricao: "descricao",
    imagem: "imagem do produto",
  };

  it("Deve instanciar um novo produto", () => {
    const produto = new produtos(objetoProdutos);

    expect(produto).toEqual(expect.objectContaining(objetoProdutos));
  });
});
