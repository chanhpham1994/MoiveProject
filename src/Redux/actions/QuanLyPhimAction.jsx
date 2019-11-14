import { actionTypePhim } from '../constants/QuanLyPhimConstant';
import { settings } from '../../Common/Config/Setting';
import axios from 'axios';
import swal from 'sweetalert2'

export const layDanhSachPhim = () => {
    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyPhim/LayDanhSachPhim?maNhom=GP15',
            method: 'GET'
        })
            .then(res => {
                dispatch({
                    type: actionTypePhim.LAY_DANH_SACH_PHIM,
                    mangDanhSachPhim: res.data
                });
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
}

export const layThongTinPhim = (maPhim) => {
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
            method: 'GET'
        })
            .then(res => {
                dispatch({
                    type: actionTypePhim.LAY_THONG_TIN_PHIM,
                    thongTinChiTietPhim: res.data
                });
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
}

export const themPhim = (phim) => {

    let file = phim.hinhAnh;
    phim.hinhAnh = file.name;

    return dispatch => {
        axios({
            url: settings.domain + '/QuanLyPhim/ThemPhim',
            method: 'POST',
            data: { ...phim, maNhom: settings.groupID, ngayTao: '10/10/2019' },
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
            .then(res => {
                // console.log(res.data)
                let frm = new FormData();
                frm.append('file', file);
                frm.append('tenPhim', phim.tenPhim);
                frm.append('maNhom', settings.groupID);

                axios({
                    url: settings.domain + 'QuanLyPhim/UploadHinhAnhPhim',
                    method: 'POST',
                    data: frm
                })
                    .then(res => {
                        console.log(res.data);
                        swal.fire(
                            'Thêm Phim Thành Công!',
                            'Vui Lòng Nhấn OK!',
                            'success'
                        )
                    })
                    .catch(err => {
                        console.log(err.response.data)
                    })
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
}


export const xoaPhim = (maPhim) => {
    // console.log('ma cua phim',maPhim);
    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            method: 'DELETE',
            data: maPhim,
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
            .then(res => {
                swal.fire(
                    'Xóa Phim Thành Công!',
                    'Vui Lòng Nhấn OK!',
                    'success'
                )
                dispatch({
                    type: actionTypePhim.XOA_PHIM,
                    maPhim: maPhim
                })
                // console.log('ma cua phim',res.data);
            })
            .catch(err => {
                // console.log(err.response.data)
            })
    }
}

export const layThongTinPhimCapNhat = (phim) => {

    return dispatch => {
        dispatch({
            type: actionTypePhim.LAY_THONG_TIN_PHIM_CAP_NHAT,
            phimCanSua: phim
        })
    }
}



export const capNhatThongTinPhim = (phim) => {

    let file = phim.hinhAnh;
    
    if (file === null) {
        console.log(file);
        return dispatch => {

            axios({
                url: settings.domain + '/QuanLyPhim/CapNhatPhim',
                method: 'POST',
                data: { ...phim, maNhom: settings.groupID},
                headers:
                {
                    "Authorization": "Bearer " + localStorage.getItem(settings.token)
                }
            })
                .then(res => {
                    swal.fire(
                        'Cập Nhật Phim Thành Công!',
                        'Vui Lòng Nhấn OK!',
                        'success'
                    )
                })
                .catch(err => {
                    console.log(err.response.data)
                })
        }
    }
    else {
        phim.hinhAnh = file.name;

        return dispatch => {
            axios({
                url: settings.domain + '/QuanLyPhim/CapNhatPhim',
                method: 'POST',
                data: { ...phim, maNhom: settings.groupID },
                headers:
                {
                    "Authorization": "Bearer " + localStorage.getItem(settings.token)
                }
            })
                .then(res => {

                    let frm = new FormData();
                    frm.append('file', file);
                    frm.append('tenPhim', phim.tenPhim);
                    frm.append('maNhom', settings.groupID);

                    axios({
                        url: settings.domain + '/QuanLyPhim/UploadHinhAnhPhim',
                        method: 'POST',
                        data: frm
                    })
                        .then(res => {
                            console.log(res.data);
                            swal.fire(
                                'Cập Nhật Phim Thành Công!',
                                'Vui Lòng Nhấn OK!',
                                'success'
                            )
                        })
                        .catch(err => {
                            console.log(err.response.data)
                        })
                })
                .catch(err => {
                    console.log(err.response.data)
                })
        }
    }
}



export const layThongTinRap = (ngayChieuGioChieu) => {

    return dispatch => {
        dispatch({
            type: actionTypePhim.LAY_THONG_TIN_RAP,
            ngayChieuGioChieu: ngayChieuGioChieu
        })
    }
}



export const layDanhSachPhongVe = (maLichChieu) => {

    return dispatch => {
        axios({
            url: settings.domain + `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method: "GET",
            headers:
            {
                "Authorization": "Bearer " + localStorage.getItem(settings.token)
            }
        })
        .then(res=>{
            console.log(res.data);
            dispatch({
                type: actionTypePhim.LAY_DANH_SACH_PHONG_VE,
                danhSachPhongVe: res.data
            });
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }

}
