import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";
import "dotenv/config";


const PORT = 3000;
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

app.listen(PORT, () => {
  console.log("servidor escutando!");
});

export default app;

