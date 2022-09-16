import React, { useEffect, useState } from 'react'
import Navbar from "../../components/Admin/Navbar/Navbar";
import "./Login.scss";
import { MdMailOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/userAction';

const Login = () => {

    const dispatch = useDispatch();

    let navigate = useNavigate();
  
    const { isAuthenticated  } = useSelector((state) => state.user);
  
  
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
  
  
    const loginSubmit = (e) => {
      e.preventDefault();
      dispatch(login(loginEmail, loginPassword));
    };


  
    useEffect(() => {
  
      if (isAuthenticated) {
        
         navigate(`/admin`, { replace: true });
  
      }
    }, [dispatch, navigate, isAuthenticated]);

    
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Giriş Yap</h2>
              <form className="updateProfileForm" encType="multipart/form-data" onSubmit={loginSubmit}>
                <div className="updateProfileEmail">
                  <MdMailOutline />
                  <input
                    type="email"
                    placeholder="E-Mail"
                    required
                    name="E-Mail"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MdMailOutline />
                  <input
                    type="password"
                    placeholder="Şifre"
                    required
                    name="Şifre"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Giriş"
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

export default Login;
