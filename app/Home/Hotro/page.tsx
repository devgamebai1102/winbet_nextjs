'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../styles/hotrokhachhang.scss';
import '../styles/styleuudai.scss';

const Header = () => (
    <div className="header1">
        <div className="arrow">
            <Link href="/">
                <i className="fa-solid fa-arrow-left"></i>
            </Link>
        </div>
        <div className="name">HỖ TRỢ KHÁCH HÀNG</div>
    </div>
);

const SupportItem = ({ iconClass, title, link }: { iconClass: string; title: string; link: string }) => (
    <div className="item">
        <div className={`icon ${iconClass}`} />
        <div className="title">{title}</div>
        <div className="link">
            <Link href={link}>Liên hệ</Link>
        </div>
    </div>
);

const ContentSupport = () => (
    <div className="contenthotro">
        <SupportItem iconClass="fab fa-rocketchat" title="Hỗ trợ" link="/Home/Chat" />
        <SupportItem iconClass="fa-brands fa-facebook" title="Facebook cá nhân" link="https://m.me/61559151659743" />
        <SupportItem iconClass="fab fa-telegram-plane" title="Telegram" link="https://t.me/A19865555" />
        <SupportItem iconClass="fa-brands fa-youtube" title="Youtube cá nhân" link="#" />
        <SupportItem iconClass="i5" title="Zalo cá nhân" link="#" />
    </div>
);

const Footer = () => (
    <div className="footer">
        <div className="uudai ft">
            <Link className="ct" href="/Home/Download">
                <img src="/Content/image/logo/download.png" alt="Download" />
                <p>Tải app</p>
            </Link>
        </div>
        <div className="hotro ft">
            <Link className="ct ctht" href="/Home/Hotro">
                <img src="/Content/image/image_game/hotrobg.png" alt="Hỗ trợ" />
                <p>Hỗ trợ</p>
            </Link>
        </div>
        <div className="napruttien ft" id="showOptionsButton">
            <a className="ct">
                <img src="/Content/image/image_game/icon_footer_DW.png" alt="Nạp rút tiền" />
                <p>Nạp rút tiền</p>
            </a>
        </div>
        <div className="giaodich ft">
            <Link className="ct" href="/Home/Giaodich">
                <img src="/Content/image/image_game/giaodichbg.png" alt="Giao dịch" />
                <p>Giao dịch</p>
            </Link>
        </div>
        <div className="toi ft">
            <Link className="ct" href="/Home/Canhan">
                <img src="/Content/image/image_game/profilebg.png" alt="Tôi" />
                <p>Tôi</p>
            </Link>
        </div>
    </div>
);

const NapRutTienOptions = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <div id="overlay" className="overlay" onClick={() => setIsVisible(!isVisible)} />
            {isVisible && (
                <div id="optionsDiv" className="optionsDiv">
                    <Link href="/Home/Naptien">
                        <button className="btn btn-success ob">
                            <img src="/Content/image/iconnap.png" alt="Nạp tiền" />
                            <span>NẠP TIỀN</span>
                        </button>
                    </Link>
                    <Link href="/Home/Ruttien">
                        <div id="baotriruttien" className="hidden">
                            <span id="thongbao-baotri" className="hidden">
                                Thông báo! Hiện tại chức năng “Rút Tiền” tạm thời chưa mở, quý khách vui lòng chờ...
                            </span>
                            <img src="/Content/image/icon_baotri.png" alt="Bảo trì" />
                            <p>Bảo trì</p>
                        </div>
                        <button className="btn btn-warning ob">
                            <img src="/Content/image/iconrut.png" alt="Rút tiền" />
                            <span>RÚT TIỀN</span>
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
};

const HomePage = () => {
    return (
        <div>
            <Header />
            <ContentSupport />
            <Footer />
            <NapRutTienOptions />
        </div>
    );
};

export default HomePage;