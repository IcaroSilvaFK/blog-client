import { useLoaderData } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

import { Post } from "../../features/dtos/posts.dto";
import { Header, FirstPostCard } from "../../features/templates";
import { CardPost, InputRoot } from "../../features/components";

import styles from "./styles.module.scss";

export function Home() {
  const { posts } = useLoaderData() as { posts: Post[] };
  const firstPost = posts.at(0)!;

  return (
    <div className={styles.container_home}>
      <Header />
      <form>
        <InputRoot.Container>
          <InputRoot.Input placeholder="Digite seu email para receber notificações de novas pulbicações..." />
          <InputRoot.Button>
            <InputRoot.Icon>
              <BiSearch size={22} />
            </InputRoot.Icon>
          </InputRoot.Button>
        </InputRoot.Container>
      </form>
      <section className={styles.home_first_section}>
        <FirstPostCard {...firstPost} />
        <ul>
          {posts.map((post) => (
            <CardPost key={post.id} {...post} />
          ))}
        </ul>
      </section>
    </div>
  );
}
