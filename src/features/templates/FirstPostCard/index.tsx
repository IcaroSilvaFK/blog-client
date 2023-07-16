import { formatDistance } from "date-fns";

import styles from "./styles.module.scss";

type FirstPostCardProps = {
  thumb: string;
  title: string;
  slug: string;
  id: number;
  content: string;
  created_at: string;
};

export function FirstPostCard(props: FirstPostCardProps) {
  const { content, id, slug, thumb, title, created_at } = props;

  const distance = formatDistance(new Date(created_at), new Date(), {
    addSuffix: true,
  });

  return (
    <div className={styles.container_first_post_card}>
      <header>
        <img src={thumb} alt={title} />
      </header>
      <div>
        <span>{distance}</span>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <footer>
        <div>
          <span>{slug}</span>
        </div>
        <a href={`/posts/${id}`}>Read more</a>
      </footer>
    </div>
  );
}
