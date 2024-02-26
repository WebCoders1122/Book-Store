//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//router
import { Route, Routes } from "react-router-dom";

// pages
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<h3>Home page</h3>}
      />
      <Route
        path='/register'
        element={<Register />}
      />
      <Route
        path='/signin'
        element={<SignIn />}
      />
    </Routes>
  );
};

export default App;
