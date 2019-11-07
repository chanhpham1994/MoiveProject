import React, { Component } from 'react';
import Slider from "react-slick";
import BackGroundIMG from '../../Assests/images/movie-details-bg.jpg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { layDanhSachPhim } from '../../Redux/actions/QuanLyPhimAction';

class UserSlider extends Component {

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
                       
                        <NavLink to={`/userchitietphim/${phim.maPhim}`} className='btn btn-success px-4' style={{width:'100%'}}> <i className="fa fa-ticket-alt"></i> MUA VÉ</NavLink>
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

                <h4 id="lichChieu">Phim Đang Chiếu</h4>
                
                <Slider {...settings}>

                    {/* Render Danh Sach Phim */}

                    {this.renderDanhSachPhim()}

                </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserSlider)