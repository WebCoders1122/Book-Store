//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//router
import { Route, Routes } from "react-router-dom";

// components
import BookNavBar from "./components/BookNavBar";

// pages
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import ListingPage from "./pages/ListingPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <BookNavBar />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/signin'
          element={<SignIn />}
        />
        <Route
          path='/book/list'
          element={<ListingPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
