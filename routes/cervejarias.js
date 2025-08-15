import express from "express";
import Cervejaria from "../models/Cervejaria.js";

const router = express.Router();

// GET todas as cervejarias
router.get("/", async (req, res) => {
  try {
    const cervejarias = await Cervejaria.find();
    res.json(cervejarias);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar cervejarias" });
  }
});

export default router;

// POST uma nova cervejaria
router.post("/", async (req, res) => {
    try {
      const { nome, localizacao, descricao, cervejasDisponiveis, eventos } = req.body;
  
      // Criar nova cervejaria
      const novaCervejaria = new Cervejaria({
        nome,
        localizacao,
        descricao,
        cervejasDisponiveis,
        eventos
      });
  
      const salvaCervejaria = await novaCervejaria.save();
      res.status(201).json(salvaCervejaria);
    } catch (err) {
      res.status(500).json({ error: "Erro ao adicionar cervejaria" });
    }
  });
  