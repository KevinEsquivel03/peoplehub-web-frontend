import { jsx as _jsx } from "react/jsx-runtime";
import { AuthProvider } from "./providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
function App() {
  return _jsx(AuthProvider, {
    children: _jsx(RouterProvider, { router: router }),
  });
}
export default App;
