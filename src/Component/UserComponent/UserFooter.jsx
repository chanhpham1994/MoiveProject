import React, { Component } from 'react'

export default class UserFooter extends Component {
    render() {
        return (
            <footer className="user--footer">

                <div className="user--footer__line">
                    <img src={require('../../Assests/images/line-header1.png')} alt="" />
                </div>

                <div className="user--footer__content">
                    <div className="container">

                        <div className="row">

                            <div className="col-4 col-md-4">
                                <h4>GIỚI THIỆU</h4>
                                <ul>
                                    <li><i className="fa fa-angle-double-right icon"></i>Về Chúng Tôi</li>
                                    <li><i className="fa fa-angle-double-right icon"></i>Thoả Thuận Sử Dụng</li>
                                    <li><i className="fa fa-angle-double-right icon"></i>Quy Chế Hoạt Động</li>
                                    <li><i className="fa fa-angle-double-right icon"></i>Chính Sách Bảo Mật</li>
                                    <li>
                                        <img src={require('../../Assests/images/Bo-Cong-Thuong-3.png')} alt="" />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4 col-md-4">
                                <h4>GÓC ĐIỆN ẢNH</h4>
                                <ul>
                                    <li><i className="fa fa-angle-double-right icon"></i>Thể Loại Phim</li>
                                    <li><i className="fa fa-angle-double-right icon"></i>Bình Luận Phim</li>
                                    <li><i className="fa fa-angle-double-right icon"></i>Blog Điện Ảnh</li>
                                    <li><i className="fa fa-angle-double-right icon"></i>Phim Hay Tháng</li>
                                </ul>
                            </div>
                            <div className="col-4 col-md-4">
                                <h4>HỖ TRỢ</h4>
                                <ul>
                                    <li><i className="fa fa-angle-double-right icon"></i>Góp Ý</li>
                                    <li><i className="fa fa-angle-double-right icon"></i>Sale & Services</li>
                                    <li><i className="fa fa-angle-double-right icon"></i>Rạp / Giá Vé</li>
                                    <li><i className="fa fa-angle-double-right icon"></i>Tuyển Dụng</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="user--footer__address">
                    <div className="container ">
                        <p>
                            <span>
                                <img src={require('../../Assests/images/BHDStar_Logo_Tron.png')} width={40} height={40} alt="" />
                            </span>
                            Công Ty Cổ Phần Phim Thiên Ngân, Tầng 5, Toà Nhà Mặt Trời Sông Hồng, 23 Phan Chu Trinh, Phường Phan Chu Trinh, Quận Hoàn Kiếm, Hà Nội
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}
