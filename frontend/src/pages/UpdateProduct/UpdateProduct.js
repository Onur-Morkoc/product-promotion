import React, { useEffect, useState } from "react";
import Navbar from "../../components/Admin/Navbar/Navbar";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import "./UpdateProduct.scss";
import {
  MdMailOutline,
  MdOutlineVerifiedUser,
  MdTagFaces,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductDetails,
  updateProduct,
} from "../../redux/actions/productAction";
import MetaData from "../../components/MetaData";

const UpdateProduct = () => {
  let { project } = useSelector((state) => state.productDetails);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [url, seturl] = useState("");
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

  const projectId = id;

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = {};

    myForm.name = name;
    myForm.blockchain = blockchain;
    myForm.stock = stock;
    myForm.link = url;
    myForm.avatar = avatar
    myForm.type = type

    dispatch(updateProduct(projectId, myForm));
    navigate("/admin/", { replace: true });
  };

  const updateProfileDataChange = async (e) => {


    const file = e.target.files[0];

    if (file) {

      setType(file.type.split("/")[1])

      let gif = await convertBase64(file);

      setAvatar(gif);
    }


  };

  useEffect(() => {

    if (project && project?._id !== projectId) {

      dispatch(getProductDetails(projectId))
    } else {

      setName(project.name);
      setStock(project.stock);
      setBlockchain(project.blockchain);
      seturl(project.url);

      let image = ""
      try {
          image = require(`../../card-images/${project.name}-${project.type}.${project.type}`)

      } catch (error) {
          image = ""
      }
      setAvatar(image);
      console.log(image)
    }
  }, [dispatch, project, projectId]);

  return (
    <div className="home">
      <Sidebar />
      <MetaData title={`${name} NFT G??ncelle`}/>
      <div className="homeContainer">
        <Navbar />
        <div className="charts">
          <div className="updateProfileContainer">
            <div className="updateProfileBox">
              <h2 className="updateProfileHeading">Kullan??c?? Ekle</h2>
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
                    type="number"
                    placeholder="Stock"
                    name="Stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="updateProfileEmail">
                  <MdMailOutline />
                  <input
                    type="text"
                    placeholder="URL"
                    name="url"
                    value={url}
                    onChange={(e) => seturl(e.target.value)}
                  />
                </div>
                <div>
                  <MdOutlineVerifiedUser />
                  <select
                    value={blockchain}
                    onChange={(e) => setBlockchain(e.target.value)}
                  >
                    <option value="">Rol Se??</option>
                    <option value="SOL">SOL</option>
                    <option value="ETH">ETH</option>
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
                  value="G??ncelle"
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

export default UpdateProduct;
