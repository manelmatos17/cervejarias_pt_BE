import mongoose from "mongoose";

const CervejariaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  localizacao: { type: String, required: true },
  descricao: String,
  cervejasDisponiveis: [String],
  eventos: [String]
});

export default mongoose.model("Cervejaria", CervejariaSchema);
