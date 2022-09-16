import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Chart from '../../components/Admin/Chart/Chart'
import Navbar from '../../components/Admin/Navbar/Navbar'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import UserTable from '../../components/Admin/UserTable/UserTable'
import Widget from '../../components/Admin/Widget/Widget'
import "./Dashboard.scss"

const Home = () => {

  const widgetsArray = [
    { title: "Projeler", counter: 24, link: "Tüm Projeler", percentage: 20 },
    { title: "Yeni Projeler", counter: 24, link: "Tüm Projeler", percentage: 20 },
    { title: "Bekleyen Projeler", counter: 24, link: "Tüm Projeler", percentage: 20 }
  ]



  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget data={widgetsArray}/>
        </div>
        <div className="charts">
         <UserTable/>
          <Chart title="Son 30 Gün (Proje)" aspect={2 / 1}/>
        </div>
      </div>
    </div>
  )
}

export default Home