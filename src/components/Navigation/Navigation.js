import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  <nav>
    <NavLink to="/" className={styled.link}>
      Главная
    </NavLink>
    <NavLink to="/about">About</NavLink>
  </nav>;
};
