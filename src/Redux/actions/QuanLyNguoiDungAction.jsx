import { actionTypeNgDung } from '../constants/QuanLyNguoiDungConstant';
import { settings } from '../../Common/Config/Setting'
import axios from 'axios';
import swal from 'sweetalert2'

export const dangNhap = (thongTinNguoiDung) => {

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
            })
            .catch(err => {
                swal.fire(
                    'Thông báo đăng nhập', err.response.data, 'error'
                );
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
            data: { ...nguoiDung, maNhom: settings.groupID },
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

