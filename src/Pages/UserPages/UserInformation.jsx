import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackgroundIMG from '../../Assests/images/bg-cinema.png';
import ModalNguoiDung from '../../Component/AdminComponent/ModalNguoiDung';
import { layThongTinNguoiDungSua, lichSuDatVe } from '../../Redux/actions/QuanLyNguoiDungAction';

class UserInformation extends Component {

    renderThongTinTaiKhoan = () => {

        let { lichSuDatVeND } = this.props;

        return (
           
                <div className="user--information__content row">
                    <div className="col-4">
                        <h4>Họ và Tên :</h4>
                        <h4>Tài Khoản :</h4>
                        <h4>Email :</h4>
                        <h4>Số Điện Thoại :</h4>
                    </div>

                    <div className="col-8">
                        <h4>{lichSuDatVeND.hoTen}</h4>
                        <h4>{lichSuDatVeND.taiKhoan}</h4>
                        <h4>{lichSuDatVeND.email}</h4>
                        <h4>{lichSuDatVeND.soDT}</h4>
                    </div>
                </div>

        )
    }

    renderLichSu = () => {

        let { lichSuDatVeND } = this.props;

        return lichSuDatVeND.thongTinDatVe && lichSuDatVeND.thongTinDatVe.map((thongTin, index) => {
            return (
                <div key={index}>

                    <p className="text-white">Tên Phim : {thongTin.tenPhim}</p>
                    <p className="text-white">Ngày Đặt : {thongTin.ngayDat}</p>
                    <p className="text-white">Thời Lượng Phim :{thongTin.thoiLuongPhim} phút</p>
                    <p className="text-white">Cụm Rạp : {thongTin.danhSachGhe[0].tenHeThongRap}</p>
                    <p className="text-white">Rạp : {thongTin.danhSachGhe[0].maCumRap}</p>
                    <p className="text-white">Tên Ghế : {thongTin.danhSachGhe[0].tenGhe}</p>
                </div>
            )
        })
    }
    

    render() {

        let { thongTinKHDangNhap,lichSuDatVeND } = this.props;

        return (
            <div className="user--information" style={{ backgroundImage: `url(${BackgroundIMG})` }}>

                <div className="container">

                    <div className="user--information__pannel">
                        <img src={require('../../Assests/images/ocb-banner.jpg')} alt="" />
                    </div>

                    <h3>Thông Tin Khách Hàng</h3>

                    <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">

                            <li className="nav-item">
                                <a className="nav-link active" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Chính Sách</a>
                            </li>

                            <li className="nav-item">
                                {/* Dùng thongTinKHDangNhap lấy từ local để lấy thông tin khách hàng và đặt vé  */}
                                {/* => F5 không bị mất thông tin */}
                                <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" onClick={() => this.props.lichSuDatVe(thongTinKHDangNhap.taiKhoan,thongTinKHDangNhap.maLoaiNguoiDung)}>Thông Tin Khách Hàng</a>
                            </li>

                            <li className="nav-item">

                                {/* Phuong Thuc Lich Su Dat Ve */}
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" >Lịch Sử Đặt Vé</a>
                            </li>

                        </ul>

                        <div className="tab-content" id="myTabContent">

                            {/* Thông Tin Khách Hàng */}
                            <div className="tab-pane fade " id="home" role="tabpanel" aria-labelledby="home-tab">
                            {this.renderThongTinTaiKhoan()}
                            
                             {/* CẬP NHẬT THÔNG TIN */}
                            <button className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={() => this.props.layThongTinNguoiDungSua(lichSuDatVeND)}>Cập Nhật Thông Tin</button>
                            </div>

                            {/* Lịch Sử Đặt Vé */}
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3 >Lịch Sử Đặt Vé</h3>
                                {this.renderLichSu()}
                            </div>

                            {/* Hỗ Trợ */}
                            <div className="tab-pane fade show active text-white" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <h3>Chính Sách</h3>

                                <h4>1.CÁCH THỨC ĐĂNG KÝ TÀI KHOẢN</h4>
                                <p>
                                -Khách hàng có thể đăng ký tài khoản thành viên miễn phí tại www.bhdstar.vn/dang-ky hoặc trên ứng dụng di động BHD Star (iOS hoặc Android)
    
                                -Vui lòng kiểm tra và đảm bảo thông tin cá nhân chính xác trước khi hoàn tất đăng ký tài khoản. Tất cả thông tin ngoại trừ mật khẩu sẽ không thể chỉnh sửa sau khi đăng ký.
    
                                -Nếu có nhu cầu điều chỉnh thông tin cá nhân, quý khách vui lòng gửi email bằng địa chỉ đã đăng ký thành viên đến cskh@bhdstar.vn để được hỗ trợ.
    
                                -Tài khoản thành viên có thể sử dụng ngay sau khi đăng ký.
                                </p>
                                <h4> 2.QUY ĐỊNH VÀ QUYỀN LỢI VỀ CẤP BẬC THÀNH VIÊN</h4>
                                <p>
                                -BHD Star xếp hạng thành viên dựa trên số lần mua vé (sau đây gọi là Visit) trong vòng 01 năm kể từ ngày đăng ký tài khoản
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* MODAL SUA THONG TIN KHACH HANG */}
                    <ModalNguoiDung />

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        thongTinKHDangNhap: state.QuanLyPhimReducer.thongTinKHDangNhap,
        lichSuDatVeND: state.QuanLyPhimReducer.lichSuDatVeND, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinNguoiDungSua: (nguoiDung) => { dispatch(layThongTinNguoiDungSua(nguoiDung)) },
        lichSuDatVe: (taiKhoan,maLoaiNguoiDung) => { dispatch(lichSuDatVe(taiKhoan,maLoaiNguoiDung)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation)



