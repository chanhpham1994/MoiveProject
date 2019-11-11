import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
//Admin
import { AdminTemplate } from './Templates/AdminTemplate';
import QuanLyNguoiDung from './Pages/AdminPages/QLND/QuanLyNguoiDung';
import QuanLyPhim from './Pages/AdminPages/QLPHIM/QuanLyPhim';
import TimKiemNguoiDung from './Pages/AdminPages/QLND/TimKiemNguoiDung';
import ChiTietPhim from './Pages/AdminPages/QLPHIM/ChiTietPhim';
import QuanLyLichChieu from './Pages/AdminPages/QLRAP/QuanLyLichChieu';
import MainAdminPage from './Pages/AdminPages/MainAdminPage';
import ThonTinAdmin from './Pages/AdminPages/ThonTinAdmin';
import DanhSachPhim from './Pages/AdminPages/QLPHIM/DanhSachPhim';
import Login from './Pages/LoginPage/Login';
//User

import { HomeTemplate } from './Templates/HomeTemplate.';
import HomePage from './Pages/UserPages/HomePage';
import UserChiTietPhim from './Pages/UserPages/UserChiTietPhim';
import UserDatVe from './Pages/UserPages/UserDatVe';

import UserRap from './Pages/UserPages/UserRap';
import UserInformation from './Pages/UserPages/UserInformation';
import UserLichChieu from './Pages/UserPages/UserLichChieu';
// import Auth from './Component/AdminComponent/Auth';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>

          <HomeTemplate exact path='/' Component={HomePage} />

          <HomeTemplate exact path='/userinfo' Component={UserInformation}/>

          <HomeTemplate exact path='/userchitietphim/:maPhim' Component={UserChiTietPhim}/>

          <HomeTemplate exact path='/lichChieu' Component={UserLichChieu}/>

          <HomeTemplate exact path='/rap' Component={UserRap}/>

          <HomeTemplate exact path='/datve/:maLichChieu' Component={UserDatVe}/>


          <Route exact path='/login' component={Login} />

          <AdminTemplate exact path='/admin' Component={MainAdminPage} />
          <AdminTemplate exact path='/thongTinAD' Component={ThonTinAdmin} />

          <AdminTemplate exact path='/quanlyND' Component={QuanLyNguoiDung} />
          <AdminTemplate exact path='/timkiemND' Component={TimKiemNguoiDung} />

          <AdminTemplate exact path='/quanlyPhim' Component={QuanLyPhim} />
          <AdminTemplate exact path='/danhSachPhim' Component={DanhSachPhim} />
          <AdminTemplate exact path='/chitietphim/:maPhim' Component={ChiTietPhim} />

          <AdminTemplate exact path='/lichchieu' Component={QuanLyLichChieu} />


        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
