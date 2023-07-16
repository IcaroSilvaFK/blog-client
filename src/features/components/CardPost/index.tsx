import { formatDistance } from "date-fns";
import { Post } from "../../dtos/posts.dto";

import styles from "./styles.module.scss";

export function CardPost(props: Post) {
  const { content, title, user, id, created_at, slug, thumb } = props;

  const distance = formatDistance(new Date(created_at), new Date(), {
    addSuffix: true,
  });

  return (
    <li className={styles.container_card_post}>
      <img src={thumb} alt={title} />
      <div>
        <header>
          <span>{user.firstName}</span>
          <div />
          <span>{distance}</span>
        </header>
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <footer>
          <span>{slug}</span>
        </footer>
      </div>
    </li>
  );
}
