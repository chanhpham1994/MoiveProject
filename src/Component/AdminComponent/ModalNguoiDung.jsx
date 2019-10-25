import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capNhatThongTinNguoiDung } from '../../Redux/actions/QuanLyNguoiDungAction'

class ModalNguoiDung extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nguoiDung: {
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDt: '',
                email: '',
                maLoaiNguoiDung: ''
            },
            errors: {
                taiKhoan: '',
                matKhau: '',
                hoTen: '',
                soDt: '',
                email: '',
                maLoaiNguoiDung: ''
            },
            hoanThanh: false
        }
    }

    validateInput = (name, value) => {
        let errorMessage = '';
        if (name === 'taiKhoan') {
            if (!value) {
                errorMessage = 'Tài Khoản không được để trống';
            }
        }
        if (name === 'matKhau') {
            if (!value) {
                errorMessage = 'Mất Khẩu không được để trống';
            }
        }
        if (name === 'hoTen') {
            if (!value) {
                errorMessage = 'Họ Tên không được để trống';
            }
        }
        if (name === 'soDt') {
            if (!value) {
                errorMessage = 'Số điện thoại không được để trống';
            } else if (isNaN(value)) {
                errorMessage = 'SDT không được có chữ';
            }
        }
        if (name === 'email') {
            if (!value) {
                errorMessage = 'Email không được để trống';
            } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
                errorMessage = 'Email khong dung dinh dang';
            }
        }

        return errorMessage;
    }


    handleChange = (event) => {

        const { name, value } = event.target;

        this.setState({
            nguoiDung: { ...this.state.nguoiDung, [name]: value }
        }, () => {
            console.log(this.state.nguoiDung)
        })

    }

    handleBlur = (event) => {

        const { name, value } = event.target;

        const errorMessage = this.validateInput(name, value);

        this.state.hoanThanh = errorMessage === '' ? true : false;

        this.setState({
            errors: { ...this.state.errors, [name]: errorMessage }
        })

    }

    renderErrorMess = (errorMessage) => {
        if (errorMessage !== '') {
            return <div className='alert alert-danger'>{errorMessage}</div>
        }

        return '';
    }

    handleSubmit = (event) => {

        event.preventDefault();

        this.props.capNhatThongTinNguoiDung(this.state.nguoiDung);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            nguoiDung: { ...nextProps.nguoiDungCanSua }
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
                                <div className='admin--content__form'>


                                    <form onSubmit={this.handleSubmit} className='my-2'>
                                        <div className='row'>

                                            {/* Tài Khoản */}
                                            <div className="form-group col-4 ">
                                                <label htmlFor="inputAddress">Tài khoản</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='taiKhoan' value={this.state.nguoiDung.taiKhoan} id="inputAddress" placeholder="Tài khoản" disabled/>
                                                {this.renderErrorMess(this.state.errors.taiKhoan)}
                                            </div>


                                            {/* Mật Khẩu */}
                                            <div className="form-group col-4 align-self-start">
                                                <label htmlFor="password">Mật Khẩu</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='matKhau' value={this.state.nguoiDung.matKhau} id="inputPassword4" placeholder="Mật Khẩu" />
                                                {this.renderErrorMess(this.state.errors.matKhau)}
                                            </div>


                                            {/* Họ Tên */}
                                            <div className="form-group col-7">
                                                <label htmlFor="inputAddress">Họ và Tên</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='hoTen' value={this.state.nguoiDung.hoTen} id="inputAddress" placeholder="Họ và Tên" />
                                                {this.renderErrorMess(this.state.errors.hoTen)}
                                            </div>


                                            {/* Số điện thoại*/}
                                            <div className="form-group col-7">
                                                <label htmlFor="inputAddress">Số điện thoại</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='soDt' value={this.state.nguoiDung.soDt} id="inputAddress" placeholder="Số điện thoại" />
                                                {this.renderErrorMess(this.state.errors.soDt)}
                                            </div>


                                            {/* Email */}
                                            <div className="form-group col-7">
                                                <label htmlFor="inputEmail4">Email</label>
                                                <input type="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='email' value={this.state.nguoiDung.email} id="inputEmail4" placeholder="Email" />
                                                {this.renderErrorMess(this.state.errors.email)}
                                            </div>

                                            {/* Mã Loại Người Dùng */}
                                            <div className="form-group col-7">
                                                <label htmlFor="inputState">Mã Loại Người Dùng</label>
                                                <select id="inputState" onChange={this.handleChange} name='maLoaiNguoiDung' value={this.state.nguoiDung.maLoaiNguoiDung} className="form-control" >
                                                    <option
                                                    >Chọn Loại Người Dùng</option>
                                                    <option value='KhachHang'>Khách Hàng</option>
                                                    <option value='QuanTri'>Quản Trị</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>

                                            <button type="submit" className="btn btn-primary">Cập Nhật</button>
                                        </div>

                                    </form>
                                </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        capNhatThongTinNguoiDung: (nguoiDung) => { dispatch(capNhatThongTinNguoiDung(nguoiDung)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalNguoiDung)