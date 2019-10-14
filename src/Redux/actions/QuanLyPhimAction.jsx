import {actionTypePhim} from '../constants/QuanLyPhimConstant';
import {settings} from '../../Common/Config/Setting';
import axios from 'axios';

export const layDanhSachPhim = () => {
    return dispatch => {
        axios({
            url : settings.domain + '/QuanLyPhim/LayDanhSachPhim?maNhom=GP15',
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

export const themPhim = (phim) => {

    let file = phim.hinhAnh;
    phim.hinhAnh = file.name;

    return dispatch => {
        axios({
            url : settings.domain + '/QuanLyPhim/ThemPhim',
            method : 'POST',
            data: {...phim, maNhom : settings.groupID, ngayTao : '13/10/2019'},
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
        .then(res=>{
            // console.log(res.data)
            let frm = new FormData();
            frm.append('file',file);
            frm.append('tenPhim',phim.tenPhim);

            axios({
                url : settings.domain + 'QuanLyPhim/UploadHinhAnhPhim',
                method : 'POST',
                data : frm
            })
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err.response.data)
            })
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
}

