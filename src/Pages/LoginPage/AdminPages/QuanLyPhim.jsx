import React, { Component } from 'react'

export default class QuanLyPhim extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             phim : {
                 maPhim : '',
                 tenPhim : '',
                 biDanh : '',
                 trailer : '',
                 hinhAnh : '',
                 moTa : '', 
                 maNhom : '',  
                 ngayKhoiChieu : '',  
                 danhGia : ''

             },
             errors : {
                maPhim : '',
                tenPhim : '',
                biDanh : '',
                trailer : '',
                hinhAnh : '',
                moTa : '', 
                maNhom : '',  
                ngayKhoiChieu : '',  
                danhGia : ''
             }
        }
    }

    validateInput = (name,value) => {
        let errorMessage = '';
    

        return errorMessage;
    }



    handleChange = (event) => {

        const {name,value} = event.target;

        this.setState ({
            phim : {...this.state.phim,[name] : value}
        })
        
    }

    handleBlur = (event) => {

        const {name,value} = event.target;

        const errorMessage = this.validateInput(name,value);

        this.setState({
            errors : {...this.state.errors, [name] : errorMessage}
        })

    }

    renderErrorMess = (errorMessage) => {
        if(errorMessage !== ''){
            return <div className = 'alert alert-danger'>{errorMessage}</div>
        }

        return '';
    }

    handleSubmit = (event) => {

        event.preventDefault();
        
       
    }
    


    render() {
        return (
           <div>
                <h3 className='text-center text-success my-2'>THÊM PHIM</h3>
                <form onSubmit={this.handleSubmit} className='my-2'>

                    <div className='row'>
                         {/* Mã Phim */}
                        <div className="form-group col-6">
                            <label htmlFor="inputAddress">Mã Phim</label>
                            <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='maPhim' value={this.state.phim.maPhim}  id="inputAddress" placeholder="Mã Phim" />
                            {/* {this.renderErrorMess(this.state.errors.maPhim)} */}
                        </div>


                        {/* Tên Phim */}
                        <div className="form-group col-6">
                            <label htmlFor="password">Tên Phim</label>
                            <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='tenPhim' value={this.state.phim.tenPhim} id="inputPassword4" placeholder="Tên Phim" />
                            {/* {this.renderErrorMess(this.state.errors.tenPhim)} */}
                        </div>

                         {/* Bí Danh */}
                    <div className="form-group col-6">
                        <label htmlFor="inputAddress">Bí Danh</label>
                        <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='biDanh' value={this.state.phim.biDanh} id="inputAddress" placeholder="Bí Danh" />
                        {/* {this.renderErrorMess(this.state.errors.biDanh)} */}
                    </div>


                    {/* Trailer*/}
                    <div className="form-group col-6">
                        <label htmlFor="inputAddress">Trailer</label>
                        <input type="text" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='trailer' value={this.state.phim.trailer} id="inputAddress" placeholder="Trailer" />
                        {/* {this.renderErrorMess(this.state.errors.trailer)} */}
                    </div>


                    {/* Hình Ảnh */}
                    <div className="form-group col-6">
                        <label htmlFor="inputEmail4">Hình Ảnh</label>
                        <input type="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='hinhAnh' value={this.state.phim.hinhAnh} id="inputEmail4" placeholder="Hình Ảnh" />
                        {/* {this.renderErrorMess(this.state.errors.hinhAnh)} */}
                    </div>

                    {/*Mã Nhóm */}
                    <div className="form-group col-6">
                        <label htmlFor="inputEmail4">Mã Nhóm</label>
                        <input type="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='maNhom' value='GP15' id="inputEmail4" placeholder="Mã Nhóm" />
                        {/* {this.renderErrorMess(this.state.errors.maNhom)} */}
                    </div>

                     {/*Ngày Khởi Chiếu */}
                     <div className="form-group col-6">
                        <label htmlFor="inputEmail4">Ngày Khởi Chiếu</label>
                        <input type="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='ngayKhoiChieu' value={this.state.phim.ngayKhoiChieu} id="inputEmail4" placeholder="Ngày Khởi Chiếu" />
                        {/* {this.renderErrorMess(this.state.errors.ngayKhoiChieu)} */}
                    </div>


                    {/*Đánh Giá */}
                    <div className="form-group col-2">
                        <label htmlFor="inputEmail4">Đánh Giá</label>
                        <input type="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='danhGia' value={this.state.phim.danhGia} id="inputEmail4" placeholder="Đánh Giá" />
                        {/* {this.renderErrorMess(this.state.errors.danhGia)} */}
                    </div>
                    
                     
                    {/* Mô Tả */}
                    <div className="form-group col-12">
                        <label htmlFor="inputEmail4">Mô Tả</label>
                        <textarea type="email" className="form-control" onChange={this.handleChange} onBlur={this.handleBlur} name='moTa' value={this.state.phim.moTa} id="inputEmail4" placeholder="Mô Tả" />
                        {/* {this.renderErrorMess(this.state.errors.moTa)} */}
                    </div>

                    </div>

                    <button type="submit" className="btn btn-primary">Thêm Phim</button>
                </form>
            </div>
        )
    }
}
