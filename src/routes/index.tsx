import { createBrowserRouter } from "react-router-dom";

import { Home, PostPage } from "../pages";
import { Post } from "../features/dtos/posts.dto";

import { httpClient } from "../utils/clientHttp";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
    loader: async () => {
      const data = await httpClient.get<Post[]>("/posts/home?limit=4");

      return {
        posts: data,
      };
    },
  },
  {
    path: "/post/:id",
    element: <PostPage />,
    loader: async ({ params }) => {
      const { id } = params;

      const post = await httpClient.get(`/posts/${id!}`);

      return {
        post,
      };
    },
  },
]);
