import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layThongTinHeThongRap, layThongTinRapTheoHeThong, layDanhSachPhimTheoRap } from '../../Redux/actions/QuanLyLichChieuRapAction';

class UserRap extends Component {

    componentDidMount = () => {

        this.props.layThongTinHeThongRap();

    }

    renderDSHeThongRap = () => {

        let { dsHeThongRap } = this.props;

        return dsHeThongRap.map((HTRAP, index) => {
            return (
                <div className="logo" key={index}>
                    <img onClick={() => this.props.layThongTinRapTheoHeThong(HTRAP.maHeThongRap)} src={HTRAP.logo} alt="" />
                </div>
            )
        })
    }

    renderRapTheoHeThong = () => {

        let { dsRapTheoHeThong } = this.props;

        return dsRapTheoHeThong.map((rap, index) => {
            return (
                <div onClick={() => this.props.layDanhSachPhimTheoRap(rap.maCumRap)} className="rapChiTiet" key={index}>
                    <p className="tenCumRap">{rap.tenCumRap}</p>
                    <p className="diaChi">Địa Chỉ : {rap.diaChi}</p>
                </div>
            )
        })
    }

    renderDanhSachPhim = () => {

        let { dsPhimTheoRap } = this.props;

        return dsPhimTheoRap.map((phim, index) => {
            return (
                <div key={index}>
                    <h4>Phim:  {phim.tenPhim}</h4>
                    <h4>Lịch Chiếu</h4>
                    <p>
                        {phim.lstLichChieuTheoPhim.slice(1, 16).map((lichChieu, index) => {
                            return (
                                <div>
                                    <NavLink to={`/datve/${lichChieu.maLichChieu}`}><p>{lichChieu.ngayChieuGioChieu}</p></NavLink>
                                    {/* <p>{lichChieu.maLichChieu}</p> */}
                                </div>
                            )
                        })}
                    </p>
                </div>
            )
        })

    }



    render() {

        console.log('rap', this.props.dsRapTheoHeThong)

        return (
            <div className="user--heThongRap">
                <div className="user--heThongRap__content container">
                    <div className="row">

                        {/* Danh sách hệ thống rạp */}
                        <div className="user--heThongRap__dsachHeThong col-2 col-md-1">

                            {this.renderDSHeThongRap()}

                        </div>


                        {/* Danh sách rạp trong hệ thống */}
                        <div className="user--heThongRap__dsachRap col-4 col-md-3">

                            {this.renderRapTheoHeThong()}

                        </div>


                        {/* Danh sách phim trong rạp */}
                        <div className="user--heThongRap__lichChieu col-6 col-md-8">

                            {this.renderDanhSachPhim()}

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        dsHeThongRap: state.QuanLyPhimReducer.dsHeThongRap,
        dsRapTheoHeThong: state.QuanLyPhimReducer.dsRapTheoHeThong,
        dsPhimTheoRap: state.QuanLyPhimReducer.dsPhimTheoRap,
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        layThongTinHeThongRap: () => { Dispatch(layThongTinHeThongRap()) },
        layThongTinRapTheoHeThong: (maHeThongRap) => { Dispatch(layThongTinRapTheoHeThong(maHeThongRap)) },
        layDanhSachPhimTheoRap: (maCumRap) => { Dispatch(layDanhSachPhimTheoRap(maCumRap)) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserRap)