import {actionTypeRap} from '../constants/QuanLyLichChieuRapConstant';
import {settings} from '../../Common/Config/Setting';
import axios from 'axios';
import swal from 'sweetalert2';


export const layThongTinHeThongRap = () => {
    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyRap/LayThongTinHeThongRap',
            method: 'GET'
        })
        .then(res=>{
            dispatch({
                type : actionTypeRap.LAY_THONG_TIN_HE_THONG_RAP,
                dsHeThongRap : res.data
            });
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
}

export const layThongTinRapTheoHeThong = (maHeThongRap) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${settings.groupID}`,
            method: 'GET'
        })
        .then(res=>{
            dispatch({
                type : actionTypeRap.LAY_THONG_TIN_RAP_THEO_HE_THONG,
                dsRapTheoHeThong : res.data
            });
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
}

export const layDanhSachPhimTheoRap = (maCumRap) =>{
    return dispatch => {
        dispatch({
            type : actionTypeRap.LAY_DANH_SACH_PHIM_TRONG_RAP,
            maCumRap : maCumRap
        })
    }
}

export const layThongTinLichChieu = (maPhim) => {
    return dispatch => {
        axios({
            url : settings.domain + `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method : 'GET'
        })
        .then(res=>{
            dispatch({
                type : actionTypeRap.LAY_THONG_TIN_LICH_CHIEU_PHIM,
                thongTinLichChieu : res.data
            });
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
}
