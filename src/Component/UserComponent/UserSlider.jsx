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
                <div className="pr-3">
                    <img className="card-img-top" src={phim.hinhAnh} width={150} height={250} alt='' />
                    <div className="card-body">
                        <h6 className="card-title text-white">Mã Phim : {phim.maPhim}</h6>
                        <NavLink to={`/chitietphim/${phim.maPhim}`} className='btn btn-success px-4' style={{width:'100%'}}> <i class="fa fa-ticket-alt"></i> MUA VÉ</NavLink>
                    </div>
                </div>
            )
        })
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };

        return (
            <div className="user--slider" style={{ backgroundImage: `url(${BackGroundIMG})` }}>

                <h4>Phim Đang Chiếu</h4>
                
                  


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