import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import Show from "./pages/Show";
import { indexLoader, showLoader } from "./loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} loader={indexLoader} />
      <Route path="/:id" element={<Show />} loader={showLoader} />
    </Route>
  )
);

export default router;
