import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  MdOutlineDashboard,
  MdOutlineSupervisedUserCircle,
  MdOutlineProductionQuantityLimits,
  MdListAlt,
  MdNotificationsNone,
  MdLogout,
  MdOutlineMenuOpen,
  MdOutlineMenu,
} from "react-icons/md";
import "./Sidebar.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(true);

  const MenuItems = [
    {
      name: "Dashboard",
      title: "ANA",
      smallTitle: "ANA",
      icon: <MdOutlineDashboard className="icon" />,
      url: "/",
      click: dashboardHandler,
    },
    {
      name: "Kullanıcılar",
      title: "LİSTELER",
      smallTitle: "LİSTE",
      icon: <MdOutlineSupervisedUserCircle className="icon" />,
      url: "/kullanicilar",
      click: userHandler,
    },
    {
      name: "Projeler",
      icon: <MdOutlineProductionQuantityLimits className="icon" />,
      url: "/projeler",
      click: projectHandler,
    },
    {
      name: "Onay Bekleyenler",
      icon: <MdListAlt className="icon" />,
      url: "/onaybekleyenler",
      click: acceptHandler,
    },
    {
      name: "Bildirimler",
      title: "YÖNETİM",
      smallTitle: "YÖNET",
      icon: <MdNotificationsNone className="icon" />,
      url: "/bildirimler",
      click: notHandler,
    },
    {
      name: "Çıkış Yap",
      icon: <MdLogout className="icon" />,
      click: logoutHandler,
    },
  ];

  function dashboardHandler() {
  
    navigate(`/admin`, { replace: true });
  }
  function userHandler() {
    
    navigate(`/admin/kullanicilar`, { replace: true });
  }
  function projectHandler() {
    
    navigate(`/admin/projeler`, { replace: true });
  }
  function acceptHandler() {
   
    navigate(`/admin/onaybekleyenler`, { replace: true });
  }
  function notHandler() {

    navigate(`/admin/bildirimler`, { replace: true });
  }
  function logoutHandler() {
    dispatch(logout());
    navigate(`/`, { replace: true });
  }

  const Menu = MenuItems.map((item) => {
    let id = uuidv4();
    return (
      <Fragment key={id.toString()}>
        {item.title && (
          <p className="title">{menuOpen ? item.title : item.smallTitle}</p>
        )}
        <li onClick={item.click}>
          <div className="d">{item.icon}</div>
          <span>{item.name}</span>
        </li>
      </Fragment>
    );
  });

  const menuHandler = () => setMenuOpen((prev) => !prev);

  return (
    <div className={menuOpen ? "sidebar" : "sidebar small"}>
      <div className="top">
        {menuOpen && <span className="logo">ON ADMİN</span>}
        {menuOpen ? (
          <MdOutlineMenu className="hamburgerMenu" onClick={menuHandler} />
        ) : (
          <MdOutlineMenuOpen className="hamburgerMenu" onClick={menuHandler} />
        )}
      </div>
      <div className="middle">
        <ul>{Menu}</ul>
      </div>
    </div>
  );
};

export default Sidebar;
