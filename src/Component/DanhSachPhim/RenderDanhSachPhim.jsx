import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class RenderDanhSachPhim extends Component {

    renderDanhSachPhim = () => {
        let { mangDanhSachPhim } = this.props;
   
        return mangDanhSachPhim.map((phim, index) => {
            return (
                <div className='col-2' key={index}>
                    <div className="card text-left mb-5">
                        <img className="card-img-top" src={phim.hinhAnh} width={150} height={200} alt='' />
                        <div className="card-body">
                            <h6 className="card-title">Mã Phim :  {phim.maPhim}</h6>
                            <NavLink to={`/chitietphim/${phim.maPhim}`} className='btn btn-success'>Xem Chi Tiết</NavLink>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='row'>
                {this.renderDanhSachPhim()}
            </div>
        )
    }
}

