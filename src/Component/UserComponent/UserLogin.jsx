import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dangNhap, dangKy } from '../../Redux/actions/QuanLyNguoiDungAction';
import { settings } from '../../Common/Config/Setting';

class UserLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoanKH: {
                taiKhoan: '',
                matKhau: ''
            },
            taiKhoanDK: {
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
        }
    }


    // ĐĂNG NHẬP
    handleChangeLogin = (event) => {
        let { name, value } = event.target;

        this.setState({
            taiKhoanKH: { ...this.state.taiKhoanKH, [name]: value }
        }, () => {
            console.log(this.state.taiKhoanKH)
        })
    }

    // ĐĂNG NHẬP
    handleSubmitLogin = (event) => {

        event.preventDefault();

        this.props.dangNhap(this.state.taiKhoanKH);

    }

    // ĐĂNG KÝ
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
            taiKhoanDK: { ...this.state.taiKhoanDK, [name]: value }
        }, () => {
            console.log('ngdungDangKy', this.state.taiKhoanDK)
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


    // ĐĂNG KÝ
    handleSubmit = (event) => {

        event.preventDefault();

        this.props.dangKy(this.props.taiKhoanDK);

    }


    render() {
        return (
            <div>
                <div className="modal fade" id="modelLogin" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                          
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/**Form**/}
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active ml-0" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Đăng Nhập</a>
                                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Đăng Ký</a>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">

                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                                        {/**Form đăng nhập**/}

                                        <form onSubmit={this.handleSubmitLogin}>

                                            <p>Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.</p>
                                            <div className='form-group'>
                                                <input className='form-control my-2' name='taiKhoan' value={this.state.taiKhoanKH.taiKhoan} onChange={this.handleChangeLogin} type="text" placeholder='UserID' />
                                                <input className='form-control my-2' name='matKhau' value={this.state.taiKhoanKH.matKhau} onChange={this.handleChangeLogin} type="password" placeholder='Password' />
                                            </div>
                                            <button type='submit' className='btn btn-success form-control'>ĐĂNG NHẬP</button>
                                        </form>
                                    </div>

                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                                        {/**Form đăng ký**/}

                                        <form onSubmit={this.handleSubmit}>

                                                {/* Tài Khoản */}
                                                <div className="form-group ">
                                                    <label htmlFor="inputAddress">Tài khoản (*)</label>
                                                    <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='taiKhoan' value={this.state.taiKhoanDK.taiKhoan} id="inputAddress" placeholder="Tài khoản" />
                                                    {this.renderErrorMess(this.state.errors.taiKhoan)}
                                                </div>


                                                {/* Mật Khẩu */}
                                                <div className="form-group  align-self-start">
                                                    <label htmlFor="password">Mật Khẩu (*)</label>
                                                    <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='matKhau' value={this.state.taiKhoanDK.matKhau} id="inputPassword4" placeholder="Mật Khẩu" />
                                                    {this.renderErrorMess(this.state.errors.matKhau)}
                                                </div>


                                                {/* Họ Tên */}
                                                <div className="form-group ">
                                                    <label htmlFor="inputAddress">Họ và Tên (*)</label>
                                                    <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='hoTen' value={this.state.taiKhoanDK.hoTen} id="inputAddress" placeholder="Họ và Tên" />
                                                    {this.renderErrorMess(this.state.errors.hoTen)}
                                                </div>


                                                {/* Số điện thoại*/}
                                                <div className="form-group ">
                                                    <label htmlFor="inputAddress">Số điện thoại (*)</label>
                                                    <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='soDt' value={this.state.taiKhoanDK.soDt} id="inputAddress" placeholder="Số điện thoại" />
                                                    {this.renderErrorMess(this.state.errors.soDt)}
                                                </div>


                                                {/* Email */}
                                                <div className="form-group">
                                                    <label htmlFor="inputEmail4">Email (*)</label>
                                                    <input type="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='email' value={this.state.taiKhoanDK.email} id="inputEmail4" placeholder="Email" />
                                                    {this.renderErrorMess(this.state.errors.email)}
                                                </div>
                                            

                                            <button type='submit' className='btn btn-success form-control'>ĐĂNG KÝ</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    dangNhap: (thongTinNguoiDung) => { dispatch(dangNhap(thongTinNguoiDung)) },
    dangKy: (thongTinNguoiDung) => { dispatch(dangKy(thongTinNguoiDung)) },
})

export default connect(null, mapDispatchToProps)(UserLogin)