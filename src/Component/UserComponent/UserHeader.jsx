import React, { Component } from 'react';
import UserPromotion from './UserPromotion';
import { NavLink } from 'react-router-dom';
import UserLogin from './UserLogin';
import { connect } from 'react-redux';
import { dangXuat } from '../../Redux/actions/QuanLyNguoiDungAction';

class UserHeader extends Component {

    render() {

        let {thongTinKHDangNhap} = this.props;

        return (
            <header className='user--header'>

                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="user--header__navbar navbar-nav mr-auto ">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menu
                                </a>
                                <div className="dropdown-menu user--header__menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" >Lịch Chiếu</a>
                                    <a className="dropdown-item" >Hệ Thống Rạp</a>
                                    <a className="dropdown-item" >Khuyến Mãi / Sự Kiện</a>
                                    <a className="dropdown-item" >Tuyển Dụng</a>
                                    <a className="dropdown-item" >Rạp Đặc Biệt</a>
                                </div>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link">Lịch Chiếu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Mua Vé Theo Rạp</a>
                            </li>
                        </ul>

                        <ul className="user--header__navbar navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link user--header__detail"><i className="fa fa-phone-volume"></i><span className="text-white"> 1900 2099</span></a>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="user--header__navbar navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link user--header__detail">VN | EN<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>

                        <ul className="user--header__navbar navbar-nav ml-auto">

                            <li className="nav-item active">
                                <a className="nav-link">BHD STAR MEMBER<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">GÓP Ý</a>
                            </li>
                        </ul>

                        {thongTinKHDangNhap === '' ?


                            //HIỂN THỊ NÚT ĐĂNG NHẬP
                            <button className='btn btn-success button--login' data-toggle="modal" data-target="#modelLogin">Đăng Nhập</button> :
                            
                            //HIỂN THỊ THÔNG TIN KHÁCH HÀNG SAU KHI ĐĂNG NHẬP
                            <ul className="user--header__TTKH">
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Hello! {thongTinKHDangNhap.taiKhoan}
                                </a>
                                    <div className="dropdown-menu user--header__TTKH__menu" aria-labelledby="navbarDropdown">

                                        <NavLink className="dropdown-item" to="/userinfo"> Thông Tin Khách Hàng</NavLink> 

                                        <a className="dropdown-item text-danger" onClick={() => this.props.dangXuat()} >Đăng Xuất</a>

                                    </div>
                                </li>
                            </ul>

                        }
                    </div>
                </nav>


                {/* LOGIN/LOGUP MODAL */}
                <UserLogin />

                {/* LOGO RAP */}
                <div className="user--header__logo">
                    <NavLink to='/'><img className='rounded-circle' src={require('../../Assests/images/BHDStar_Logo_Tron.png')} alt="logo" /></NavLink>
                </div>

                <div className="user--header__line">
                    <img src={require('../../Assests/images/line-header1.png')} alt="" />
                </div>

                {/* ICON PHU */}
                <div className='user--header__icon'>
                    <img src={require('../../Assests/images/ngaiheo.png')} alt="" />
                    <img src={require('../../Assests/images/madai.png')} alt="" />
                </div>

            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        thongTinKHDangNhap: state.QuanLyPhimReducer.thongTinKHDangNhap
    }
}

const mapDispatchToProps = (dispatch) => ({
    dangXuat: () => { dispatch(dangXuat()) }
})


export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)