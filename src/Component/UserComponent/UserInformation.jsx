import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackgroundIMG from '../../Assests/images/bg-cinema.png';
import ModalNguoiDung from '../AdminComponent/ModalNguoiDung';
import { layThongTinNguoiDungSua, lichSuDatVe } from '../../Redux/actions/QuanLyNguoiDungAction';

class UserInformation extends Component {


    renderLichSu = () => {
        let {lichSuDatVeND} = this.props;
        
        return lichSuDatVeND.thongTinDatVe && lichSuDatVeND.thongTinDatVe.map((thongTin,index)=>{
            return(
                <div key={index}>
                    <p className="text-white">Tên Phim : {thongTin.tenPhim}</p>
                    <p className="text-white">Ngày Đặt : {thongTin.ngayDat}</p>
                    <p className="text-white">Thời Lượng Phim :{thongTin.thoiLuongPhim}</p>
                    <p className="text-white">Cụm Rạp : {thongTin.ghe.tenHeThongRap}</p>
                    <p className="text-white">Rạp : {thongTin.ghe.maCumRap}</p>
                    <p className="text-white">Tên Ghế : {thongTin.ghe.tenGhe}</p>
                    
                </div>
            )
        })
    }


    render() {

        let { thongTinKHDangNhap } = this.props;

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
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông Tin Khách Hàng</a>
                            </li>
                            <li className="nav-item">

                                {/* Phuong Thuc Lich Su Dat Ve */}
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" onClick={() => this.props.lichSuDatVe(thongTinKHDangNhap.taiKhoan)}>Lịch Sử Đặt Vé</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Hỗ Trợ</a>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">

                            {/* Thông Tin Khách Hàng */}
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="user--information__content row">
                                    <div className="col-4">
                                        <h4>Họ và Tên :</h4>
                                        <h4>Tài Khoản :</h4>
                                        <h4>Email :</h4>
                                        <h4>Số Điện Thoại :</h4>
                                    </div>

                                    <div className="col-8">
                                        <h4>{thongTinKHDangNhap.hoTen}</h4>
                                        <h4>{thongTinKHDangNhap.taiKhoan}</h4>
                                        <h4>{thongTinKHDangNhap.email}</h4>
                                        <h4>{thongTinKHDangNhap.soDT}</h4>
                                    </div>
                                </div>

                                <button className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={() => this.props.layThongTinNguoiDungSua(thongTinKHDangNhap)}>Cập Nhật Thông Tin</button>
                            </div>

                            {/* Lịch Sử Đặt Vé */}
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3 >Lịch Sử Đặt Vé</h3>
                                {this.renderLichSu()}

                            </div>

                            {/* Hỗ Trợ */}
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <h3 >Hỗ Trợ</h3>
                            </div>
                        </div>
                    </div>

                    {/* MODAL SUA THONG TIN KHACH HANG */}
                    {/* <ModalNguoiDung/> */}

                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        thongTinKHDangNhap: state.QuanLyPhimReducer.thongTinKHDangNhap,
        lichSuDatVeND : state.QuanLyPhimReducer.lichSuDatVeND
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinNguoiDungSua: (nguoiDung) => { dispatch(layThongTinNguoiDungSua(nguoiDung)) },
        lichSuDatVe: (taiKhoan) => { dispatch(lichSuDatVe(taiKhoan)) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserInformation)



