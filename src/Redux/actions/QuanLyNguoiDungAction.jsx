import { actionTypeNgDung } from '../constants/QuanLyNguoiDungConstant';
import { settings } from '../../Common/Config/Setting';
import axios from 'axios';
import swal from 'sweetalert2';

export const dangNhapUserPage = (thongTinNguoiDung) => {

    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyNguoiDung/DangNhap',
            method: 'POST',
            data: thongTinNguoiDung
        })
            .then(res => {

                localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
                localStorage.setItem(settings.token, res.data.accessToken);

                console.log(res.data.accessToken)
                console.log(res.data)

                swal.fire(
                    'Đăng Nhập Thành Công!',
                    'success'
                )
                dispatch({
                    type: actionTypeNgDung.DANG_NHAP,
                    thongTinKHDangNhap: res.data
                })
            })
            .catch(err => {
                swal.fire(
                    'Thông báo đăng nhập', err.response.data, 'error'
                );
                console.log(err.response.data)
            })
    }
}

export const dangNhapAminPage = (thongTinNguoiDung,moveToAdminPage) => {
    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyNguoiDung/DangNhap',
            method: 'POST',
            data: thongTinNguoiDung
        })
            .then(res => {

                localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
                localStorage.setItem(settings.token, res.data.accessToken);

                console.log(res.data.accessToken)
                console.log(res.data)

                swal.fire(
                    'Đăng Nhập Thành Công!',
                    'success'
                )
                dispatch({
                    type: actionTypeNgDung.DANG_NHAP,
                    thongTinKHDangNhap: res.data
                })
                moveToAdminPage();
            })
            .catch(err => {
                swal.fire(
                    'Thông báo đăng nhập', err.response.data, 'error'
                );
                console.log(err.response.data)
            })
    }
}

export const daDangNhap = (thongTin) => {
    return dispatch => {
        
        dispatch({
            type: actionTypeNgDung.DA_DANG_NHAP,
            thongTinKHDangNhap : thongTin
        })
    }
}


export const dangKy = (thongTinNguoiDung) => {

    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyNguoiDung/DangKy',
            method: 'POST',
            data: {...thongTinNguoiDung, maNhom: settings.groupID}
        })
            .then(res => {
                console.log(res.data)
                swal.fire(
                    'Đăng Ký Thành Công!',
                    'success'
                )
            })
            .catch(err => {
                swal.fire(
                    'Thông báo', err.response.data, 'error'
                );
                console.log(err.response.data)
            })
    }
}



export const dangXuat = () => {
    return dispatch => {
        //Xóa local Storage
        localStorage.clear();

        dispatch({
           type : actionTypeNgDung.DANG_XUAT
        })
    }
}


export const datVe = (thongTinDatVe) => {
    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyDatVe/DatVe',
            method : 'POST',
            data: thongTinDatVe,
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
        .then(res=>{
            console.log(res.data)
            swal.fire({
                title: 'Đặt Vé Thành Công',
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  center left
                  no-repeat
                `
              })
              
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
}

export const lichSuDatVe = (taiKhoan) => {
    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyNguoiDung/ThongTinTaiKhoan',
            method: 'POST',
            data: {taiKhoan: taiKhoan},
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
        .then(res=>{
            console.log('lichSuDatVe',res.data)
            dispatch({
                type: actionTypeNgDung.LICH_SU_DAT_VE,
                lichSuDatVeND : res.data
            })

        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
}


export const layDanhSachNguoiDung = () => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${settings.groupID}`,
            method: 'GET'
        })
            .then(res => {
                dispatch({
                    type: actionTypeNgDung.LAY_DANH_SACH_NGUOI_DUNG,
                    mangNguoiDung: res.data
                });
                // console.log(res.data)
            })
            .catch(err => {
                // console.log(err.response.data)
            })
    }
}

export const themNguoiDung = (nguoiDung) => {
    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyNguoiDung/ThemNguoiDung',
            method: 'POST',
            data: { ...nguoiDung, maNhom: settings.groupID , maLoaiNguoiDung: 'KhachHang' },
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
            .then(res => {
                swal.fire(
                    'Thêm Tài Khoản Thành Công!',
                    'Vui Lòng Nhấn OK!',
                    'success'
                )
                console.log('nguoiDung', res.data)
            })
            .catch(err => {
                swal.fire({
                    type: 'error',
                    title: 'Rất Tiếc!!',
                    text: err.response.data,
                })
                console.log(err.response.data)

            })
    }
}

export const timKiemNguoiDung = (tuKhoa) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${settings.groupID}&tuKhoa=${tuKhoa}`,
            method: 'GET',
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
            .then(res => {
                dispatch({

                    type: actionTypeNgDung.TIM_KIEM_NGUOI_DUNG,
                    mangNguoiDungTimKiem: res.data,

                });
                console.log('nguoiDungTiemKiem', res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
}


export const xoaNguoiDung = (taiKhoanXoa) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoanXoa}`,
            method: 'DELETE',
            data: taiKhoanXoa,
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
            .then(res => {
                swal.fire(
                    'Xóa Tài Khoản Thành Công!',
                    'Vui Lòng Nhấn OK!',
                    'success'
                )
                dispatch({
                    type: actionTypeNgDung.XOA_NGUOI_DUNG,
                    taiKhoan: taiKhoanXoa,
                })


                console.log('nguoiDung', res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
}


export const layThongTinNguoiDungSua = (nguoiDung) => {

    return dispatch => {
        dispatch({
            type: actionTypeNgDung.LAY_THONG_TIN_NGUOI_DUNG_SUA,
            NguoiDungCanSua: nguoiDung
        })
    }
}

export const capNhatThongTinNguoiDung = (nguoiDung) => {
  
    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            method: 'PUT',
            data: { ...nguoiDung, maNhom: settings.groupID },
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
            .then(res => {
                swal.fire(
                    'Cập Nhật Tài Khoản Thành Công!',
                    'Vui Lòng Nhấn OK!',
                    'success'
                )
                dispatch({
                    type: actionTypeNgDung.CAP_NHAT_THONG_TIN_NGUOI_DUNG,
                    ngDungDaCapNhat: nguoiDung,

                })
                console.log('nguoiDung', res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
}


export const datGhe = (thongTinGhe,index) => {
    
    return dispatch => {
        dispatch({
            type: actionTypeNgDung.DAT_GHE,
            thongTinGhe: thongTinGhe,
            index: index
        })
    }
}


export const huyDat = (index) => {
    
    return dispatch => {
        dispatch({
            type: actionTypeNgDung.HUY_DAT,
            index: index,
        })
    }
}

