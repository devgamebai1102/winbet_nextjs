'use client';

import { useState } from 'react';

const Modal = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            {isModalVisible && (
                <div id="modal1" className="modal1" style={{ display: 'block' }}>
                    <div className="modal-content">
                        <div className="headermodal">
                            <p>Đăng nhập hội viên</p>
                            <span className="close" onClick={closeModal}>×</span>
                        </div>
                        <div className="contentmodel">
                            <div className="itemmodal">
                                <i className="fa-regular fa-user imodel"></i>
                                <input
                                    type="text"
                                    name="name1"
                                    id="name1"
                                    className="form-control"
                                    placeholder="Tài khoản"
                                />
                            </div>
                            <div className="itemmodal">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Nhập mật khẩu"
                                />
                                <span className="icon_pw" onClick={togglePasswordVisibility}></span>
                            </div>
                            <div className="itemmodal" style={{ borderBottom: 'none' }}>
                                <span id="LoginMess"></span>
                            </div>
                            <br />
                            <div className="itemmodal1">
                                <a href="/Home/Register">
                                    <button className="btnitem">Đăng ký</button>
                                </a>
                                <a href="#">
                                    <button className="btn btn-outline-primary">Đăng nhập</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
