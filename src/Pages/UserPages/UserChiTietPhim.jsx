import React, { Component } from 'react';
import { connect } from 'react-redux';
import { layThongTinPhim, layThongTinPhimCapNhat, layThongTinRap } from '../../Redux/actions/QuanLyPhimAction';
import BackGroundIMG from '../../Assests/images/movie-details-bg.jpg';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import UserTrailer from '../../Component/UserComponent/UserTrailer';
import UserTheaterLocation from '../../Component/UserComponent/UserTheaterLocation';

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
                    <p>Ngày Khởi Chiếu : {thongTinChiTietPhim.ngayKhoiChieu}</p>
                    <p>Đánh Giá : {thongTinChiTietPhim.danhGia}</p>

                    <button className="btn btn-success mr-2" data-toggle="modal" data-target="#modelTrailer">Xem Trailer</button>
                    <button className="btn btn-success user--chitietphim__muave" > <a href="#lichChieu">Mua Vé Ngay</a> </button>
                </div>
            </div>

        )
    }

    renderLichChieu = () => {

        let { lichChieu } = this.props.thongTinChiTietPhim;

        return lichChieu && lichChieu.map((lichChieu, index) => {
            return (

                <div key={index}>

                    <div style={{ cursor: 'pointer' }} >{lichChieu.ngayChieuGioChieu}
                    </div>
                    {/* Từ ngày giờ chiếu xuất hiện thông tin rạp */}
                    <button className="btn btn-secondary" onClick={() => this.props.layThongTinRap(lichChieu.ngayChieuGioChieu)}>Chọn</button>
                </div>

            )
        })
    }

    renderDanhSachRap = () => {

        let { thongTinRap } = this.props;

        return thongTinRap.map((rap, index) => {
            return (

                <div className="dsRap" key={index}>
                    <div className="dsRap--tenRap">

                        {/* Chuyển sang khu vực đặt vé */}
                        <NavLink to={`/datve/${rap.maLichChieu}`}><p>{rap.thongTinRap.tenCumRap}</p> </NavLink>
                    </div>
                    {/* <h4>Mã Lịch Chiếu : {rap.maLichChieu}</h4> */}
                    <div className="dsRap--vitri" data-toggle="modal" data-target="#modelMap" >
                        <i className="fa fa-map-marker-alt mr-2"></i>
                        XEM VỊ TRÍ
                    </div>
                </div>

            )
        })

    }


    render() {

        let settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
        };

        let {thongTinChiTietPhim} = this.props;

        return (
            <div className="user--chitietphim" style={{ backgroundImage: `url(${BackGroundIMG})` }} >

                <div className="container user--chitietphim__lichChieu">

                    {this.renderDanhSachPhim()}

                    <UserTrailer trailer={thongTinChiTietPhim.trailer}/>

                    <h4 className="mt-2 lichChieu" id="lichChieu">Lịch Chiếu</h4>


                </div>

                <div className="container user--chitietphim__ngayChieu">
                    <Slider {...settings}>

                        {this.renderLichChieu()}

                    </Slider>
                </div>


                <div className="container">
                    <div className="row">
                        <div className='col-3'>
                            {this.renderDanhSachRap()}
                            <UserTheaterLocation/>
                        </div>
                        <div className="col-9">

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        thongTinChiTietPhim: state.QuanLyPhimReducer.thongTinChiTietPhim,
        thongTinRap: state.QuanLyPhimReducer.thongTinRap
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinPhim: (maPhim) => { dispatch(layThongTinPhim(maPhim)) },
        layThongTinPhimCapNhat: (phim) => { dispatch(layThongTinPhimCapNhat(phim)) },
        layThongTinRap: (ngayChieuGioChieu) => { dispatch(layThongTinRap(ngayChieuGioChieu)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChiTietPhim)