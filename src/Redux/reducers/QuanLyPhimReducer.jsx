import {actionTypePhim} from '../constants/QuanLyPhimConstant';
import {actionTypeNgDung} from '../constants/QuanLyNguoiDungConstant';

const initialState = {
    mangNguoiDung : [],
    mangDanhSachPhim : []
}

export const QuanLyPhimReducer =  (state = initialState, action) => {

    switch (action.type) {

        case actionTypeNgDung.LAY_DANH_SACH_NGUOI_DUNG:
            state.mangNguoiDung = action.mangNguoiDung;
            return {...state}

        case actionTypeNgDung.XOA_NGUOI_DUNG:
            // let index = state.mangNguoiDung.findIndex(ngDung => ngDung.taiKhoan === action.nguoiCanXoa);
            // state.mangNguoiDung = [...state.mangNguoiDung].splice(index,1);
            console.log(action.nguoiCanXoa)
            return {...state}

        case actionTypePhim.LAY_DANH_SACH_PHIM:
            state.mangDanhSachPhim = action.mangDanhSachPhim
            return {...state}

        

    default:
        return state
    }
}
