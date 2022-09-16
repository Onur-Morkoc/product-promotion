import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar/Navbar";
import ProductTable from "../../components/Admin/ProductTable/ProductTable";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import "./Product.scss";

const Product = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="create">
          <Link to={`/admin/proje/olustur`}>
            <span>Proje Oluştur</span>
          </Link>
        </div>
        <div className="charts">
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default Product;
