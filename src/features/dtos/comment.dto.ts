import { UserDTO } from "./user.dto";

export interface CommentDTO {
  id: number;
  comment: string;
  created_at: string;
  user?: UserDTO;
}
