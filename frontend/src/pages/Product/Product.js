import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/Admin/Navbar/Navbar";
import ProductTable from "../../components/Admin/ProductTable/ProductTable";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import MetaData from "../../components/MetaData";
import "./Product.scss";

const Product = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="home">
      <Sidebar />
      <MetaData title={`NFT`}/>
      <div className="homeContainer">
        <Navbar />
        {(user?.role==="Yetkili" || user?.role==="Admin") &&
                <div className="create">
                <Link to={`/admin/proje/olustur`}>
                  <span>Proje Oluştur</span>
                </Link>
              </div>
        }
        <div className="charts">
          <ProductTable />
        </div>
      </div>
    </div>
  );
};

export default Product;
