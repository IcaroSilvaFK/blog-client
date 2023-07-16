import { createBrowserRouter } from "react-router-dom";

import * as Pages from "../pages";
import { Post } from "../features/dtos/posts.dto";

export const router = createBrowserRouter([
  {
    index: true,
    element: <Pages.Home />,
    loader: async () => {
      const data = await fetch("http://localhost:8000/api/posts/home");
      const json = (await data.json()) as Promise<Post[]>;

      return {
        posts: json,
      };
    },
  },
]);
