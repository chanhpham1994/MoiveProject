import {actionTypeLichChieu} from '../constants/QuanLyLichChieuRapConstant';
import {settings} from '../../Common/Config/Setting';
import axios from 'axios';
import swal from 'sweetalert2'

export const layThongTinLichChieu = (maPhim) => {
    return dispatch => {
        axios({
            url : settings.domain + `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method : 'GET'
        })
        .then(res=>{
            dispatch({
                type : actionTypeLichChieu.LAY_THONG_TIN_LICH_CHIEU_PHIM,
                thongTinLichChieu : res.data
            });
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
}
