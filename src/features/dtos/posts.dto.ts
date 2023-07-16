import { CommentDTO } from "./comment.dto";
import { UserDTO } from "./user.dto";

export interface Post {
  id: number;
  user_id: number;
  title: string;
  slug: string;
  thumb: string;
  content: string;
  created_at: string;
  user: UserDTO;
  comments: CommentDTO[];
}
