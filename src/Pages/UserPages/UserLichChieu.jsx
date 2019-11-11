import React, { Component } from 'react';
import Slider from "react-slick";
import BackGroundIMG from '../../Assests/images/movie-details-bg.jpg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { layDanhSachPhim } from '../../Redux/actions/QuanLyPhimAction';

class UserLichChieu extends Component {

    componentDidMount = () => {

        this.props.layDanhSachPhim();

    }

    renderDanhSachPhim = () => {
        let { mangDanhSachPhim } = this.props;

        return mangDanhSachPhim.slice(1, 12).map((phim, index) => {
            return (
                <div className="pr-3" key={index}>
                    <img className="card-img-top" src={phim.hinhAnh} height={350} alt='' />
                    <div className="card-body">

                        <NavLink to={`/userchitietphim/${phim.maPhim}`} className='btn btn-success px-4' style={{ width: '100%' }}> <i className="fa fa-ticket-alt"></i> MUA VÉ</NavLink>
                    </div>
                </div>
            )
        })
    }

    renderDanhSachPhimSapChieu = () => {
        let { mangDanhSachPhim } = this.props;

        return mangDanhSachPhim.slice(17, 25).map((phim, index) => {
            return (
                <div className="pr-3" key={index}>
                    <img className="card-img-top" src={phim.hinhAnh} height={350} alt='' />
                    <div className="card-body">

                        <NavLink to={`/userchitietphim/${phim.maPhim}`} className='btn btn-success px-4' style={{ width: '100%' }}> <i className="fa fa-ticket-alt"></i> MUA VÉ</NavLink>
                    </div>
                </div>
            )
        })
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1124,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="user--slider" style={{ backgroundImage: `url(${BackGroundIMG})` }}>

                <div className="">
                    <div className="user--slider__head">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

                            <li className="nav-item">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                    <span id="lichChieu">Phim Đang Chiếu</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"> Phim Săp Chiếu</a>
                            </li>

                        </ul>
                    </div>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <Slider {...settings}>

                                {/* Render Danh Sach Phim */}

                                {this.renderDanhSachPhim()}

                            </Slider>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <Slider {...settings}>

                                {/* Render Danh Sach Phim */}

                                {this.renderDanhSachPhimSapChieu()}

                            </Slider>

                        </div>

                    </div>
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
        layDanhSachPhim: () => { dispatch(layDanhSachPhim()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLichChieu)


