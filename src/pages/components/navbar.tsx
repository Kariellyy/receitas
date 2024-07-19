import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Minhas Receitas
        </Link>
        <Link className="btn btn-success" href="/cadastrar-receita">
          Adiconar receita
        </Link>
      </div>
    </nav>
  );
}
