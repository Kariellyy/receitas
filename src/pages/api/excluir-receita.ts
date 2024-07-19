import { NextApiRequest, NextApiResponse } from "next";
import { database } from "@/services/firebase";
import { ref, remove } from "firebase/database";

export default async function deletarReceita(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.body;

    if (!id) {
      res.status(400).json({ message: "Informe o id da receita!" });
      return;
    }

    try {
      const receitaRef = ref(database, `receitas/${id}`);
      await remove(receitaRef);
      res.status(200).json({ message: "Receita excluída com sucesso!" });
    } catch (error) {
      console.error("Erro ao excluir a receita", error);
      res.status(500).json({ message: "Erro ao excluir a receita" });
    }
  } else {
    res.setHeader("Allow", "DELETE");
    res.status(405).end("Method Not Allowed");
  }
}