import React, { Component } from 'react'
import { connect } from 'react-redux'
import { layDanhSachNguoiDung, xoaNguoiDung } from '../../Redux/actions/QuanLyNguoiDungAction';

class TimKiemNguoiDung extends Component {

    //Lấy danh sách người dùng
    componentDidMount = () => {
        this.props.layDanhSachNguoiDung()
    }


    renderDanhSachNguoiDung = () => {
        let mangNguoiDung = this.props.mangNguoiDung
        return mangNguoiDung.map((nguoiDung, index) => {
            return (
                <tr key={index}>

                    <td>{nguoiDung.taiKhoan}</td>
                    <td>{nguoiDung.hoTen}</td>
                    <td>{nguoiDung.email}</td>
                    <td>{nguoiDung.soDt}</td>
                    <td>{nguoiDung.matKhau}</td>
                    <td>{nguoiDung.maLoaiNguoiDung}</td>

                    <td>
                        <button className='btn btn-primary'>Sửa</button>
                        <button onClick={this.props.xoaNguoiDung(index)} className='btn btn-danger'>Xóa</button>
                    </td>
                </tr>
            )
        })
    }


    render() {

        return (
            <div>

                {/* TÌM KIẾM KHÁCH HÀNG */}
                <form className="form-group my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Vui Lòng Nhập Tên Khách Hàng" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Tìm kiếm</button>
                </form>

                {/* DANH SÁCH KHÁCH HÀNG */}
                <h3>Danh Sách Người Dùng</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tài Khoản</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Mật Khẩu</th>
                            <th>Mã Loại Người Dùng</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderDanhSachNguoiDung()}
                    </tbody>
                </table>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangNguoiDung: state.QuanLyPhimReducer.mangNguoiDung
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachNguoiDung: () => { dispatch(layDanhSachNguoiDung()) },
        xoaNguoiDung: (taiKhoanXoa) => { dispatch(xoaNguoiDung(taiKhoanXoa)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimKiemNguoiDung)


