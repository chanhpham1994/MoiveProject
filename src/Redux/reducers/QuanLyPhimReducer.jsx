import { actionTypePhim } from '../constants/QuanLyPhimConstant';
import { actionTypeNgDung } from '../constants/QuanLyNguoiDungConstant';
import { actionTypeLichChieu } from '../constants/QuanLyLichChieuRapConstant';

const initialState = {

    mangNguoiDung: [],
    mangDanhSachPhim: [],
    thongTinChiTietPhim: [],
    nguoiDungCanSua: {
        taiKhoan: 'minhchanh',
        matKhau: '321321',
        hoTen: 'minhchanh',
        soDt: '32165497',
        email: 'chanhphamnguyen@gmail.com',
        maLoaiNguoiDung: 'QuanTri'
    },
    phimCanSua: {
        maPhim: '1314',
        tenPhim: 'michan',
        biDanh: 'michan',
        trailer: 'michan',
        hinhAnh: 'michan',
        moTa: 'michan',
        ngayKhoiChieu: 'michan',
        danhGia: 'michan',
        maNhom: 'GP15'
    },
    thongTinLichChieu: [],

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

            if (index !== -1) {
                mangThayThe.splice(index, 1);
            }
            state.mangNguoiDung = mangThayThe;

            return { ...state }

        //LAY_THONG_TIN_NGUOI_DUNG_SUA
        case actionTypeNgDung.LAY_THONG_TIN_NGUOI_DUNG_SUA:

            state.nguoiDungCanSua = action.NguoiDungCanSua;

            return { ...state }


        //CAP_NHAT_THONG_TIN_NGUOI_DUNG
        case actionTypeNgDung.CAP_NHAT_THONG_TIN_NGUOI_DUNG:
            let mangCapNhat = [...state.mangNguoiDung];

            let index2 = mangCapNhat.findIndex(ngDung => ngDung.taiKhoan === action.ngDungDaCapNhat.taiKhoan);

            if (index2 !== -1) {
                mangCapNhat[index2] = action.ngDungDaCapNhat;
            }
            state.mangNguoiDung = mangCapNhat;

            return { ...state };


        //LAY_DANH_SACH_PHIM
        case actionTypePhim.LAY_DANH_SACH_PHIM:
            state.mangDanhSachPhim = action.mangDanhSachPhim
            return { ...state }

        //LAY_THONG_TIN_CHI_TIET_PHIM
        case actionTypePhim.LAY_THONG_TIN_PHIM:
            state.thongTinChiTietPhim = action.thongTinChiTietPhim;
            return { ...state }

        //XOA_PHIM
        case actionTypePhim.XOA_PHIM:

            let mangPhimCapNhat = [...state.mangDanhSachPhim];

            let indexPhim = mangPhimCapNhat.findIndex(phim => phim.maPhim === action.maPhim);

            if (indexPhim !== -1) {
                mangPhimCapNhat.splice(indexPhim, 1);
            }

            state.mangDanhSachPhim = mangPhimCapNhat;

            return { ...state }

        //LAY_THONG_TIN_PHIM_CAP_NHAT:---
        case actionTypePhim.LAY_THONG_TIN_PHIM_CAP_NHAT:

            let phimCanSua = action.phimCanSua;

            //làm trắng thông tin hình ảnh
            phimCanSua.hinhAnh = null;
            phimCanSua.ngayKhoiChieu = '';


            //xóa lịch chiếu
            delete phimCanSua.lichChieu;


            state.phimCanSua = phimCanSua;

            console.log("TCL: QuanLyPhimReducer ->  state.phimCanSua", state.phimCanSua)

            return { ...state }


        //CAP_NHAT_THONG_TIN_PHIM
        case actionTypePhim.CAP_NHAT_THONG_TIN_PHIM:

            let mangPhim = [...state.mangDanhSachPhim]

            let index3 = mangCapNhat.findIndex(phim => phim.maPhim === action.phimCapNhat.maPhim);

            if (index3 !== -1) {
                mangPhim[index3] = action.phim;
            }
            state.mangDanhSachPhim = mangPhim;

            return { ...state };



        //LAY_THONG_TIN_LICH_CHIEU
        case actionTypeLichChieu.LAY_THONG_TIN_LICH_CHIEU_PHIM:

            state.thongTinLichChieu = action.thongTinLichChieu;

            return { ...state }



    }
    return { ...state }
}
