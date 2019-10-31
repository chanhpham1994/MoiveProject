import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserInformation extends Component {


    render() {

        let {thongTinKHDangNhap} = this.props;

        return (
            <div>
                <p>{thongTinKHDangNhap.hoTen}</p>
                <p>{thongTinKHDangNhap.email}</p>
                {/* <p>{thongTinKHDangNhap.matKhau}</p> */}
               
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        thongTinKHDangNhap : state.QuanLyPhimReducer.thongTinKHDangNhap
    }
}


export default connect(mapStateToProps,null)(UserInformation)