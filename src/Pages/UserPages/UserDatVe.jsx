import React, { Component } from 'react';
import { connect } from 'react-redux';
import { layDanhSachPhongVe } from '../../Redux/actions/QuanLyPhimAction';
import { datGhe, huyDat, datVe } from '../../Redux/actions/QuanLyNguoiDungAction';
import UserTimeUp from '../../Component/UserComponent/UserTimeUp';
import LoadingComponent from '../../Component/LoadingComponent/LoadingComponent';


class UserDatVe extends Component {

    constructor(props) {
        super(props)

        this.state = {
            thongTinPhim: {},
            timeUp: false,
            thongTinDatVe: {
                "maLichChieu": this.props.match.params.maLichChieu,
                "danhSachVe": [
                    {
                        "maGhe": 0,
                        "giaVe": 0
                    }
                ],
                "taiKhoanNguoiDung": this.props.thongTinKHDangNhap.taiKhoan
            },
            isLoading: true,
            minutes: 5,
            seconds: 4,
        }
    }


    componentDidMount = () => {

        //lấy giá trị tham số từ URL this.props.match.params.tenThamSO
        let { maLichChieu } = this.props.match.params;

        this.props.layDanhSachPhongVe(maLichChieu);

        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            thongTinPhim: { ...nextProps.danhSachPhongVe.thongTinPhim },
            //Truyền thông tin người dùng đặt
            thongTinDatVe: {
                "maLichChieu": this.props.match.params.maLichChieu,
                "danhSachVe": [...nextProps.danhSachGheDaDat],
                "taiKhoanNguoiDung": nextProps.thongTinKHDangNhap.taiKhoan
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }


    // Set thời gian hiển thị
    setTimeOut = setTimeout(() => {
        this.setState({
            isLoading: false
        })
    }, 4000);

    // Set thời gian còn lại của khách hàng
    setTimeOut = setTimeout(() => {
        this.setState({
            timeUp: true,
        })
    }, 305000);

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
                    // ghế được chọn => màu xanh lá // chưa được chọn màu xám
                    <div className="col-1 pl-1 py-1" key={index}>
                        <button className={danhSachGheDaDat.indexOf(ghe) !== -1 ? 'btn btn-success ghe--ngoi' : 'btn btn-secondary ghe--ngoi'} onClick={() => this.props.datGhe(ghe, index)}>
                            {/* IN RA DANH SACH GHE VIP */}
                            {ghe.loaiGhe === 'Thuong' ? ghe.tenGhe : ghe.loaiGhe}
                        </button>
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


    render() {

        console.log('thonTinDatVe', this.state.thongTinDatVe)
        console.log('danhSachGheDaDat', this.props.danhSachGheDaDat)

        const { minutes, seconds } = this.state

        return (
            <div>

                {this.state.isLoading ?

                    <LoadingComponent />

                    :

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

                                        <h3>Chọn Ghế</h3>

                                        {/* Thời Gian Còn Lại Của người đặt */}
                                        <span >Thời Gian Còn lại :</span>
                                        <span className="user--datve__time">
                                            0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                                        </span>

                                        
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

                                                {/* Không cho người dùng đặt vé khi chưa đăng nhập */}
                                                {
                                                    this.props.thongTinKHDangNhap.taiKhoan === undefined ?

                                                        <div>
                                                            <h4>Vui Lòng Đăng Nhập Trước Khi Đặt Vé!! Xin Cảm Ơn</h4>
                                                            <button className="btn btn-success" disabled onClick={() => { this.props.datVe(this.state.thongTinDatVe) }} >Đặt Vé</button>
                                                        </div>
                                                        :
                                                        // Không cho người dùng đặt vé khi chưa chọn ghế

                                                        <button className="btn btn-success" disabled={this.props.danhSachGheDaDat == ''} onClick={() => { this.props.datVe(this.state.thongTinDatVe) }} >Đặt Vé</button>
                                                }



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            :

                            // Render Het Thoi Gian Chon Ghe
                            <UserTimeUp />}

                    </div>

                }

            </div>
        )
    }
}


const mapStateToProps = (State) => {
    return {
        danhSachPhongVe: State.QuanLyPhimReducer.danhSachPhongVe,
        danhSachGheDaDat: State.QuanLyPhimReducer.danhSachGheDaDat,
        tongTien: State.QuanLyPhimReducer.tongTien,
        thongTinKHDangNhap: State.QuanLyPhimReducer.thongTinKHDangNhap
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        layDanhSachPhongVe: (maLichChieu) => { Dispatch(layDanhSachPhongVe(maLichChieu)) },
        datGhe: (thongTinGhe, index) => { Dispatch(datGhe(thongTinGhe, index)) },
        huyDat: (index) => { Dispatch(huyDat(index)) },
        datVe: (thongTinDatVe) => { Dispatch(datVe(thongTinDatVe)) }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(UserDatVe)