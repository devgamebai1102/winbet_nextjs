import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="footer">
            <div className="uudai ft">
                <Link href="/home/download">
                    <div className="ct">
                        <Image src="/Content/image/logo/download.png" alt="Download App" width={50} height={50} />
                        <p>Tải app</p>
                    </div>
                </Link>
            </div>
            <div className="hotro ft">
                <Link href="/Home/Hotro">
                    <div className="ct ctht">
                        <Image src="/Content/image/image_game/hotrobg.png" alt="Hỗ trợ" width={50} height={50} />
                        <p>Hỗ trợ</p>
                    </div>
                </Link>
            </div>
            <div className="napruttien ft" id="showOptionsButton">
                <div className="ct">
                    <Image src="/Content/image/image_game/icon_footer_DW.png" alt="Nạp rút tiền" width={50} height={50} />
                    <p>Nạp rút tiền</p>
                </div>
            </div>
            <div className="giaodich ft">
                <Link href="/home/giaodich">
                    <div className="ct">
                        <Image src="/Content/image/image_game/giaodichbg.png" alt="Giao dịch" width={50} height={50} />
                        <p>Giao dịch</p>
                    </div>
                </Link>
            </div>
            <div className="toi ft">
                <Link href="/home/canhan">
                    <div className="ct">
                        <Image src="/Content/image/image_game/profilebg.png" alt="Tôi" width={50} height={50} />
                        <p>Tôi</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
