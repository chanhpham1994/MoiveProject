import { actionTypePhim } from '../constants/QuanLyPhimConstant';
import { actionTypeNgDung } from '../constants/QuanLyNguoiDungConstant';

const initialState = {

    mangNguoiDung: [],
    mangDanhSachPhim: [],
    nguoiDungCanSua : {
        taiKhoan: 'minhchanh',
        matKhau: '321321',
        hoTen: 'minhchanh',
        soDt: '32165497',
        email: 'chanhphamnguyen@gmail.com',
        maLoaiNguoiDung: 'QuanTri'
    },

}

export const QuanLyPhimReducer = (state = initialState, action) => {

    switch (action.type) {


        // LAY_DANH_SACH_NGUOI_DUNG
        case actionTypeNgDung.LAY_DANH_SACH_NGUOI_DUNG:
            state.mangNguoiDung = action.mangNguoiDung;
            return { ...state }


        // TIM_KIEM_NGUOI_DUNG
        case actionTypeNgDung.TIM_KIEM_NGUOI_DUNG:
            state.mangNguoiDung = action.mangNguoiDungTimKiem;
            return { ...state }


        //XOA_NGUOI_DUNG
        case actionTypeNgDung.XOA_NGUOI_DUNG:
            let mangThayThe = [...state.mangNguoiDung];

            let index = mangThayThe.findIndex(ngDung => ngDung.taiKhoan === action.taiKhoan)

            if(index !== -1) {
                mangThayThe.splice(index,1);
            }
            state.mangNguoiDung = mangThayThe;

            return {...state}

        //LAY_THONG_TIN_NGUOI_DUNG_SUA
        case actionTypeNgDung.LAY_THONG_TIN_NGUOI_DUNG_SUA:

            state.nguoiDungCanSua = action.NguoiDungCanSua;
            return {...state}


        //CAP_NHAT_THONG_TIN_NGUOI_DUNG
        case actionTypeNgDung.CAP_NHAT_THONG_TIN_NGUOI_DUNG:
            let mangCapNhat = [...state.mangNguoiDung];

            let index2 = mangCapNhat.findIndex(ngDung => ngDung.taiKhoan === action.ngDungDaCapNhat.taiKhoan);

            if(index2 !== -1){
                mangCapNhat[index2] = action.ngDungDaCapNhat;
            }
            state.mangNguoiDung = mangCapNhat;

            return {...state};


        //LAY_DANH_SACH_PHIM
        case actionTypePhim.LAY_DANH_SACH_PHIM:
            state.mangDanhSachPhim = action.mangDanhSachPhim
            return { ...state }

    }
    return {...state}
}
