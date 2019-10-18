import React, { Component } from 'react';
import { connect } from 'react-redux';
import { layThongTinPhim, xoaPhim } from '../../../Redux/actions/QuanLyPhimAction';
import { NavLink } from 'react-router-dom';

class ChiTietPhim extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: 'true'
        }
    }


    componentDidMount = () => {

        //lấy giá trị tham số từ URL this.props.match.params.tenThamSO
        let { maPhim } = this.props.match.params;

        this.props.layThongTinPhim(maPhim);
    }


    //Render giao diện sau 3 giây
    setTimeOut = setTimeout(function () {
        this.setState({
            isLoading: 'false'
        })
    }.bind(this), 3000);


    renderDanhSachPhim = () => {

        let { thongTinChiTietPhim } = this.props;

        return (
            <div className='ml-3'>
                <div className='row'>
                    <div className='col-2'>
                        <img src={thongTinChiTietPhim.hinhAnh} width={250} height={300} alt="" />
                    </div>
                    <div className='col-8'>
                        <p>Mã Phim : {thongTinChiTietPhim.maPhim}</p>
                        <p>Tên Phim : {thongTinChiTietPhim.tenPhim}</p>
                        <p>Bí Danh : {thongTinChiTietPhim.biDanh}</p>
                        <p>Trailer : {thongTinChiTietPhim.trailer}</p>
                        <p>Mô tả : {thongTinChiTietPhim.moTa}</p>
                        <p>Ngày Khởi Chiếu : {thongTinChiTietPhim.ngayKhoiChieu}</p>
                        <p>Đánh Giá : {thongTinChiTietPhim.danhGia}</p>
                    </div>
                </div>
                <button className='btn btn-success mr-2'><NavLink to='/danhSachPhim' className='text-white'>Trở Lại</NavLink></button>
                <button className='btn btn-primary mr-2'>Sửa Phim</button>
                <button className='btn btn-danger'>Xóa Phim</button>
            </div>
        )
    }

    renderLichChieu = () => {

        let { lichChieu } = this.props.thongTinChiTietPhim;

        return lichChieu && lichChieu.map((lichChieu, index) => {
            return (
                <tr key={index}>
                    <td>{lichChieu.maLichChieu}</td>
                    <td>{lichChieu.maRap}</td>
                    <td>{lichChieu.ngayChieuGioChieu}</td>
                    <td>{lichChieu.giaVe}</td>
                    <td>{lichChieu.thoiLuong}</td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.props.thongTinChiTietPhim.lichChieu);
        return (
            <div>
                {this.state.isLoading === 'true' ?

                    <div className='loading-page'>
                      
                    </div>
                    :
                    <div>
                        <h4> Chi Tiết Phim : {this.props.match.params.maPhim}</h4>
                        <div>
                            {this.renderDanhSachPhim()}
                        </div>
                        <h4>Lịch Chiếu</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Mã Lịch Chiếu</th>
                                    <th>Mã Rạp</th>
                                    <th>Ngày Giờ Chiếu</th>
                                    <th>Giá Vé</th>
                                    <th>Thời Lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderLichChieu()}
                            </tbody>
                        </table>
                    </div>
                }
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        thongTinChiTietPhim: state.QuanLyPhimReducer.thongTinChiTietPhim
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinPhim: (maPhim) => { dispatch(layThongTinPhim(maPhim)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChiTietPhim)


