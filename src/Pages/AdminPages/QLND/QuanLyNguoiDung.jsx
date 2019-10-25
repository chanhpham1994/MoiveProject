import React, { Component } from 'react'
import { connect } from 'react-redux'
import { themNguoiDung } from '../../../Redux/actions/QuanLyNguoiDungAction'

class QuanLyNguoiDung extends Component {

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
            }
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
                errorMessage = 'Email không đúng định dạng';
            }
        }

        return errorMessage;
    }


    handleChange = (event) => {

        const { name, value } = event.target;

        this.setState({
            nguoiDung: { ...this.state.nguoiDung, [name]: value }
        },()=>{
            console.log('ngdungcansua',this.state.nguoiDung)
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
        this.props.themNguoiDung(this.state.nguoiDung);

    }


    render() {
        // console.log("TCL: QuanLyNguoiDung -> handleSubmit -> this.state.nguoiDung", this.state.nguoiDung)
        return (

            <div>
                <div className='admin--content__header'>
                    <h3 className='my-2'>THÊM NGƯỜI DÙNG</h3>
                    <p>** Tạo người dùng mới tại đây</p>
                    <p>** Vui lòng thêm đầy đủ thông tin người dùng!</p>
                    <p>(*) Không được để trống</p>
                </div>

                <div className='admin--content__form'>
                    <form onSubmit={this.handleSubmit} className='my-2'>
                        <div className='row'>

                            {/* Tài Khoản */}
                            <div className="form-group col-4 ">
                                <label htmlFor="inputAddress">Tài khoản (*)</label>
                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='taiKhoan' value={this.state.nguoiDung.taiKhoan} id="inputAddress" placeholder="Tài khoản" />
                                {this.renderErrorMess(this.state.errors.taiKhoan)}
                            </div>


                            {/* Mật Khẩu */}
                            <div className="form-group col-4 align-self-start">
                                <label htmlFor="password">Mật Khẩu (*)</label>
                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='matKhau' value={this.state.nguoiDung.matKhau} id="inputPassword4" placeholder="Mật Khẩu" />
                                {this.renderErrorMess(this.state.errors.matKhau)}
                            </div>


                            {/* Họ Tên */}
                            <div className="form-group col-7">
                                <label htmlFor="inputAddress">Họ và Tên (*)</label>
                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='hoTen' value={this.state.nguoiDung.hoTen} id="inputAddress" placeholder="Họ và Tên" />
                                {this.renderErrorMess(this.state.errors.hoTen)}
                            </div>


                            {/* Số điện thoại*/}
                            <div className="form-group col-7">
                                <label htmlFor="inputAddress">Số điện thoại (*)</label>
                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='soDt' value={this.state.nguoiDung.soDt} id="inputAddress" placeholder="Số điện thoại" />
                                {this.renderErrorMess(this.state.errors.soDt)}
                            </div>


                            {/* Email */}
                            <div className="form-group col-7">
                                <label htmlFor="inputEmail4">Email (*)</label>
                                <input type="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='email' value={this.state.nguoiDung.email} id="inputEmail4" placeholder="Email" />
                                {this.renderErrorMess(this.state.errors.email)}
                            </div>

                            {/* Mã Loại Người Dùng */}
                            <div className="form-group col-7">
                                <label htmlFor="inputState">Mã Loại Người Dùng (*)</label>
                                <select id="inputState" onChange={this.handleChange} name='maLoaiNguoiDung' value={this.state.nguoiDung.maLoaiNguoiDung} className="form-control" >
                                    <option >Chọn Loại Người Dùng</option>
                                    <option value='KhachHang'>Khách Hàng</option>
                                    <option value='QuanTri'>Quản Trị</option>
                                </select>
                            </div>


                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!this.state.hoanThanh}>Đăng Ký</button>

                    </form>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        themNguoiDung: (nguoiDung) => { dispatch(themNguoiDung(nguoiDung)) }
    }
}


export default connect(null, mapDispatchToProps)(QuanLyNguoiDung)
