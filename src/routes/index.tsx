import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages";
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
]);
