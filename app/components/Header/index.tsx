import Link from 'next/link';
import '../styles/styles.scss';

interface HeaderProps {
    onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => (
    <header className="header">
        <div className="logogame">
            <Link href="/">
                <img src="/Content/image/logo/logowinbet.jpg" alt="Logo" />
            </Link>
        </div>
        <div className="xacthuc">
            <Link href="/Account/Register" className="dangki">
                <i className="fas fa-plus-circle"></i>
                <span>Đăng kí</span>
            </Link>
            <button className="dangnhap" onClick={onLoginClick}>
                <i className="fas fa-arrow-circle-right"></i>
                <span>Đăng nhập</span>
            </button>
        </div>
    </header>
);

export default Header;
