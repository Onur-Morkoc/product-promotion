import { Route, Routes } from "react-router-dom";
import "./App.css";
import Collections from "./pages/Collections/Collections";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import User from "./pages/User/User";
import Product from "./pages/Product/Product";
import Accept from "./pages/Accept/Accept";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import CreateUser from "./pages/CreateUser/CreateUser";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Login from "./pages/Login/Login";
import store from "./redux/store";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/userAction";
import { useSelector } from "react-redux";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);


  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/collections" element={<Collections />}></Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/admin/login" element={<Login />}></Route>

        <Route path="/admin/onaybekleyenler" element={<Accept />}></Route>

        <Route path="/admin/projeler" element={<Product />}></Route>
        <Route path="/admin/proje/olustur" element={<CreateProduct />}></Route>
        <Route path="/admin/proje/:id" element={<UpdateProduct />}></Route>

        <Route path="/admin/kullanicilar" element={<User />}></Route>
        <Route path="/admin/kullanici/olustur" element={<CreateUser />}></Route>
        <Route path="/admin/kullanici/:id" element={<UpdateUser />}></Route>
      </Routes>
    </>
  );
}

export default App;
