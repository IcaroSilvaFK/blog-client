export interface Post {
  id: number;
  user_id: number;
  title: string;
  slug: string;
  thumb: string;
  content: string;
  created_at: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    thumb: string;
  };
  comments: {
    id: number;
    comment: string;
    created_at: string;
  }[];
}
