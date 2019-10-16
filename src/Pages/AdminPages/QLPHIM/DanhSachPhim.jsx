import React, { Component } from 'react'
import { connect } from 'react-redux'
import { layDanhSachPhim,xoaPhim } from '../../../Redux/actions/QuanLyPhimAction'

class DanhSachPhim extends Component {


    componentWillMount = () => {
        this.props.layDanhSachPhim();
    }


    renderDanhSachPhim = () => {

        return this.props.mangDanhSachPhim.map((phim, index) => {

            return (

                <div className="card text-left col-2" key={index} >
                    <img className="card-img-top" src={phim.hinhAnh} width={150} height={250} alt='' />
                    <div className="card-body">
                        <h6 className="card-title">{phim.tenPhim}</h6>
                    </div>
                    <button className='btn btn-danger' onClick={()=>xoaPhim(phim.maPhim)}>Xóa Phim</button>
                </div>

            )
        })
    }


    render() {

        return (
            <div>
                <h4> Danh Sach Phim </h4>

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
        xoaPhim: (maPhim) => { dispatch(xoaPhim(maPhim)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachPhim)


