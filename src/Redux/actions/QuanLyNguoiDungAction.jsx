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
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP15',
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
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
            method: 'POST',
            data: { ...nguoiDung,maNhom: settings.groupID },
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
        .then(res => {
                console.log('nguoiDung', res.data)
        })
        .catch(err => {
                console.log(err.response.data)
        })
    }
}

export const xoaNguoiDung = (taiKhoanXoa) => {
    return dispatch => {
        axios({
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung/',
            method: 'DELETE',
            data: taiKhoanXoa,
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
        .then(res => {
                dispatch({
                   type: actionTypeNgDung.XOA_NGUOI_DUNG,
                   nguoiCanXoa : taiKhoanXoa
                })
                
                console.log('nguoiDung', res.data)
        })
        .catch(err => {
                console.log(err.response.data)
        })
    }
}