// pages/index.tsx
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import { Receita } from "@/interfaces/interfaces";

export default function Home() {
  const [receitas, setReceitas] = useState<Receita[]>([]);

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const response = await fetch("/api/listar-receitas");
        const receitasJson: Receita[] = await response.json();
        setReceitas(receitasJson);
      } catch (error) {
        console.error("Erro ao buscar as receitas", error);
      }
    };
    fetchReceitas();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="container">
          <h3 className="text-center mt-4 mb-4">Lista de Receitas</h3>
          <div className="cards d-flex flex-row flex-wrap gap-3 justify-content-center">
            {receitas.map((receita) => (
              <Card key={receita.id} receita={receita} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
