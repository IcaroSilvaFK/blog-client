import { ReactNode } from "react";

import styles from "./icon.module.scss";

type InputIconProps = {
  children: ReactNode;
  w?: number;
  h?: number;
};

export function InputIcon(props: InputIconProps) {
  const { children, w, h } = props;

  return (
    <div
      style={{ width: w || 22, height: h || 22 }}
      className={styles.container__icon}
    >
      {children}
    </div>
  );
}
