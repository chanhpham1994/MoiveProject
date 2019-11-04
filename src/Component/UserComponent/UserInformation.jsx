import React, { Component } from 'react';
import { connect } from 'react-redux';
import BackgroundIMG from '../../Assests/images/bg-cinema.png';
import ModalNguoiDung from '../AdminComponent/ModalNguoiDung';
import { layThongTinNguoiDungSua, lichSuDatVe } from '../../Redux/actions/QuanLyNguoiDungAction';

class UserInformation extends Component {


    render() {

        let { thongTinKHDangNhap } = this.props;

        return (
            <div className="user--information" style={{ backgroundImage: `url(${BackgroundIMG})` }}>

                <div className="container">

                    <div className="user--information__pannel">
                        <img src={require('../../Assests/images/ocb-banner.jpg')} alt="" />
                    </div>

                    <h3>Thông Tin Khách Hàng</h3>

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


                    <button className="btn btn-warning mr-2" onClick={() => this.props.lichSuDatVe(thongTinKHDangNhap.taiKhoan)}>Lịch Sử Đặt Vé</button>


                    <button className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={() => this.props.layThongTinNguoiDungSua(thongTinKHDangNhap)}>Cập Nhật Thông Tin</button>

                    {/* MODAL SUA THONG TIN KHACH HANG */}
                    {/* <ModalNguoiDung/> */}

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
        layThongTinNguoiDungSua: (nguoiDung) => { dispatch(layThongTinNguoiDungSua(nguoiDung)) },
        lichSuDatVe: (taiKhoan) => { dispatch(lichSuDatVe(taiKhoan)) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserInformation)
