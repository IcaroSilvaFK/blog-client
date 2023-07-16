import { useLoaderData } from "react-router-dom";
import { Post } from "../../features/dtos/posts.dto";
import { Header, FirstPostCard } from "../../features/templates";

import styles from "./styles.module.scss";

export function Home() {
  const { posts } = useLoaderData() as { posts: Post[] };
  const firstPost = posts.at(0)!;

  return (
    <div className={styles.container_home}>
      <Header />
      <FirstPostCard {...firstPost} />
    </div>
  );
}
