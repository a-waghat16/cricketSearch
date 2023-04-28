import "./App.css";
import Root from "./components/Root/Root";
import Home from "./pages/Home";
import PlayerPage from "./pages/PlayerPage";
import PlayerDetail from "./pages/PlayerDetail";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="playerpage" element={<PlayerPage />} />
      <Route path="playerpage/playerdetail/:id" element={<PlayerDetail />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
