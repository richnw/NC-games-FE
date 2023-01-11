import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <Link to={`/`}>
        <h1>NC Games</h1>
      </Link>
      <h2>A place for all your board game reviews</h2>
    </header>
  );
};

export default Header;
