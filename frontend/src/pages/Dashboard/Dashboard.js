import React from 'react'
import Chart from '../../components/Admin/Chart/Chart'
import Navbar from '../../components/Admin/Navbar/Navbar'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import UserTable from '../../components/Admin/UserTable/UserTable'
import Widget from '../../components/Admin/Widget/Widget'
import "./Dashboard.scss"

const Home = () => {

  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget/>
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