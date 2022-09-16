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

const UpdateProduct = () => {
  let  {project}  = useSelector((state) => state.productDetails);
  let  a  = useSelector((state) => state);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [url, seturl] = useState("");

  const projectId = id;

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = {};

    myForm.name = name;
    myForm.stock = stock;
    myForm.blockchain = blockchain;
    myForm.url = url;

    dispatch(updateProduct(projectId, myForm));
    navigate("/admin/", { replace: true });
  };

  useEffect(() => {
console.log(1)
    if (!project || project?._id !== projectId) {
      dispatch(getProductDetails(projectId))
    } else {
      setName(project.name);
      setStock(project.stock);
      setBlockchain(project.blockchain);
      seturl(project.url);
    }
  }, [dispatch, project,projectId]);

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
                    <option value="">Rol Seç</option>
                    <option value="SOL">SOL</option>
                    <option value="ETH">ETH</option>
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

export default UpdateProduct;
