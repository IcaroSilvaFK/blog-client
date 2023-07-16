import { forwardRef, InputHTMLAttributes } from "react";

import styles from "./input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input className={styles.container__input} ref={ref} {...props} />;
});
