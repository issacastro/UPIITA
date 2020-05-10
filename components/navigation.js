import Link from "next/link";
const Navigation = ({ page }) => {
  var status = ["", "", ""];
  if (page == "Index") status[0] = "active";
  if (page == "About") status[1] = "active";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link href="/">
        <a className="navbar-brand">Appweb</a>
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
            <a className={`nav-item nav-link ${status[0]}`}>Home</a>
          </Link>
          <Link href="/about">
            <a className={`nav-item nav-link ${status[1]}`}>About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
