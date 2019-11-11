import React, { Component } from 'react';
import { connect } from 'react-redux';
import { settings } from '../../Common/Config/Setting';
import { daDangNhap } from '../../Redux/actions/QuanLyNguoiDungAction';

class ThonTinAdmin extends Component {

    componentDidMount = () => {
        //LẤY THÔNG TIN TỪ LOCALSTORAGE CỦA NGƯỜI DÙNG ĐÃ ĐĂNG NHẬP TỪ TRƯỚC

        const thongTin = JSON.parse(localStorage.getItem(settings.userLogin));
        if (thongTin !== '') {
            this.props.daDangNhap(thongTin);
        }
    }


    renderThongTin = () => {

        let { thongTinKHDangNhap } = this.props;
        console.log("TCL: ThonTinAdmin -> renderThongTin -> thongTinKHDangNhap", thongTinKHDangNhap)
        return (
            <tbody>
                <tr>
                    <td>Email:</td>
                    <td>{thongTinKHDangNhap.email}</td>
                </tr>
                <tr>
                    <td>Họ và Tên:</td>
                    <td>{thongTinKHDangNhap.hoTen}</td>
                </tr>
                <tr>
                    <td>Loại Người Dùng:</td>
                    <td>{thongTinKHDangNhap.maLoaiNguoiDung}</td>
                </tr>
                <tr>
                    <td>Số Điện Thoại:</td>
                    <td>{thongTinKHDangNhap.soDt}</td>
                </tr>
            </tbody>
        )

    }

    render() {

        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Thông Tin Người Quản Lý</th>
                        </tr>
                    </thead>

                    {this.renderThongTin()}

                </table>
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
        daDangNhap: (thongTin) => { dispatch(daDangNhap(thongTin)) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ThonTinAdmin);

