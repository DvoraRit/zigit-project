import Info from "./pages/Info";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./BL/PrivateRoute";

const routerDefenition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Login />} />
    <Route exact path="/info" element={<PrivateRoute />}>
      <Route path="/info" element={<Info />} />
    </Route>
      
  </Route>
);
const router = createBrowserRouter(routerDefenition);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
