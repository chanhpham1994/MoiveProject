import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dangNhapAminPage } from '../../Redux/actions/QuanLyNguoiDungAction';
import { NavLink } from 'react-router-dom';
import Background from '../../Assests/images/login--wallpaper.jpg';

class Login extends Component {


    constructor(props) {
        super(props)

        this.state = {
            thongTinNguoiDung: {
                taiKhoan: '',
                matKhau: '',
            }
            
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            thongTinNguoiDung: { ...this.state.thongTinNguoiDung, [name]: value }
        })
    }


    handleSubmit = (event) => {

        event.preventDefault();

        this.props.dangNhapAminPage(this.state.thongTinNguoiDung,this.moveToAdminPage);

    }

    moveToAdminPage = () => {
        this.props.history.push('./admin');
    }


    render() {

        

        return (
            <div className='login--page' style={{ backgroundImage: `url(${Background})` }}>

                <div className='login--content'>

                    <div className='login--content__form text-center'>

                        <h3 className='text-center'>ĐĂNG NHẬP</h3>

                        <form onSubmit={this.handleSubmit} className='form-group'>


                            <input className='form-control' type="text" name='taiKhoan' onChange={this.handleChange} placeholder='Tài Khoản' />


                            <input className='form-control' type="password" name='matKhau' onChange={this.handleChange} placeholder='Mật Khẩu' />

                            <button type='submit' className='btn'>Đăng Nhập</button>

                        </form>
                        <a href='#'>Quên Mật Khẩu?</a>

                        <div className='login--content__bottom'>
                            {/* <i className="fa fa-arrow-left mr-2"></i> */}
                            {/* <NavLink to='/home'>Back to User's Website</NavLink> */}
                            <NavLink to='/'>Đăng Ký</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


const mapDispatch = (dispatch) => {
    return {
        dangNhapAminPage: (thongTinNguoiDung,moveToAdminPage) => { dispatch(dangNhapAminPage(thongTinNguoiDung,moveToAdminPage)) }
    }
}



export default connect(null, mapDispatch)(Login)