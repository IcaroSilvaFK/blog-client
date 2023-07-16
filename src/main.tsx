import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import setDefaultOptions from "date-fns/setDefaultOptions";
import ptBr from "date-fns/locale/pt-BR";

import { router } from "./routes";
import "./features/assets/global.scss";

setDefaultOptions({
  locale: ptBr,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
