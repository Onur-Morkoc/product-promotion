import React, { useEffect, useState } from "react";
import Navbar from "../../components/Admin/Navbar/Navbar";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import "./UpdateUser.scss";
import {
  MdMailOutline,
  MdOutlineVerifiedUser,
  MdTagFaces,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetails, updateUser } from "../../redux/actions/userAction";

const UpdateUser = () => {
  const {  user } = useSelector((state) => state.userDetails);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
 
  const userId = id;

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = {};

    myForm.name=name
    myForm.email=email
    myForm.role=role

    dispatch(updateUser(userId, myForm));
    navigate("/admin/", { replace: true });
  };

  useEffect(() => {
    if (user && user._id !== userId) {
      console.log(1);
      dispatch(getUserDetails(userId));
    } else {
      console.log(2);
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, [dispatch,user,userId]);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Kullanıcı Ekle</h2>
              <form
                className="updateProfileForm"
                onSubmit={updateUserSubmitHandler}
              >
                <div className="updateProfileName">
                  <MdTagFaces />
                  <input
                    type="text"
                    placeholder="Ad"
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
                    name="E-Mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MdMailOutline />
                  <input
                    type="passaword"
                    placeholder="Şifre"
                    name="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <MdOutlineVerifiedUser />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="">Rol Seç</option>
                    <option value="Admin">Admin</option>
                    <option value="Yetkili">Yetkili</option>
                    <option value="User">User</option>
                  </select>
                </div>
                <input
                  type="submit"
                  value="Güncelle"
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

export default UpdateUser;
