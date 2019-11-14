import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { settings } from '../../Common/Config/Setting';
import { daDangNhap } from '../../Redux/actions/QuanLyNguoiDungAction';


class AdminSideBar extends Component {

  componentDidMount = () => {

    //LẤY THÔNG TIN TỪ LOCALSTORAGE CỦA NGƯỜI DÙNG ĐÃ ĐĂNG NHẬP TỪ TRƯỚC

    const thongTin = JSON.parse(localStorage.getItem(settings.userLogin));
    if (thongTin !== '' && thongTin !== null) {
      this.props.daDangNhap(thongTin);
    }

  }

  render() {

    let { thongTinKHDangNhap } = this.props;

    return (

      <div className='sidebar'>
        <div className='sidebar--content' style={{ height: '100%' }}>
          <div className="sidebar--content__admin card  d-flex justify-content-center align-items-center border-black ">

            <NavLink to='/thongTinAD'>
              <img className="rounded-circle" src={require('../../Assests/images/hello--cat--admin.jpg')} width={100} height={100} alt='' />
            </NavLink>

            <div className="card-body">
              <h4 className="card-title text-center">Xin Chào {thongTinKHDangNhap.taiKhoan}</h4>

              <div className='login--info text-center'>
                <button className='btn btn-success rounded-circle mr-2'>

                  <NavLink to='/thongTinAD'>
                    <i className="fa fa-user-tie text-white"></i>
                  </NavLink>

                </button>
                <button className='btn btn-danger rounded-circle'>
                  <NavLink to='/login'> <i className="fa fa-power-off text-white"></i></NavLink>
                </button>
              </div>

            </div>
          </div>

          <div className="sidebar--menu ml-2">

            <div>
              <i className="fa fa-users"></i>
              <span>
                Quản Lý Người Dùng
                </span>

              <ul>
                <li>
                  <i className="fa fa-user-plus"></i>
                  <NavLink to='/quanlyND'>Thêm Người Dùng</NavLink>
                </li>
                <li>
                  <i className="fa fa-user-edit"></i>
                  <NavLink to='/timkiemND'>Tìm Kiếm Người Dùng</NavLink>
                </li>
              </ul>
            </div>

            <div>
              <i className="fa fa-film"></i>
              <span>
                Quản Lý Phim
                </span>
              <ul>
                <li>
                  <i className="fa fa-file-import"></i>
                  <NavLink to="/quanlyPhim">  Thêm Phim </NavLink>
                </li>
                <li>
                  <i className="fa fa-list"></i>
                  <NavLink to="/danhSachPhim">  Danh Sách Phim </NavLink>

                </li>
              </ul>
            </div>

            <div>
              <i className="fa fa-calendar-alt"></i>
              <span>

                Quản Lý Lịch Chiếu
                </span>
              <ul>
                <li>
                  <i className="fa fa-calendar-plus"></i>
                  <a href=''>  Thông Tin Lịch Chiếu  </a>
                </li>

              </ul>
            </div>

            <div>
              <i className="fa fa-chart-area"></i>
              <span>
                Sơ Đồ
                </span>
              <ul>
                <li>
                  <i className="fa fa-coins"></i>
                  <a >  Doanh Thu  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    thongTinKHDangNhap: state.QuanLyPhimReducer.thongTinKHDangNhap
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    daDangNhap: (thongTin) => { dispatch(daDangNhap(thongTin)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSideBar);