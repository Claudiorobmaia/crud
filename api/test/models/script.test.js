import request from "supertest";
import app from "../../index.js";

it("Deve mostrar a lista de produtos", async () => {
const resposta = await request(app).get("/produtos");

expect(Array.isArray(resposta.body)).toBe(true);

resposta.body.forEach((produto) => {
    expect(produto).toHaveProperty("nome");
    expect(produto).toHaveProperty("descricao");
    expect(produto).toHaveProperty("preco");
});
});
