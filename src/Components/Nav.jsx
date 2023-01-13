import { useEffect, useState } from "react";
import * as api from "../api";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);

  return (
    <nav className="Nav">
      {categories.map((category) => (
        <Link to={`/${category.slug}`} className="NavLink" key={category.slug}>
          {category.slug}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
