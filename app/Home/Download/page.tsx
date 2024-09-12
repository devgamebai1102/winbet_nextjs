import Image from 'next/image';
import Link from 'next/link';
import '../styles/download.css'

const DownloadSection = () => {
    return (
        <div id="div1">
            <table id="myTable">
                <tbody>
                    <tr>
                        <td style={{ textAlign: 'center' }}>
                            <h1>Winbet</h1>
                            <h2>Quân sư xổ số đồng hành cùng bạn</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link href="/">
                                                <Image
                                                    src="/Content/Images/Home/Download/bg_img_qrcode.png"
                                                    alt="QR Code"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link href="/Home/HDIOS">
                                                <Image
                                                    src="/Content/Images/Home/Download/bg_btn_app_apple.png"
                                                    alt="Apple App"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                            <Link href="https://download.winbet12.net/app-debug.apk" target="_blank">
                                                <Image
                                                    src="/Content/Images/Home/Download/bg_btn_app_google.png"
                                                    alt="Google App"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <Link href="/">
                                <Image
                                    src="/Content/Images/Home/Download/bg_mobile.png"
                                    alt="Mobile"
                                    width={150}
                                    height={300}
                                />
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table id="myTable1">
                <tbody>
                    <tr>
                        <td>
                            <Link href="/">
                                <Image
                                    src="/Content/Images/Home/Download/bg_mobile.png"
                                    alt="Mobile"
                                    width={150}
                                    height={300}
                                />
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'center' }}>
                            <h1>Winbet</h1>
                            <h2>Quân sư xổ số đồng hành cùng bạn</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Link href="/">
                                                <Image
                                                    src="/Content/Images/Home/Download/bg_img_qrcode.png"
                                                    alt="QR Code"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link href="/Home/HDIOS">
                                                <Image
                                                    src="/Content/Images/Home/Download/bg_btn_app_apple.png"
                                                    alt="Apple App"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                            <Link href="https://download.winbet12.net/app-debug.apk" target="_blank">
                                                <Image
                                                    src="/Content/Images/Home/Download/bg_btn_app_google.png"
                                                    alt="Google App"
                                                    width={100}
                                                    height={100}
                                                />
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DownloadSection;
