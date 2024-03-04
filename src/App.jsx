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
import BookDetails from "./pages/BookDetails";
import ViewOrders from "./pages/ViewOrders";
import OrderDetails from "./pages/OrderDetails";

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
          path='/books/list'
          element={<ListingPage />}
        />
        <Route
          path='/books/:bookId'
          element={<BookDetails />}
        />
        <Route
          path='/books/orders'
          element={<ViewOrders />}
        />
        <Route
          path='/books/orders/:bookId'
          element={<OrderDetails />}
        />
      </Routes>
    </div>
  );
};

export default App;
