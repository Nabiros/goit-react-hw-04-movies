import { NavLink } from "react-router-dom";
import styled from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styled.nav}>
    <NavLink
      exact
      to="/"
      className={styled.link}
      activeClassName={styled.activeLink}
    >
      Home page
    </NavLink>
    <NavLink
      to="/movies"
      className={styled.link}
      activeClassName={styled.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
