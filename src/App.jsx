//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//router
import { Route, Routes } from "react-router-dom";

// pages
import Register from "./pages/Register";

const App = () => {
  return (
    <Routes>
      <Route
        path='/register'
        element={<Register />}
      />
    </Routes>
  );
};

export default App;
