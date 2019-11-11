import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import UserLogin from './UserLogin';
import { connect } from 'react-redux';
import { dangXuat, daDangNhap } from '../../Redux/actions/QuanLyNguoiDungAction';
import { settings } from '../../Common/Config/Setting'

class UserHeader extends Component {

    componentDidMount = () => {

        //LẤY THÔNG TIN TỪ LOCALSTORAGE CỦA NGƯỜI DÙNG ĐÃ ĐĂNG NHẬP TỪ TRƯỚC

        const thongTin = JSON.parse(localStorage.getItem(settings.userLogin));
        if (thongTin !== '') {
            this.props.daDangNhap(thongTin);
        }

    }

    render() {

        let { thongTinKHDangNhap } = this.props;

        return (
            <header className='user--header'>
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="user--header__navbar navbar-nav mr-auto">
                            {/* DropDown */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Menu
                                </a>
                                <div className="dropdown-menu user--header__menu" aria-labelledby="navbarDropdown">
                                    <a href="#lichChieu" className="dropdown-item">Lịch Chiếu</a>
                                    <NavLink to='/rap' className="dropdown-item" >Hệ Thống Rạp</NavLink>
                                    <a className="dropdown-item" >Khuyến Mãi / Sự Kiện</a>
                                    <a className="dropdown-item" >Tuyển Dụng</a>
                                    <a className="dropdown-item" >Rạp Đặc Biệt</a>
                                </div>
                            </li>

                            <li className="nav-item active">
                                <NavLink to='/lichChieu' className="nav-link" >Lịch Chiếu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/rap" className="nav-link">Mua Vé Theo Rạp</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* LANGUAGE */}
                    <div className="user--header__language">
                        <a className="">VN | EN<span className="sr-only">(current)</span></a>
                    </div>

                    {/* LOGO RAP */}
                    <div className="user--header__logo">
                        <NavLink to='/'><img className='rounded-circle' src={require('../../Assests/images/BHDStar_Logo_Tron.png')} alt="logo" /></NavLink>
                    </div>

                    {/* HOTLINE */}
                    <div className="user--header__hotline">
                        <a className=""><i className="fa fa-phone-volume"></i><span> 1900 2099</span></a>
                    </div>


                    <div className="user--header__line">
                        <img src={require('../../Assests/images/line-header1.png')} alt="" />
                    </div>


                    {/* RIGHT_NAVBAR */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="user--header__TTKH  navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link">BHD STAR MEMBER<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">GÓP Ý</a>
                            </li>

                            {/* Thông tin đăng nhập rỗng hiển thị nút đăng nhập */}
                            {thongTinKHDangNhap === '' ?

                                //HIỂN THỊ NÚT ĐĂNG NHẬP
                                <button className='btn btn-success button--login' data-toggle="modal" data-target="#modelLogin">Đăng Nhập</button> :

                                //HIỂN THỊ THÔNG TIN KHÁCH HÀNG SAU KHI ĐĂNG NHẬP

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Hello! {thongTinKHDangNhap.taiKhoan}
                                    </a>

                                    <div className="dropdown-menu user--header__TTKH__menu" aria-labelledby="navbarDropdown">

                                        <NavLink className="dropdown-item" to="/userinfo">Thông Tin Khách Hàng</NavLink>

                                        <a className="dropdown-item text-danger" onClick={() => this.props.dangXuat()} >Đăng Xuất</a>

                                    </div>
                                </li>
                            }
                        </ul>
                    </div>
                </nav>

                {/* LOGIN/LOGUP MODAL */}
                <UserLogin />

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
    dangXuat: () => { dispatch(dangXuat()) },
    daDangNhap: (thongTin) => { dispatch(daDangNhap(thongTin)) }

})


export default connect(mapStateToProps, mapDispatchToProps)(UserHeader)