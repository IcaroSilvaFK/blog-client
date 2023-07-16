import { useLoaderData } from "react-router-dom";
import { formatDistance } from "date-fns";

import { Post } from "../../features/dtos/posts.dto";
import { Footer, Header } from "../../features/templates";
import { CardComment } from "../../features/components";

import styles from "./styles.module.scss";

export function PostPage() {
  const { post } = useLoaderData() as { post: Post };

  const diff = formatDistance(new Date(post.created_at), new Date(), {
    addSuffix: true,
  });

  return (
    <main className={styles.container__post}>
      <Header />

      <section className={styles.post__content_section}>
        <header>
          <h1>{post.title}</h1>
          <div>
            <img src={post.user.thumb} alt={post.user.firstName} />
            <div>
              <span>
                {post.user.firstName} {post.user.lastName}
              </span>
              <div />
              <span>{diff}</span>
            </div>
          </div>
        </header>
        <article>
          <img src={post.thumb} alt={post.title} />
          <span>{post.slug}</span>
        </article>
        <div>
          <p>{post.content}</p>
        </div>
        <ul>
          {post?.comments.map((comment) => (
            <CardComment key={comment.id} {...comment} />
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
