import { Receita } from "@/interfaces/interfaces";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

interface CardProps {
  receita: Receita | undefined; // Ajuste para permitir `undefined`
}

export default function Card({ receita }: CardProps) {
  const router = useRouter();

  // Verifique se receita está definido
  if (!receita) {
    return <div>Receita não encontrada</div>;
  }

  const visualizarReceita = () => {
    router.push({
      pathname: '/visualizar-receita',
      query: { 
        id: receita.id,
        titulo: receita.titulo,
        descricao: receita.descricao,
        receita: receita.receita,
        modoPreparo: receita.modoPreparo
      }
    });
  }

  return (
    <div className={`${styles.card} card`}>
      <img
        className={`${styles.cardImg} card-img-top`}
        src="/comida.png"
        alt="Imagem de capa do card"
      />
      <div className="card-body">
        <h5 className="card-title">{receita.titulo}</h5>
        <p className="card-text">
          {receita.descricao}
        </p>
        <button className="btn btn-success w-100" onClick={visualizarReceita}>
          Visualizar Receita
        </button>
      </div>
    </div>
  );
}
