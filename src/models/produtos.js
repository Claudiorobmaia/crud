import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, require: true },
    preco: { type: Number },
    descricao: { type: String },
    imagem: { type: String }

}, { versionKey: false });

const produto = mongoose.model("produtos", produtoSchema);

export default produto;