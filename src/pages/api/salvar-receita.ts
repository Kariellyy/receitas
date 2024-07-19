import { database } from "@/services/firebase";
import { ref, push } from "firebase/database";
import { NextApiRequest, NextApiResponse } from "next";

export default async function salvarReceita(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { titulo, descricao, receita, modoPreparo } = req.body;

    if (!titulo || !descricao || !receita || !modoPreparo) {
      res.status(400).json({ message: "Preencha todos os campos!" });
      return;
    }

    try {
      const receitaRef = ref(database, "receitas");
      await push(receitaRef, {
        titulo,
        descricao,
        receita,
        modoPreparo,
      });

      res.status(201).json({ message: "Receita cadastrada com sucesso!" });
    } catch (error) {
      console.error("Erro ao salvar a receita", error);
      res.status(500).json({ message: "Erro ao salvar a receita" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
