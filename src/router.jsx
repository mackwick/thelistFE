import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Landing";
import Show from "./pages/Show";
import { indexLoader, showLoader } from "./loaders";
import { CreateAction, DeleteAction, UpdateAction } from "./actions";
import CreateForm from "./components/CreateForm";
import Index from "./components/Index";
import Comedy from "./components/Comedy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="index" element={<Index />} loader={indexLoader} />
      <Route path="comedy" element={<Comedy />} loader={indexLoader} />
      <Route path="/:id" element={<Show />} loader={showLoader} />
      <Route path="create" element={<CreateForm />} action={CreateAction} />
      <Route path="update/:id" action={UpdateAction} />
      <Route path="delete/:id" action={DeleteAction} />
    </Route>
  )
);

export default router;
