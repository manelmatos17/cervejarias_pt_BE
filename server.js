import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Rota teste
app.get("/", (req, res) => {
  res.send("API Cervejarias PT funcionando 🍺");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
