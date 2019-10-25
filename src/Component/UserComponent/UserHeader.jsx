import React, { Component } from 'react'
import UserPromotion from './UserPromotion'

export default class UserHeader extends Component {
    render() {
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

                        <button className='btn btn-success'>Đăng Nhập</button>
                    </div>
                </nav>

                 {/* LOGO RAP */}
                 <div className="user--header__logo">
                        <img className='rounded-circle' src={require('../../Assests/images/BHDStar_Logo_Tron.png')} alt="logo" />
                    </div>

                    <div className="user--header__line">
                        <img src={require('../../Assests/images/line-header1.png')} alt="" />
                    </div>

                {/* ICON PHU */}
                <div className='user--header__icon'>
                        <img src={require('../../Assests/images/ngaiheo.png')} alt=""/>
                        <img src={require('../../Assests/images/madai.png')} alt=""/>
                </div>

            </header>
        )
    }
}
