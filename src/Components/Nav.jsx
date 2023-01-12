import { useEffect, useState } from "react";
import * as api from "../api";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.getCategories().then(({ genres }) => {
      setCategories(genres);
    });
  }, []);
  return <section>Category Users</section>;
};

export default Nav;
