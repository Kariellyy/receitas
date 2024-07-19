export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          Minhas Receitas
        </a>
        <a className="btn btn-success" href="/cadastrar-receita">
          Adiconar receita
        </a>
      </div>
    </nav>
  );
}
