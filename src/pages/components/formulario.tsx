
import { FormEvent, useState } from "react";

export default function Formulario() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [receita, setReceita] = useState("");
  const [modoPreparo, setModoPreparo] = useState("");

  async function salvar(event: FormEvent) {
    event.preventDefault();

    if (!titulo || !descricao || !receita || !modoPreparo) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const res = await fetch("/api/salvar-receita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, descricao, receita, modoPreparo }),
      });

      if (res.ok) {
        alert("Receita cadastrada com sucesso!");
        setTitulo("");
        setDescricao("");
        setReceita("");
        setModoPreparo("");
      } else {
        alert("Erro ao salvar a receita");
      }
    }
    catch (error) {
      console.error("Erro ao salvar a receita", error);
      alert("Erro ao salvar a receita");
    }
  }
  return (
    <form onSubmit={salvar}>
      <div className="form-group">
        <label htmlFor="titulo">Titulo</label>
        <input
          type="text"
          className="form-control"
          id="titulo"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          className="form-control"
          id="descricao"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="receita">Receita</label>
        <textarea
          className="form-control"
          id="receita"
          value={receita}
          onChange={(event) => setReceita(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mode-de-preparo">Modo de preparo</label>
        <textarea
          className="form-control"
          id="modo-de-preparo"
          value={modoPreparo}
          onChange={(event) => setModoPreparo(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-success w-100 mt-3">
        Salvar
      </button>
    </form>
  );
}
