import Link from "next/link";
const Navigation = ({ page }) => {
  var status = ["", "", ""];
  if (page == "Index") status[0] = "active";
  if (page == "App") status[1] = "active";
  if (page == "Analisis") status[2] = "active";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link href="/">
        <a className="navbar-brand">UPIITA</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link href="/">
            <a className={`nav-item nav-link ${status[0]}`}>Proyecto</a>
          </Link>
          <Link href="/app">
            <a className={`nav-item nav-link ${status[1]}`}>App</a>
          </Link>
          <Link href="/analisis">
          <a className={`nav-item nav-link ${status[2]}`}>Analisis</a>
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
