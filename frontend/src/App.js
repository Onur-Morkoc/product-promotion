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

        <Route path="/admin/login" element={
          <Login />
        }></Route>

        <Route path="/admin/onaybekleyenler" element={<ProtectedRoute isAdmin={true}><Accept /></ProtectedRoute>}></Route>

        <Route path="/admin/projeler" element={<ProtectedRoute isAdmin={true}><Product /></ProtectedRoute>}></Route>
        <Route path="/admin/proje/olustur" element={<ProtectedRoute isAdmin={true}><CreateProduct /></ProtectedRoute>}></Route>
        <Route path="/admin/proje/:id" element={<ProtectedRoute isAdmin={true}><UpdateProduct /></ProtectedRoute>}></Route>

        <Route path="/admin/kullanicilar" element={<ProtectedRoute isAdmin={true}><User /></ProtectedRoute>}></Route>
        <Route path="/admin/kullanici/olustur" element={<ProtectedRoute isAdmin={true}><CreateUser /></ProtectedRoute>}></Route>
        <Route path="/admin/kullanici/:id" element={<ProtectedRoute isAdmin={true}><UpdateUser /></ProtectedRoute>}></Route>
      </Routes>
    </>
  );
}

export default App;
