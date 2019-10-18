import React, { Component } from 'react';
import { connect } from 'react-redux';
import { layDanhSachPhim } from '../../../Redux/actions/QuanLyPhimAction';
import { NavLink } from 'react-router-dom';

class QuanLyLichChieu extends Component {



    componentWillMount = () => {
        this.props.layDanhSachPhim();
    }


    renderDanhSachPhim = () => {

        return this.props.mangDanhSachPhim.map((phim, index) => {

            return (
                <div className='col-2 mb-3' key={index}>
                    <div className="card text-left" >
                        <img className="card-img-top" src={phim.hinhAnh} width={150} height={250} alt='' />
                        <div className="card-body">
                            <NavLink to={`/lichchieuchitiet/${phim.maPhim}`} className='btn btn-success'>Xem Chi Tiết</NavLink>
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {

        return (
            <div>
                <h4> THÔNG TIN LỊCH CHIẾU </h4>

                <div className='row'>
                    {this.renderDanhSachPhim()}
                </div>

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
        layDanhSachPhim: () => { dispatch(layDanhSachPhim()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyLichChieu)

