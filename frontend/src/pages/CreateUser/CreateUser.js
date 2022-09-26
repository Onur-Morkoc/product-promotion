import React, { useState } from "react";
import Navbar from "../../components/Admin/Navbar/Navbar";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import "./CreateUser.scss";
import {
  MdMailOutline,
  MdOutlineVerifiedUser,
  MdTagFaces,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/userAction";
import MetaData from "../../components/MetaData";

const CreateUser = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const myForm = {};

  const registerSubmit = (e) => {
    e.preventDefault();

    myForm.name = name;
    myForm.email = email;
    myForm.password = password;
    myForm.role = role;

    dispatch(register(myForm));

    navigate("/admin/kullanicilar", { replace: true });
  };


  return (
    <div className="home">
      <Sidebar />
      <MetaData title={`Kullanıcı Oluştur`}/>
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Kullanıcı Ekle</h2>
              <form
                className="updateProfileForm"
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <div className="updateProfileName">
                  <MdTagFaces />
                  <input
                    type="text"
                    placeholder="Ad"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MdMailOutline />
                  <input
                    type="email"
                    placeholder="E-Mail"
                    required
                    name="E-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MdMailOutline />
                  <input
                    type="password"
                    placeholder="Şifre"
                    required
                    name="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <MdOutlineVerifiedUser />
                  <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">Rol Seç</option>
                    <option value="Admin">Admin</option>
                    <option value="Yetkili">Yetkili</option>
                    <option value="User">User</option>
                  </select>
                </div>
                <input
                  type="submit"
                  value="Kaydet"
                  className="updateProfileBtn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
