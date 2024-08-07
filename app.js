import express from "express";
import conectaNaDatabase from "./src/config/dbConnect.js";
import routes from "./src/routes/index.js";
import cors from "cors";


const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!!!");
});

const app = express();
app.use(cors("*"));
routes(app);



app.delete("/produtos/:id", (req, res) => {
  const index = buscaProduto(req.params.id);
  produtos.splice(index, 1);
  res.status(200).send("Produto removido com sucesso");
});

export default app;

