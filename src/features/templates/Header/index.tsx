import { NavLink } from "react-router-dom";
import { Home, Newspaper, PcCase, Circle } from "lucide-react";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container__header}>
      <div>
        <Circle />
        <h1>Untitled UI</h1>
      </div>
      <nav>
        <ul className={styles.container__nav__list}>
          <li>
            <NavLink to="/">
              <Home />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/public">
              <Newspaper />
              Publications
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <PcCase />
              About
            </NavLink>
          </li>
          <li>
            <button></button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
