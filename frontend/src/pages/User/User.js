import React from "react";
import { Link } from "react-router-dom";

import AdminTable from "../../components/Admin/AdminTable/AdminTable";
import Navbar from "../../components/Admin/Navbar/Navbar";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import "./User.scss";

const User = () => {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="create">
        <div className="create">
          <Link to={`/admin/kullanici/olustur`}>
            <span>Kullanıcı Oluştur</span>
          </Link>
        </div>
        </div>
        <div className="charts">
          <AdminTable/>
        </div>
      </div>
    </div>
  );
};

export default User;
