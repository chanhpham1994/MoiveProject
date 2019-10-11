import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {



    renderNguoiDungCanSua = () => {

        let nguoiDungCanSua = this.props;

        return Object.entries(nguoiDungCanSua).map(([key, value], i)=>{
            return(
                <tr key={i}>

                    <td>{value.taiKhoan}</td>
                    <td>{value.hoTen}</td>
                    <td>{value.email}</td>
                    <td>{value.soDt}</td>
                    <td>{value.matKhau}</td>
                    <td>{value.maLoaiNguoiDung}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">

                    <div className="modal-dialog" role="document" style={{ maxWidth: '1000px' }}>

                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Cập Nhật Thông Tin Người Dùng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container-fluid">

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
                                       {this.renderNguoiDungCanSua()}
                                        </tbody>

                                    </table>


                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                                <button type="button" className="btn btn-primary">Cập Nhật</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        nguoiDungCanSua: state.QuanLyPhimReducer.nguoiDungCanSua
    }
}



export default connect(mapStateToProps, null)(Modal)