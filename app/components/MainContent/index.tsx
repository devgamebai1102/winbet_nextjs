import { useState } from 'react';
import Banner from '../Banner'; // Import Banner

const MainContent = () => {
    // State để điều khiển hiển thị nội dung
    const [activeContent, setActiveContent] = useState('hot');

    // Hàm để thay đổi nội dung khi nhấn vào nút
    const handleContentChange = (content: string) => {
        setActiveContent(content);
    };

    return (
        <div className="bodycontent">
            {/* Sử dụng Banner component */}
            <Banner />

            {/* Main content */}
            <div className="maincontent">
                <div className="selectList">
                    {/* Các nút điều hướng */}
                    <div className="nav-btn" onClick={() => handleContentChange('hot')}>
                        <img src="/Content/image/image_game/hot.png" alt="HOT" className="image1" />
                        <p>HOT</p>
                    </div>
                    <div className="nav-btn" onClick={() => handleContentChange('livecasino')}>
                        <img src="/Content/image/image_game/live.png" alt="Live Casino" className="image1" />
                        <p>LIVE CASINO</p>
                    </div>
                    <div className="nav-btn" onClick={() => handleContentChange('xoso')}>
                        <img src="/Content/image/image_game/xoso.png" alt="Xổ Số" className="image1" />
                        <p>XỔ SỐ</p>
                    </div>
                    <div className="nav-btn" onClick={() => handleContentChange('thethao')}>
                        <img src="/Content/image/image_game/thethao.png" alt="Thể Thao" className="image1" />
                        <p>THỂ THAO</p>
                    </div>
                    <div className="nav-btn" onClick={() => handleContentChange('game')}>
                        <img src="/Content/image/image_game/game.png" alt="Game 3D" className="image1" />
                        <p>GAME 3D</p>
                    </div>
                    <div className="nav-btn" onClick={() => handleContentChange('doikhang')}>
                        <img src="/Content/image/image_game/doikhang.png" alt="Đối Kháng" className="image1" />
                        <p>ĐỐI KHÁNG</p>
                    </div>
                    <div className="nav-btn" onClick={() => handleContentChange('banca')}>
                        <img src="/Content/image/image_game/banca.png" alt="Bắn Cá" className="image1" />
                        <p>BẮN CÁ</p>
                    </div>
                    <div className="nav-btn" onClick={() => handleContentChange('esports')}>
                        <img src="/Content/image/image_game/esports.png" alt="E-Sports" className="image1" />
                        <p>E-SPORTS</p>
                    </div>
                </div>

                {/* ListGame - Các phần nội dung */}
                <div className="ListGame">
                    {/* Nội dung HOT */}
                    <div className="content1" style={{ display: activeContent === 'hot' ? 'block' : 'none' }}>
                        <a className="hc hc1 hc1h" href="/Home/Loading?Contro=XS3P">
                            <div className="tophc1">
                                <img src="/Content/image/logo/logof8bet.png" className="hc1mg2" alt="F8BET" />
                                <span className="nametitlegame1">27 LÔ BET</span>
                                <span className="nametitlegame2">SẢNH A</span>
                            </div>
                            <div className="bothc1">
                                <img src="/Content/image/image_game/hot/hot1.png" className="hc1img" alt="HOT 1" />
                                <img src="/Content/image/image_game/icon_hot.png" className="iconhot" alt="Icon Hot" />
                            </div>
                        </a>
                        {/* Các nội dung khác tương tự */}
                    </div>

                    {/* Nội dung Live Casino */}
                    <div className="content1" style={{ display: activeContent === 'livecasino' ? 'block' : 'none' }}>
                        <div className="hcl hcl2 hcllivecasino hcllivecasino1">
                            <img src="/Content/image/banner/bncsn.jpg" alt="Casino Banner" className="bncsn" />
                        </div>
                    </div>

                    {/* Nội dung Xổ Số */}
                    <div className="content1" style={{ display: activeContent === 'xoso' ? 'block' : 'none' }}>
                        <a className="hcx hcl2 hcxx" href="/Home/Loading?Contro=XSMB">
                            <div className="tophcx1">
                                <i>XỔ SỐ MIỀN BẮC</i>
                                <img src="/Content/image/logo/xosomienbac.png" alt="Xổ Số Miền Bắc" />
                            </div>
                        </a>
                    </div>

                    {/* Nội dung Thể Thao */}
                    <div className="content1" style={{ display: activeContent === 'thethao' ? 'block' : 'none' }}>
                        <div className="hcl hcl1 hcltt">
                            <img src="/Content/image/banner/bannerthethao.jpg" alt="Thể Thao Banner" className="hcltt1" />
                        </div>
                    </div>

                    {/* Nội dung Game */}
                    <div className="content1" style={{ display: activeContent === 'game' ? 'block' : 'none' }}>
                        <a className="hcx hcl2 hclgame game3d1" href="#">
                            <div className="tophcx1 topgame1">
                                <p>TÀI XỈU 3D - SẢNH A</p>
                                <img src="/Content/image/logo/logogame.png" alt="Game" />
                            </div>
                        </a>
                    </div>

                    {/* Nội dung Đối Kháng */}
                    <div className="content1" style={{ display: activeContent === 'doikhang' ? 'block' : 'none' }}>
                        <div className="hcx hcl2 bannerdoikhang1">
                            <p>NỔ HŨ</p>
                            <img src="/Content/image/image_game/logodoikhang.png" alt="Đối Kháng" />
                        </div>
                    </div>

                    {/* Nội dung Bắn Cá */}
                    <div className="content1" style={{ display: activeContent === 'banca' ? 'block' : 'none' }}>
                        <div className="hcl hcbc">
                            <p>3D</p>
                            <img src="/Content/image/icon_logo/logo_AES.png" alt="AES" />
                        </div>
                    </div>

                    {/* Nội dung E-Sports */}
                    <div className="content1" style={{ display: activeContent === 'esports' ? 'block' : 'none' }}>
                        <div className="hcx hcl2 esportbg1">
                            <img src="/Content/image/image_game/esports/logoes.png" alt="E-Sports Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
