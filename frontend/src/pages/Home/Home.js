import React, { useEffect } from "react";
import Card from "../../components/User/Card/Card";
import Disclamier from "../../components/User/Disclamier/Disclamier";
import Footer from "../../components/User/Footer/Footer";
import Navbar from "../../components/User/Navbar/Navbar";
import OurExperience from "../../components/User/OurExperience/OurExperience";
import "./Home.scss";

import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";

const Home = () => {
  const {projects} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="cards">
          <Card project={projects} />
        </div>
        <div className="disclamier-info">
          <Disclamier />
        </div>
        <div className="ourexperience-info">
          <OurExperience />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
