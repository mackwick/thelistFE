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
import Drama from "./components/Drama";
import Horror from "./components/Horror";
import Other from "./components/Other";
import Reality from "./components/Reality";
import Scifi from "./components/Scifi";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="index" element={<Index />} loader={indexLoader} />
      <Route path="comedy" element={<Comedy />} loader={indexLoader} />
      <Route path="drama" element={<Drama />} loader={indexLoader} />
      <Route path="horror" element={<Horror />} loader={indexLoader} />
      <Route path="other" element={<Other />} loader={indexLoader} />
      <Route path="reality" element={<Reality />} loader={indexLoader} />
      <Route path="scifi" element={<Scifi />} loader={indexLoader} />
      <Route path="/:id" element={<Show />} loader={showLoader} />
      <Route path="create" element={<CreateForm />} action={CreateAction} />
      <Route path="update/:id" action={UpdateAction} />
      <Route path="delete/:id" action={DeleteAction} />
    </Route>
  )
);

export default router;
