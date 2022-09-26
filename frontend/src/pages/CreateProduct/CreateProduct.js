import React, { useState } from "react";
import Navbar from "../../components/Admin/Navbar/Navbar";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import "./CreateProduct.scss";
import {
  MdMailOutline,
  MdOutlineVerifiedUser,
  MdTagFaces,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createProduct,
} from "../../redux/actions/productAction";
import MetaData from "../../components/MetaData";

const CreateProduct = () => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [stock, setStock] = useState("");
  const [link, setLink] = useState("");
  const [avatar, setAvatar] = useState();
  const [type, setType] = useState();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    const myForm = {};

    myForm.name = name;
    myForm.blockchain = blockchain;
    myForm.stock = stock;
    myForm.link = link;
    myForm.avatar = avatar
    myForm.type = type


    dispatch(createProduct(myForm));

    navigate("/admin/projeler", { replace: true });
  };

  const updateProfileDataChange =async (e) => {
    
    
    const file = e.target.files[0];

    if(file)  {

      setType(file.type.split("/")[1])

     let gif = await convertBase64(file);

      setAvatar(gif);
    }
   

  };

  return (
    <div className="home">
      <Sidebar />
      <MetaData title={`NFT Oluştur`}/>
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Proje Ekle</h2>
              <form className="updateProfileForm" onSubmit={registerSubmit}>
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
                    type="number"
                    placeholder="Adet"
                    required
                    name="Adet"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MdMailOutline />
                  <input
                    type="text"
                    placeholder="Link"
                    required
                    name="Adet"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
                <div>
                  <MdOutlineVerifiedUser />
                  <select
                    value={blockchain}
                    onChange={(e) => setBlockchain(e.target.value)}
                  >
                    <option value="">Blockchain Seç</option>
                    <option value="ETH">ETH</option>
                    <option value="SOL">SOL</option>
                  </select>
                </div>
                <div id="updateProfileImage">
                  <img src={avatar} alt="Avatar Resmi" />
                  <input
                    type="file"
                    name="images"
                    accept="image/*"
                    onChange={(e)=>updateProfileDataChange(e)}
                  />
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

export default CreateProduct;
