import React, { Component } from 'react';
import {connect} from 'react-redux';
import RenderDanhSachPhim from '../../../Component/DanhSachPhim/RenderDanhSachPhim';
import {layDanhSachPhim} from '../../../Redux/actions/QuanLyPhimAction';

class DanhSachPhim extends Component {

    componentDidMount = () => {

        this.props.layDanhSachPhim();
    }

    render() {
        return (
            <div>
                <div className='admin--content__header'>
                    <h3 className='my-2'>Danh Sách và Thông Tin Chi Tiết Phim</h3>
                </div>
                <RenderDanhSachPhim mangDanhSachPhim={this.props.mangDanhSachPhim}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDanhSachPhim: state.QuanLyPhimReducer.mangDanhSachPhim
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachPhim: () => { dispatch(layDanhSachPhim()) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DanhSachPhim)