import React, { Component } from 'react';
import { connect } from 'react-redux';
import { layThongTinPhim, layThongTinPhimCapNhat } from '../../Redux/actions/QuanLyPhimAction';
import BackGroundIMG from '../../Assests/images/movie-details-bg.jpg';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";

class UserChiTietPhim extends Component {

    componentDidMount = () => {

        //lấy giá trị tham số từ URL this.props.match.params.tenThamSO
        let { maPhim } = this.props.match.params;

        this.props.layThongTinPhim(maPhim);
    }

    renderDanhSachPhim = () => {

        let { thongTinChiTietPhim } = this.props;

        return (

            <div className='row'>
                <div className='col-4'>
                    <h4><NavLink to='/' className="text-white">Trang Chủ</NavLink> | {thongTinChiTietPhim.tenPhim}</h4>
                    <img src={thongTinChiTietPhim.hinhAnh} width={350} height={500} alt="" />
                </div>
                <div className='col-8'>
                    <h4>{thongTinChiTietPhim.tenPhim}</h4>
                    <p>{thongTinChiTietPhim.moTa}</p>
                    <p>Mã Phim : {thongTinChiTietPhim.maPhim}</p>

                    <p>Bí Danh : {thongTinChiTietPhim.biDanh}</p>
                    <p>Trailer : {thongTinChiTietPhim.trailer}</p>

                    <p>Ngày Khởi Chiếu : {thongTinChiTietPhim.ngayKhoiChieu}</p>
                    <p>Đánh Giá : {thongTinChiTietPhim.danhGia}</p>

                    <button className="btn btn-success mr-2">Xem Trailer</button>
                    <button className="btn btn-success"> Mua Vé Ngay</button>
                </div>
            </div>

        )
    }

    renderLichChieu = () => {

        let { lichChieu } = this.props.thongTinChiTietPhim;

        return lichChieu && lichChieu.map((lichChieu, index) => {
            return (
                <tr key={index}>
                    {/* <td>{lichChieu.maLichChieu}</td>
                    <td>{lichChieu.maRap}</td> */}
                    <td>{lichChieu.ngayChieuGioChieu}</td>
                    {/* <td>{lichChieu.giaVe}</td>
                    <td>{lichChieu.thoiLuong}</td> */}
                    {/* <button onClick={() => this.renderDanhSachRap(lichChieu.maRap)}>Chon</button> */}
                </tr>
            )
        })
    }

    renderDanhSachRap = (maRap) => {

        let { lichChieu } = this.props.thongTinChiTietPhim;

        let index = lichChieu.findIndex(rap => lichChieu.maRap === maRap)
        console.log("TCL: UserChiTietPhim -> renderDanhSachRap -> index", index)
        
        

        // let { thongTinRap } = this.props.thongTinChiTietPhim.lichChieu[index].thongTinRap;

        // return (
        //     <div className="card text-left">
        //         <img className="card-img-top" src="holder.js/100px180/" alt />
        //         <div className="card-body">
        //             <h4 className="card-title">Title</h4>
        //             <p className="card-text">Body</p>
        //         </div>
        //     </div>
        // )

    }


    render() {

        let settings = {
            dots: false,
            infinite: true,
            slidesToShow: 10,
            slidesToScroll: 1,
        };

        return (
            <div className="user--chitietphim" style={{ backgroundImage: `url(${BackGroundIMG})` }} >

                <div className="container">
                    {this.renderDanhSachPhim()}

                    <h4 className="mt-2">Lịch Chiếu</h4>


                    <Slider {...settings}>

                        {this.renderLichChieu()}

                    </Slider>

                </div>

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
        layThongTinPhim: (maPhim) => { dispatch(layThongTinPhim(maPhim)) },
        layThongTinPhimCapNhat: (phim) => { dispatch(layThongTinPhimCapNhat(phim)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChiTietPhim)