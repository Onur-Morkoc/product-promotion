import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AdminTable from "../../components/Admin/AdminTable/AdminTable";
import Navbar from "../../components/Admin/Navbar/Navbar";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import { deleteUser, getAllUsers } from "../../redux/actions/userAction";
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
