import { formatDistance } from "date-fns";
import { CommentDTO } from "../../dtos/comment.dto";
import styles from "./styles.module.scss";

export function CardComment(props: CommentDTO) {
  const { comment, created_at, id, user } = props;

  const diff = formatDistance(new Date(created_at), new Date(), {
    addSuffix: true,
  });

  return (
    <li className={styles.container__card_comment}>
      <img src={user?.thumb} alt={user?.firstName} />
      <div>
        <div>
          <span>{user?.firstName}</span>
          <div />
          <span>{diff}</span>
        </div>
        <p>{comment}</p>
      </div>
    </li>
  );
}
