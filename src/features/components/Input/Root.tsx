import { ReactNode } from "react";

import styles from "./root.module.scss";

type InputRootProps = {
  children: ReactNode;
};

export function InputRoot(props: InputRootProps) {
  const { children } = props;

  return <div className={styles.container__root}>{children}</div>;
}
