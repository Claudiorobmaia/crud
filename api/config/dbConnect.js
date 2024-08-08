// import mongoose, { mongo } from "mongoose";

// async function conectaNaDatabase() {
//     mongoose.connect(process.env.MONGODB_URI);
//     return mongoose.connection;
// };

// export default conectaNaDatabase;


import mongoose from "mongoose";

async function conectaNaDatabase() {
    try {
        if (mongoose.connection.readyState === 0) { // Verifica se já não está conectado
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // Adicione outras opções aqui, se necessário
            });
            console.log("Conectado ao MongoDB");
        } else {
            console.log("Já conectado ao MongoDB");
        }
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar no MongoDB:", error);
        throw error; // Rejeita a promessa com o erro
    }
};

export default conectaNaDatabase;

