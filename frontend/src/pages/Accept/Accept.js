import React from "react";
import AcceptTable from "../../components/Admin/AcceptTable/AcceptTable";
import Navbar from "../../components/Admin/Navbar/Navbar";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import MetaData from "../../components/MetaData";
import "./Accept.scss";

const Accept = () => {
  return (
    <div className="home">
      <Sidebar />
      <MetaData title={`Onay Bekleyenler`}/>
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <AcceptTable/>
        </div>
      </div>
    </div>
  );
};

export default Accept