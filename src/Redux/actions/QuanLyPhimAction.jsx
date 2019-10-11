import {actionTypePhim} from '../constants/QuanLyPhimConstant';
import axios from 'axios';

export const layDanhSachPhim = () => {
    return dispatch => {
        axios({
            url : 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP15',
            method : 'GET'
        })
        .then(res=>{
            dispatch({
                type : actionTypePhim.LAY_DANH_SACH_PHIM,
                mangDanhSachPhim : res.data
            });
            // console.log(res.data)
        })
        .catch(err=>{
            // console.log(err.response.data)
        })
    }
}