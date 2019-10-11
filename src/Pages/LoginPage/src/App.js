import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route ,Redirect } from 'react-router-dom'
import { AdminTemplate } from './Templates/AdminTemplate';
import QuanLyNguoiDung from './Pages/AdminPages/QLND/QuanLyNguoiDung';
import QuanLyPhim from './Pages/AdminPages/QuanLyPhim';
import TimKiemNguoiDung from './Pages/AdminPages/QLND/TimKiemNguoiDung';
import DanhSachPhim from './Pages/AdminPages/DanhSachPhim';
import QuanLyLichChieu from './Pages/AdminPages/QuanLyLichChieu';
import MainAdminPage from './Pages/AdminPages/MainAdminPage';
import ThonTinAdmin from './Pages/AdminPages/ThonTinAdmin';
import Login from './Pages/LoginPage/Login';
// import Auth from './Component/AdminComponent/Auth';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Switch>

          {/* <Route exact path='/login' component={Login}/> */}

          <AdminTemplate exact path='/' Component={MainAdminPage} /> 
          <AdminTemplate exact path='/thongTinAD' Component={ThonTinAdmin} />

          <AdminTemplate exact path='/quanlyND' Component={QuanLyNguoiDung} />
          <AdminTemplate exact path='/timkiemND' Component={TimKiemNguoiDung} />

          <AdminTemplate exact path='/quanlyPhim' Component={QuanLyPhim} />
          <AdminTemplate exact path='/timkiemND' Component={TimKiemNguoiDung} />
          <AdminTemplate exact path='/danhSachPhim' Component={DanhSachPhim} />
          <AdminTemplate exact path='/themLichChieu' Component={QuanLyLichChieu} />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
