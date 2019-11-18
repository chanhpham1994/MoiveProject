import { actionTypePhim } from '../constants/QuanLyPhimConstant';
import { actionTypeNgDung } from '../constants/QuanLyNguoiDungConstant';
import { actionTypeRap } from '../constants/QuanLyLichChieuRapConstant';

const initialState = {

    mangNguoiDung: [],
    mangDanhSachPhim: [],
    thongTinChiTietPhim: [],
    nguoiDungCanSua: {
        taiKhoan: '',
        matKhau: '',
        hoTen: '',
        soDt: '',
        email: '',
        maLoaiNguoiDung: ''
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
    thongTinKHDangNhap: '',
    lichSuDatVeND:{},
    thongTinRap: [],
    danhSachPhongVe: {},
    danhSachGheDaDat: [],
    tongTien: 0,
    thongTinLichChieu: [],

    dsHeThongRap: [],
    dsRapTheoHeThong: [],
    dsPhimTheoRap : []


}

export const QuanLyPhimReducer = (state = initialState, action) => {

    switch (action.type) {

        //DANG_NHAP:
        case actionTypeNgDung.DANG_NHAP:

            //Thêm thuộc tính soDt đồng bộ với ModalNguoiDung khi cập nhật thông tin
            state.thongTinKHDangNhap = {...action.thongTinKHDangNhap,soDt:action.thongTinKHDangNhap.soDT};
            
            return { ...state }

        //DA_DANG_NHAP:
        case actionTypeNgDung.DA_DANG_NHAP:
      
            state.thongTinKHDangNhap = {...action.thongTinKHDangNhap,soDt: action.thongTinKHDangNhap.soDT};
           
            return { ...state }

        //DANG_XUAT:
        case actionTypeNgDung.DANG_XUAT:

            alert('Đã Đăng Xuất!!!');

            state.thongTinKHDangNhap = '';
          
            return { ...state }


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

            //xóa thongTin
            delete state.nguoiDungCanSua.loaiNguoiDung;
            delete state.nguoiDungCanSua.thongTinDatVe;

            return { ...state }


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

            //làm trắng thông tin 
            phimCanSua.hinhAnh = null;
            phimCanSua.ngayKhoiChieu = '';


            //xóa lịch chiếu
            delete phimCanSua.lichChieu;


            state.phimCanSua = phimCanSua;

            console.log("TCL: QuanLyPhimReducer ->  state.phimCanSua", state.phimCanSua)

            return { ...state }


        //LAY_THONG_TIN_RAP
        case actionTypePhim.LAY_THONG_TIN_RAP:

            //lấy danh sách mảng chứa rạp theo ngayChieuGioChieu
            let mangRap = state.thongTinChiTietPhim.lichChieu.filter(rap => rap.ngayChieuGioChieu === action.ngayChieuGioChieu);
            console.log("TCL: QuanLyPhimReducer -> mangRap", mangRap)

            state.thongTinRap = mangRap;

            return { ...state }

        //LAY_DANH_SACH_PHONG_VE
        case actionTypePhim.LAY_DANH_SACH_PHONG_VE:

            state.danhSachPhongVe = action.danhSachPhongVe;

            return { ...state }

        //DAT_GHE
        case actionTypeNgDung.DAT_GHE:

            let mangGhe = state.danhSachGheDaDat;

            let index4 = mangGhe.findIndex((ghe, index) => ghe.tenGhe === action.thongTinGhe.tenGhe)

            if (index4 === -1) {
                mangGhe = [...state.danhSachGheDaDat, action.thongTinGhe]
                state.tongTien += action.thongTinGhe.giaVe
            } else {
                mangGhe = mangGhe.filter(ghe=> ghe.tenGhe !== action.thongTinGhe.tenGhe)
                state.tongTien -= action.thongTinGhe.giaVe
            }

            state.danhSachGheDaDat = mangGhe;

            return { ...state }

        //HUY_DAT
        case actionTypeNgDung.HUY_DAT:

            let mangGheCN = state.danhSachGheDaDat;

            let index6 = mangGheCN.findIndex((ghe, index) => index === action.index)

            state.danhSachGheDaDat = [...mangGheCN].filter((ghe, index) => index !== index6)

            state.tongTien -= mangGheCN[index6].giaVe

            return { ...state }

        //LICH_SU_DAT_VE
        case actionTypeNgDung.LICH_SU_DAT_VE:

            state.lichSuDatVeND = {...action.lichSuDatVeND, soDt: action.lichSuDatVeND.soDT,maLoaiNguoiDung: action.maLoaiNguoiDung};
           
            return {...state}


        //LAY_THONG_TIN_HE_THONG_RAP
        case actionTypeRap.LAY_THONG_TIN_HE_THONG_RAP:

            state.dsHeThongRap = action.dsHeThongRap;

            return {...state}

        //LAY_THONG_TIN_HE_THONG_RAP
        case actionTypeRap.LAY_THONG_TIN_RAP_THEO_HE_THONG:

            state.dsRapTheoHeThong = action.dsRapTheoHeThong[0].lstCumRap;

            return {...state}

        //LAY_DANH_SACH_PHIM_TRONG_RAP
        case actionTypeRap.LAY_DANH_SACH_PHIM_TRONG_RAP:

            let index7 = state.dsRapTheoHeThong.findIndex(rap => rap.maCumRap === action.maCumRap )
            
            state.dsPhimTheoRap = state.dsRapTheoHeThong[index7].danhSachPhim;
            console.log("TCL: QuanLyPhimReducer -> state.dsPhimTheoRap", state.dsPhimTheoRap)
            
           return {...state}


        //Reset STATE:
        case actionTypeNgDung.RESET_STATE:
            state.danhSachGheDaDat = [];
            state.thongTinRap=[];
            state.tongTien= 0;
            return {...state}
    }

    return { ...state }
}
