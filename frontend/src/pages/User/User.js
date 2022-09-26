import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AdminTable from "../../components/Admin/AdminTable/AdminTable";
import Navbar from "../../components/Admin/Navbar/Navbar";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import MetaData from "../../components/MetaData";
import "./User.scss";

const User = () => {

  const { user } = useSelector((state) => state.user);

  return (
    <div className="home">
      <MetaData title={`Kullanıcılar`}/>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {user?.role === "Admin" &&
            <div className="create">
              <Link to={`/admin/kullanici/olustur`}>
                <span>Kullanıcı Oluştur</span>
              </Link>
            </div>
        }
        <div className="charts">
          <AdminTable />
        </div>
      </div>
    </div>
  );
};

export default User;
