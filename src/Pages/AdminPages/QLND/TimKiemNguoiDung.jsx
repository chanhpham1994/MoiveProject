import React, { Component } from 'react'
import { connect } from 'react-redux'
import { layDanhSachNguoiDung, timKiemNguoiDung, xoaNguoiDung, layThongTinNguoiDungSua } from '../../../Redux/actions/QuanLyNguoiDungAction';
import Modal from '../../../Component/AdminComponent/Modal';
import Pagination from '../../../Component/Helper/Pagination'

class TimKiemNguoiDung extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tuKhoa: '',
            trangHienTai: [1],
            soNgTrongTrang: [10]
        }
    }


    //Lấy danh sách người dùng
    componentDidMount = () => {

        this.props.layDanhSachNguoiDung();

    }



    renderDanhSachNguoiDung = (mangNguoiDung) => {
        // let mangNguoiDung = this.props.mangNguoiDung
        return mangNguoiDung.map((nguoiDung, index) => {
            return (
                <tr key={index}>

                    <td>{nguoiDung.taiKhoan}</td>
                    <td>{nguoiDung.hoTen}</td>
                    <td>{nguoiDung.email}</td>
                    <td>{nguoiDung.soDt}</td>
                    <td>{nguoiDung.matKhau}</td>
                    <td>{nguoiDung.maLoaiNguoiDung}</td>

                    <td>
                        <button onClick={() => this.props.layThongTinNguoiDungSua(nguoiDung)} className='btn btn-primary mr-3' data-toggle="modal" data-target="#modelId" > Sửa </button>
                        <button onClick={() => this.props.xoaNguoiDung(nguoiDung.taiKhoan)} className='btn btn-danger'> Xóa </button>
                    </td>
                </tr>
            )
        })
    }


    handleChange = (event) => {

        const { value } = event.target;

        this.setState({
            tuKhoa: value
        }, () => {
            console.log(this.state.tuKhoa)
        })

    }


    handleSubmit = (event) => {

        event.preventDefault();

        this.props.timKiemNguoiDung(this.state.tuKhoa)

    }


    render() {

        // Get current post
        const indexOfLastPost = this.state.trangHienTai * this.state.soNgTrongTrang;
        const indexOfFirstPost = indexOfLastPost - this.state.soNgTrongTrang;
        const currentPost = this.props.mangNguoiDung.slice(indexOfFirstPost, indexOfLastPost);

        //Change page
        const paginate = (pageNumber) => {
            this.setState({
                trangHienTai: [pageNumber]
            })
        }

        return (
            <div>
                {/* MODAL SUA THONG TIN KHACH HANG */}
                <Modal />

                {/* TÌM KIẾM KHÁCH HÀNG */}
                <div className='container'>
                    <form className="form-group my-2 my-lg-0 text-center" onKeyUp={this.handleSubmit}>

                        <div className=' row'>
                            <input className="form-control mr-sm-2 col-12" type="search" onChange={this.handleChange} value={this.state.tuKhoa} placeholder="Vui Lòng Nhập Tên Khách Hàng" aria-label="Search" />

                        </div>

                    </form>
                </div>

                {/* DANH SÁCH KHÁCH HÀNG */}

                <h4>Danh Sách Người Dùng</h4>


                {/* PAGINATION */}

                <div>
                    <Pagination soNgTrongTrang={this.state.soNgTrongTrang} tongSoNguoi={this.props.mangNguoiDung.length} paginate={paginate} />
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Tài Khoản</th>
                            <th>Họ Tên</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Mật Khẩu</th>
                            <th>Mã Loại Người Dùng</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderDanhSachNguoiDung(currentPost)}
                    </tbody>
                </table>




            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangNguoiDung: state.QuanLyPhimReducer.mangNguoiDung,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachNguoiDung: () => { dispatch(layDanhSachNguoiDung()) },
        timKiemNguoiDung: (tuKhoa) => { dispatch(timKiemNguoiDung(tuKhoa)) },
        xoaNguoiDung: (taiKhoanXoa) => { dispatch(xoaNguoiDung(taiKhoanXoa)) },
        layThongTinNguoiDungSua: (nguoiDung) => { dispatch(layThongTinNguoiDungSua(nguoiDung)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimKiemNguoiDung)

