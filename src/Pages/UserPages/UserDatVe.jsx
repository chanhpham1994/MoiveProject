import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux';
import { layDanhSachPhongVe } from '../../Redux/actions/QuanLyPhimAction';
import { datGhe, huyDat } from '../../Redux/actions/QuanLyNguoiDungAction';
import UserTimeUp from '../../Component/UserComponent/UserTimeUp';

class UserDatVe extends Component {

    constructor(props) {
        super(props)

        this.state = {
            thongTinPhim: {},
            timeUp: false,
        }
    }


    componentDidMount = () => {

        //lấy giá trị tham số từ URL this.props.match.params.tenThamSO
        let { maLichChieu } = this.props.match.params;

        this.props.layDanhSachPhongVe(maLichChieu);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            thongTinPhim: { ...nextProps.danhSachPhongVe.thongTinPhim },
        })
    }


    //Set thời gian hiển thị 
    setTimeOut = setTimeout(function () {
        this.setState({
            timeUp: true
        })
    }.bind(this), 3200000);


    // Hiển thị chi tiết phim UserTimeUp
    rednerChiTietPhim = () => {

        let { thongTinPhim } = this.state;

        return (

            <div className="user--datve__chitietphim__content">
                <img className="float-left" src={thongTinPhim.hinhAnh} width={250} height={300} alt="" />

                <div className="thongtinchitiet">
                    <h4>{thongTinPhim.tenPhim} </h4>
                    <p>Tên Rạp: {thongTinPhim.tenCumRap} </p>
                    <p>Địa Chỉ: {thongTinPhim.diaChi} </p>
                    <p>Ngày Chiếu: {thongTinPhim.ngayChieu} </p>
                    <p>Giờ Chiếu: {thongTinPhim.gioChieu} </p>
                </div>

            </div>

        )
    }


    renderGheNgoi = () => {

        let { danhSachPhongVe } = this.props;
        let { danhSachGheDaDat } = this.props;


        return danhSachPhongVe.danhSachGhe && danhSachPhongVe.danhSachGhe.slice(0, 86).map((ghe, index) => {
            if (ghe.daDat) {
                return (
                    // daDat = true => maudo
                    <div className="col-1 pl-1 py-1" key={index}>
                        <button className='btn btn-danger ghe--ngoi' disabled={ghe.daDat} onClick={() => this.props.datGhe(ghe, index)}>{ghe.tenGhe}</button>
                    </div>

                )
            } else {

                return (
                    //indexOf tim kiem ghe dang dc chon
                    <div className="col-1 pl-1 py-1" key={index}>
                        <button className={danhSachGheDaDat.indexOf(ghe) !== -1 ? 'btn btn-success ghe--ngoi' : 'btn btn-secondary ghe--ngoi'} onClick={() => this.props.datGhe(ghe)}>{ghe.tenGhe}</button>
                    </div>

                )
            }

        })

    }

    renderGheDaChon = () => {

        let { danhSachGheDaDat } = this.props;

        return danhSachGheDaDat.map((gheDaChon, index) => {
            return (
                <div key={index}>
                    <h6>Số ghế : {gheDaChon.tenGhe}</h6>
                    <span>Loại ghế : {gheDaChon.loaiGhe} / </span>
                    <span>Giá vé : {gheDaChon.giaVe}</span>
                    <span className="user--huydatve" onClick={() => this.props.huyDat(index)}>[Hủy]</span>
                </div>
            )
        })
    }



    //Render thoi gian con lai cua khach
    renderTime = ({ minutes, seconds }) => {
        return <span>{minutes}:{seconds}</span>;
    }

    render() {

        return (
            <div>

                {!this.state.timeUp ?

                    <div className="user--datve">

                        {/* Ma lich chieu : {this.props.match.params.maLichChieu} */}
                        <div className="container">
                            <div className="user--datve__header">
                                <ul>
                                    <li>1.Chọn Vé</li>
                                    <li>2.Chọn Ghế</li>
                                    <li>3.Chọn Đồ Ăn</li>
                                    <li>4.Xác Nhận</li>
                                    <li>5.Đặt Vé Thành Công</li>
                                </ul>
                            </div>

                            {/* RENDER CHITIETPHIM */}
                            <div className="user--datve__chitietphim">

                                {this.rednerChiTietPhim()}

                            </div>

                            <div style={{ clear: 'both' }}>
                            </div>


                            {/* RENDER GHE NGOI */}

                            <div className="user--datve__chonghe">

                                {/* //??????????? */}
                                <span >Thời Gian Còn lại :</span>
                                {/* <span className="user--datve__time">
                                    <Countdown date={Date.now() + 300000} renderer={this.renderTime} />
                                </span> */}

                                <h3>Chọn Ghế</h3>
                                <div className="user--datve__chuthich">
                                    <span>
                                        <i className="fa fa-square text-success"></i>
                                        Ghế Đang Chọn
                            <i className="fa fa-square text-secondary"></i>
                                        Ghế Trống
                            <i className="fa fa-square text-danger"></i>
                                        Ghế Đã Bán
                            </span>
                                </div>
                                <div className='row'>
                                    <div className='user--datve__ghe col-8 row'>
                                        <div className="vitri--manhinh col-12">
                                            <p>SCREEN</p>
                                        </div>

                                        {this.renderGheNgoi()}
                                    </div>


                                    <div className='col-4 pl-5'>

                                        {/* RENDER THOI GIAN CON LAI  VS  DANH SACH GHE DA DAT */}
                                        <h3>Giỏ Hàng Của Bạn</h3>


                                        {this.renderGheDaChon()}

                                        <div className="user--datve__tinhtien">
                                            <p>Tổng Tiền : {this.props.tongTien} VND</p>
                                        </div>

                                        <button className="btn btn-success">Đặt Vé</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :

                    // Render Het Thoi Gian Chon Ghe
                    <UserTimeUp />}

            </div>
        )
    }
}


const mapStateToProps = (State) => {
    return {
        danhSachPhongVe: State.QuanLyPhimReducer.danhSachPhongVe,
        danhSachGheDaDat: State.QuanLyPhimReducer.danhSachGheDaDat,
        tongTien: State.QuanLyPhimReducer.tongTien
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        layDanhSachPhongVe: (maLichChieu) => { Dispatch(layDanhSachPhongVe(maLichChieu)) },
        datGhe: (thongTinGhe) => { Dispatch(datGhe(thongTinGhe)) },
        huyDat: (index) => { Dispatch(huyDat(index)) },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserDatVe)