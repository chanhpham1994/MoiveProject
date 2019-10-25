import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capNhatThongTinPhim } from '../../Redux/actions/QuanLyPhimAction';

class ModalPhim extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phim: {
                maPhim: '',
                tenPhim: '',
                biDanh: '',
                trailer: '',
                hinhAnh: '',
                moTa: '',
                ngayKhoiChieu: '',
                danhGia: ''
            },
            errors: {
                maPhim: '',
                tenPhim: '',
                biDanh: '',
                trailer: '',
                hinhAnh: '',
                moTa: '',
                ngayKhoiChieu: '',
                danhGia: ''
            },


        }
    }

    validateInput = (name, value) => {
        let errorMessage = '';

        if (name === 'maPhim') {
            if (!value) {
                errorMessage = 'Mã Phim không được để trống'
            }
        }

        if (name === 'tenPhim') {
            if (!value) {
                errorMessage = 'Tên Phim không được để trống'
            }
        }

        if (name === 'biDanh') {
            if (!value) {
                errorMessage = 'Bí Danh không được để trống'
            }
        }

        if (name === 'trailer') {
            if (!value) {
                errorMessage = 'Trailer không được để trống'
            }
        }

        if (name === 'hinhAnh') {
            if (!value) {
                errorMessage = 'Hinh Anh không được để trống'
            }
        }

        if (name === 'ngayKhoiChieu') {
            if (!value) {
                errorMessage = 'Ngày Khởi Chiếu không được để trống'
            }
        }

        if (name === 'danhGia') {
            if (!value) {
                errorMessage = 'Đánh Giá không được để trống'
            }
        }


        return errorMessage;
    }

    handleChange = (event) => {

        const { name, value, type } = event.target;

        if (type !== 'file') {
            this.setState({
                phim: { ...this.state.phim, [name]: value }
            }, () => {
                console.log(this.state.phim)
            })
        } else {
            console.log(event.target.files);
            this.setState({
                phim: { ...this.state.phim, [name]: event.target.files[0] }
            }, () => {
                console.log(this.state.phim)
            })
        }
    }

    handleBlur = (event) => {

        const { name, value } = event.target;

        const errorMessage = this.validateInput(name, value);

        this.setState({
            errors: { ...this.state.errors, [name]: errorMessage }
        })

    }

    renderErrorMess = (errorMessage) => {
        if (errorMessage !== '') {
            return <div className='alert alert-danger'>{errorMessage}</div>
        }

        return '';
    }

    handleSubmit = (event) => {

        event.preventDefault();

        this.props.capNhatThongTinPhim(this.state.phim)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            phim: { ...nextProps.phimCanSua }
        })
    }


    render() {

        console.log('phim Can Sua' , this.props.phimCanSua)
        return (
            <div>

                <div className="modal fade" id="modelPhim" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{maxWidth:'1000px'}}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Cập Nhật Thông Tin Phim</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="container-fluid">
                                    <form onSubmit={this.handleSubmit} className='my-2'>
                                        <div className='row'>
                                            {/* Mã Phim */}
                                            <div className="form-group col-6">
                                                <label htmlFor="inputAddress">Mã Phim (*)</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='maPhim' value={this.state.phim.maPhim} id="inputAddress" placeholder="Mã Phim" />
                                                {this.renderErrorMess(this.state.errors.maPhim)}
                                            </div>


                                            {/* Tên Phim */}
                                            <div className="form-group col-6">
                                                <label htmlFor="password">Tên Phim (*)</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='tenPhim' value={this.state.phim.tenPhim} id="inputPassword4" placeholder="Tên Phim" />
                                                {this.renderErrorMess(this.state.errors.tenPhim)}
                                            </div>

                                            {/* Bí Danh */}
                                            <div className="form-group col-6">
                                                <label htmlFor="inputAddress">Bí Danh (*)</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='biDanh' value={this.state.phim.biDanh} id="inputAddress" placeholder="Bí Danh" />
                                                {this.renderErrorMess(this.state.errors.biDanh)}
                                            </div>


                                            {/* Trailer*/}
                                            <div className="form-group col-6">
                                                <label htmlFor="inputAddress">Trailer (*)</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='trailer' value={this.state.phim.trailer} id="inputAddress" placeholder="Trailer" />
                                                {this.renderErrorMess(this.state.errors.trailer)}
                                            </div>


                                            {/* Hình Ảnh */}
                                            {/* <div className="form-group col-6">
                                                <label htmlFor="inputEmail4">Hình Ảnh (*)</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='hinhAnh' value={this.state.phim.hinhAnh} id="inputEmail4" placeholder="Hình Ảnh" />
                                                {this.renderErrorMess(this.state.errors.hinhAnh)}
                                            </div> */}

                                            {/*Ngày Khởi Chiếu */}
                                            <div className="form-group col-6">
                                                <label htmlFor="inputEmail4">Ngày Khởi Chiếu (*)</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='ngayKhoiChieu' value={this.state.phim.ngayKhoiChieu} id="inputEmail4" placeholder="Ngày Khởi Chiếu" />
                                                {this.renderErrorMess(this.state.errors.ngayKhoiChieu)}
                                            </div>


                                            {/*Đánh Giá */}
                                            <div className="form-group col-2">
                                                <label htmlFor="inputEmail4">Đánh Giá (*)</label>
                                                <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='danhGia' value={this.state.phim.danhGia} id="inputEmail4" placeholder="Đánh Giá" />
                                                {this.renderErrorMess(this.state.errors.danhGia)}
                                            </div>


                                            {/* Mô Tả */}
                                            <div className="form-group col-12">
                                                <label htmlFor="inputEmail4">Mô Tả (*)</label>
                                                <textarea type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='moTa' value={this.state.phim.moTa} id="inputEmail4" placeholder="Mô Tả" style={{ height: '200px' }} />
                                                {this.renderErrorMess(this.state.errors.moTa)}
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Cập Nhật</button>
                                    </form>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        phimCanSua: state.QuanLyPhimReducer.phimCanSua
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        capNhatThongTinPhim : (phim) => {dispatch(capNhatThongTinPhim(phim))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalPhim)




