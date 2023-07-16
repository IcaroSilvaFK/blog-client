import { NavLink } from "react-router-dom";
import { FaCircleNotch } from "react-icons/fa";
import { BiSolidHome } from "react-icons/bi";
import { LuPcCase } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container__header}>
      <div>
        <FaCircleNotch size={24} />
        <h1>Untitled UI</h1>
      </div>
      <nav>
        <ul className={styles.container__nav__list}>
          <li>
            <NavLink to="/">
              <BiSolidHome size={22} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/public">
              <FiFileText size={22} />
              Publications
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <LuPcCase size={22} />
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
