const filter = {
  movies: [
    { id: 1, slug: 'phim-le', text: 'Phim Lẻ' },
    { id: 2, slug: 'phim-moi', text: 'Phim Mới' },
    { id: 3, slug: 'phim-bo', text: 'Phim Bộ' },
    { id: 4, slug: 'tv-shows', text: 'TV Shows' },
    { id: 5, slug: 'hoat-hinh', text: 'Hoạt Hình' },
    { id: 6, slug: 'phim-vietsub', text: 'Phim Vietsub' },
    { id: 7, slug: 'phim-thuyet-minh', text: 'Phim Thuyết Minh' },
    { id: 8, slug: 'phim-long-tieng', text: 'Phim Lồng Tiếng' },
    { id: 9, slug: 'phim-bo-dang-chieu', text: 'Phim Bộ Đang Chiếu' },
    { id: 10, slug: 'phim-tron-bo', text: 'Phim Trọn Bộ' },
    { id: 11, slug: 'phim-sap-chieu', text: 'Phim Sắp Chiếu' },
    { id: 12, slug: 'subteam', text: 'Subteam' },
  ],
  types: [
    { id: 1, slug: 'hanh-dong', text: 'Hành Động' },
    { id: 2, slug: 'tinh-cam', text: 'Tình Cảm' },
    { id: 3, slug: 'hai-huoc', text: 'Hài Hước' },
    { id: 4, slug: 'co-trang', text: 'Cổ Trang' },
    { id: 5, slug: 'tam-ly', text: 'Tâm Lý' },
    { id: 6, slug: 'hinh-su', text: 'Hình Sự' },
    { id: 7, slug: 'chien-tranh', text: 'Chiến Tranh' },
    { id: 8, slug: 'the-thao', text: 'Thể Thao' },
    { id: 9, slug: 'vo-thuat', text: 'Võ Thuật' },
    { id: 10, slug: 'vien-tuong', text: 'Viễn Tưởng' },
    { id: 11, slug: 'phieu-luu', text: 'Phiêu Lưu' },
    { id: 12, slug: 'khoa-hoc', text: 'Khoa Học' },
    { id: 13, slug: 'kinh-di', text: 'Kinh Dị' },
    { id: 14, slug: 'am-nhac', text: 'Âm Nhạc' },
    { id: 15, slug: 'than-thoai', text: 'Thần Thoại' },
    { id: 16, slug: 'tai-lieu', text: 'Tài Liệu' },
    { id: 17, slug: 'gia-dinh', text: 'Gia Đình' },
    { id: 18, slug: 'chinh-kich', text: 'Chính kịch' },
    { id: 19, slug: 'bi-an', text: 'Bí ẩn' },
    { id: 20, slug: 'hoc-duong', text: 'Học Đường' },
    { id: 21, slug: 'kinh-dien', text: 'Kinh Điển' },
    { id: 22, slug: 'phim-18', text: 'Phim 18+' },
  ],

  nations: [
    { id: 1, slug: 'trung-quoc', text: 'Trung Quốc' },
    { id: 2, slug: 'han-quoc', text: 'Hàn Quốc' },
    { id: 3, slug: 'nhat-ban', text: 'Nhật Bản' },
    { id: 4, slug: 'thai-lan', text: 'Thái Lan' },
    { id: 5, slug: 'au-my', text: 'Âu Mỹ' },
    { id: 6, slug: 'dai-loan', text: 'Đài Loan' },
    { id: 7, slug: 'hong-kong', text: 'Hồng Kông' },
    { id: 8, slug: 'an-do', text: 'Ấn Độ' },
    { id: 9, slug: 'anh', text: 'Anh' },
    { id: 10, slug: 'phap', text: 'Pháp' },
    { id: 11, slug: 'canada', text: 'Canada' },
    { id: 12, slug: 'quoc-gia-khac', text: 'Quốc Gia Khác' },
    { id: 13, slug: 'duc', text: 'Đức' },
    { id: 14, slug: 'tay-ban-nha', text: 'Tây Ban Nha' },
    { id: 15, slug: 'tho-nhi-ky', text: 'Thổ Nhĩ Kỳ' },
    { id: 16, slug: 'ha-lan', text: 'Hà Lan' },
    { id: 17, slug: 'indonesia', text: 'Indonesia' },
    { id: 18, slug: 'nga', text: 'Nga' },
    { id: 19, slug: 'mexico', text: 'Mexico' },
    { id: 20, slug: 'ba-lan', text: 'Ba Lan' },
    { id: 21, slug: 'uc', text: 'Úc' },
    { id: 22, slug: 'thuy-dien', text: 'Thụy Điển' },
    { id: 23, slug: 'malaysia', text: 'Malaysia' },
    { id: 24, slug: 'brazil', text: 'Brazil' },
    { id: 25, slug: 'philippines', text: 'Philippines' },
    { id: 26, slug: 'bo-dao-nha', text: 'Bồ Đào Nha' },
    { id: 27, slug: 'y', text: 'Ý' },
    { id: 28, slug: 'dan-mach', text: 'Đan Mạch' },
    { id: 29, slug: 'uae', text: 'UAE' },
    { id: 30, slug: 'na-uy', text: 'Na Uy' },
    { id: 31, slug: 'thuy-si', text: 'Thụy Sĩ' },
    { id: 32, slug: 'chau-phi', text: 'Châu Phi' },
    { id: 33, slug: 'nam-phi', text: 'Nam Phi' },
    { id: 34, slug: 'ukraina', text: 'Ukraina' },
    { id: 35, slug: 'a-rap-xe-ut', text: 'Ả Rập Xê Út' },
  ],
  sortBy: [
    { id: 1, slug: '', text: 'Ngày phát hành' },
    { id: 2, slug: 'modified.time', text: 'Ngày cập nhật' },
    { id: 3, slug: 'year', text: 'Năm sản xuất' },
  ],
  years: [
    { id: 2026, slug: '2026', text: '2026' },
    { id: 2025, slug: '2025', text: '2025' },
    { id: 2024, slug: '2024', text: '2024' },
    { id: 2023, slug: '2023', text: '2023' },
    { id: 2022, slug: '2022', text: '2022' },
    { id: 2021, slug: '2021', text: '2021' },
    { id: 2020, slug: '2020', text: '2020' },
    { id: 2019, slug: '2019', text: '2019' },
    { id: 2018, slug: '2018', text: '2018' },
    { id: 2017, slug: '2017', text: '2017' },
    { id: 2016, slug: '2016', text: '2016' },
    { id: 2015, slug: '2015', text: '2015' },
    { id: 2014, slug: '2014', text: '2014' },
    { id: 2013, slug: '2013', text: '2013' },
    { id: 2012, slug: '2012', text: '2012' },
    { id: 2011, slug: '2011', text: '2011' },
    { id: 2010, slug: '2010', text: '2010' },
    { id: 2009, slug: '2009', text: '2009' },
    { id: 2008, slug: '2008', text: '2008' },
    { id: 2007, slug: '2007', text: '2007' },
    { id: 2006, slug: '2006', text: '2006' },
    { id: 2005, slug: '2005', text: '2005' },
    { id: 2004, slug: '2004', text: '2004' },
    { id: 2003, slug: '2003', text: '2003' },
    { id: 2002, slug: '2002', text: '2002' },
    { id: 2001, slug: '2001', text: '2001' },
    { id: 2000, slug: '2000', text: '2000' },
  ],
};

export default filter;
