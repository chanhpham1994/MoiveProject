import React, { Component } from 'react';
import {connect} from 'react-redux';
import {dangNhap} from '../../Redux/actions/QuanLyNguoiDungAction';

class UserLogin extends Component {

    constructor(props){
        super(props);
        this.state = {
            taiKhoanKH : {
                taiKhoan : '',
                matKhau : ''
            },
            error : {
                taiKhoan : '',
                matKhau : ''
            }
        }
    }

    handleChange = (event) => {
        let {name,value} = event.target;
        
        this.setState({
            taiKhoanKH : {...this.state.taiKhoanKH, [name] : value}
        },()=>{
            console.log(this.state.taiKhoanKH)
        })
    }

    handleSubmit = (event) => {

        event.preventDefault();
        this.props.dangNhap(this.state.taiKhoanKH);

    }

    //Lấy thông tin khách hàng tại middleware
    componentDidMount() {
        // this.props.layThongTinKhachHang();
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

                                    <form onSubmit={this.handleSubmit}>

                                        <p>Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.</p>
                                        <div className='form-group'>
                                        <input className='form-control my-2' name='taiKhoan' value={this.state.taiKhoanKH.taiKhoan} onChange={this.handleChange}  type="text" placeholder='UserID'/>
                                        <input className='form-control my-2' name='matKhau' value={this.state.taiKhoanKH.matKhau}  onChange={this.handleChange}  type="password" placeholder='Password'/>
                                        </div>
                                        <button type='submit' className='btn btn-success form-control'>ĐĂNG NHẬP</button>
                                    </form>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    {/**Form đăng ký**/}  
                                    <form action="">
                                       
                                        <div className='form-group'>
                                        <input className='form-control my-2' type="text" placeholder='Họ Tên'/>
                                        <input className='form-control my-2' type="text" placeholder='Tài Khoản'/>
                                        <input className='form-control my-2' type="text" placeholder='Mật Khẩu'/>
                                        <input className='form-control my-2' type="text" placeholder='Email'/>
                                        <input className='form-control my-2' type="text" placeholder='Số điện thoại'/>
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
     dangNhap: (thongTinNguoiDung) => {dispatch(dangNhap(thongTinNguoiDung))},
})

export default connect(null,mapDispatchToProps)(UserLogin)