import { NextApiRequest, NextApiResponse } from "next";
import { ref, get } from "firebase/database";
import { database } from "@/services/firebase";
import { Receita } from "@/interfaces/interfaces";

export default async function listarReceitas(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const receitasRef = ref(database, "receitas");
      const receitasSnapshot = await get(receitasRef);

      if (receitasSnapshot.exists()) {
        const receitas = receitasSnapshot.val();
        const receitasArray: Receita[] = Object.keys(receitas).map((key) => ({
          id: key,
          titulo: receitas[key].titulo,
          descricao: receitas[key].descricao,
          receita: receitas[key].receita,
          modoPreparo: receitas[key].modoPreparo,
        }));

        res.status(200).json(receitasArray);
      }
    } catch (error) {
      console.error("Erro ao listar as receitas", error);
      res.status(500).json({ message: "Erro ao listar as receitas" });
    }
  } else {
    res.setHeader("Allow", "GET");
    res.status(405).end("Method Not Allowed");
  }
}
