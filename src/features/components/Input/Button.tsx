import { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./button.module.scss";

type InputButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function InputButton(props: InputButtonProps) {
  const { children } = props;

  return (
    <button className={styles.container__button} {...props}>
      {children}
    </button>
  );
}
