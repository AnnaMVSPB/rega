const React = require('react');

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="https://img2.labirint.ru/rcimg/8ed3ec59e94c69c55558909824584e60/960x540/books73/729394/ph_02.jpg?1576499113" alt="Logo" width="70" height="64" className="d-inline-block align-text-top"/>
     FOX
    </a>
  </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Main</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/todos">Todos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/auth/reg">Rega</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

module.exports = Navbar;
