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
                maLoaiNguoiDung: 'KhachHang'
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
            console.log('thongTinNgDungCanSua',this.state.nguoiDung)
        })

    }

    handleBlur = (event) => {

        let flag1 = false, flag2 = false;

        const { name, value } = event.target;

        const errorMessage = this.validateInput(name, value);

        this.setState({
            errors: { ...this.state.errors, [name]: errorMessage }
        },  () => {
            //NẾU 1 TRONG NHỮNG INPUT KHÔNG CÓ THÔNG TIN => KHÔNG CHO NGƯỜI DÙNG CẬP NHẬT
            //Do tính chất bất đồng bộ của state => xét điều kiện = callback func
            //Nếu tất cả các giá trị trong state.errors = '' thì hoanThanh = true ngược lại = false
            for( let error in this.state.errors){
                if(this.state.errors[error]){
                    flag1 = true
                }
                console.log(this.state.errors[error]);
                console.log("TCL: ModalNguoiDung -> handleBlur -> flag1", flag1)
            }
            for ( let ngDung in this.state.nguoiDung){
                if(!this.state.nguoiDung[ngDung]){
                    flag2 = true
                }
                console.log(this.state.nguoiDung[ngDung]);
                console.log("TCL: QuanLyNguoiDung -> handleBlur -> flag2", flag2)
            }
            if(!flag1 && !flag2){
                this.setState({
                    hoanThanh : true
                }, () => {
                    console.log("TCL: ModalNguoiDung -> handleBlur -> hoanThanh", this.state.hoanThanh)
                })
            }else{
                this.setState({
                    hoanThanh : false
                })
            }
        })
    }



    renderErrorMess = (errorMessage) => {
        if (errorMessage !== '') {
            return <div className='alert alert-danger'>{errorMessage}</div>
        }

        return '';
    }

    handleSubmit = (event) => {

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
                                                <label htmlFor="inputAddress1">Tài khoản</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='taiKhoan' value={this.state.nguoiDung.taiKhoan} id="inputAddress1" placeholder="Tài khoản" disabled />
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
                                                <label htmlFor="inputAddress2">Họ và Tên</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='hoTen' value={this.state.nguoiDung.hoTen} id="inputAddress2" placeholder="Họ và Tên" />
                                                {this.renderErrorMess(this.state.errors.hoTen)}
                                            </div>


                                            {/* Số điện thoại*/}
                                            <div className="form-group col-7">
                                                <label htmlFor="inputAddress3">Số điện thoại</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='soDt' value={this.state.nguoiDung.soDt} id="inputAddress3" placeholder="Số điện thoại" />
                                                {this.renderErrorMess(this.state.errors.soDt)}
                                            </div>


                                            {/* Email */}
                                            <div className="form-group col-7">
                                                <label htmlFor="inputEmail4">Email</label>
                                                <input type="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='email' value={this.state.nguoiDung.email} id="inputEmail4" placeholder="Email" />
                                                {this.renderErrorMess(this.state.errors.email)}
                                            </div>

                                            {/* Mã Loại Người Dùng */}

                                            {this.props.thongTinKHDangNhap.maLoaiNguoiDung === 'QuanTri' ?

                                                <div className="form-group col-7">
                                                    <label htmlFor="inputState">Mã Loại Người Dùng</label>
                                                    <select id="inputState" onChange={this.handleChange} onBlur={this.handleBlur} name='maLoaiNguoiDung' value={this.state.nguoiDung.maLoaiNguoiDung} className="form-control" >
                                                        <option  >Chọn Loại Người Dùng</option>
                                                        <option value='KhachHang'>Khách Hàng</option>
                                                        <option value='QuanTri'>Quản Trị</option>
                                                    </select>
                                                </div>

                                                :
                                                
                                                <div className="form-group col-7">
                                                    <label htmlFor="inputState">Mã Loại Người Dùng</label>
                                                    <select id="inputState" onChange={this.handleChange} onBlur={this.handleBlur} name='maLoaiNguoiDung' value={this.state.nguoiDung.maLoaiNguoiDung} className="form-control" >
                                                        <option  >Chọn Loại Người Dùng</option>
                                                        <option value='KhachHang' >Khách Hàng</option>
                                                    </select>
                                                </div>
                                            }

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>

                                            <button type="submit" className="btn btn-primary" disabled={!this.state.hoanThanh}>Cập Nhật</button>
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
        nguoiDungCanSua: state.QuanLyPhimReducer.nguoiDungCanSua,
        thongTinKHDangNhap: state.QuanLyPhimReducer.thongTinKHDangNhap
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        capNhatThongTinNguoiDung: (nguoiDung) => { dispatch(capNhatThongTinNguoiDung(nguoiDung)) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalNguoiDung)