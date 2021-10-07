import styled from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  <nav className={styled.nav}>
    <NavLink to="/" className={styled.link} activeClassName={styled.activeLink}>
      Home page
    </NavLink>
    <NavLink
      to="/about"
      className={styled.link}
      activeClassName={styled.activeLink}
    >
      About
    </NavLink>
  </nav>;
};
