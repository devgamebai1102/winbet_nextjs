"use client";

import axios from "axios";
import { useState } from "react";

const Modal = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const onClickLogin = async () => {
    if (username.length < 1 || password.length < 1) {
      return;
    }

    console.log(`Username: ${username}\nPassword: ${password}`);

    const response = await axios.post(
      "https://portal.lin99.club/api/Account/Login",
      {
        LoginType: 1,
        UserName: username,
        Password: password,
        DeviceId: "7c944afc-0c76-4266-9051-042ee3eb0f8e",
        DeviceType: 1,
      }
    );

    console.log(response);
    if (response.data.ResponseCode === 1) {
      closeModal();
    }
  };

  return (
    <>
      {isModalVisible && (
        <div id="modal1" className="modal1" style={{ display: "block" }}>
          <div className="modal-content">
            <div className="headermodal">
              <p>Đăng nhập hội viên</p>
              <span className="close" onClick={closeModal}>
                ×
              </span>
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
                  onChange={(evt) => setUsername(evt.currentTarget.value)}
                />
              </div>
              <div className="itemmodal">
                <i className="fa-solid fa-lock"></i>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  onChange={(evt) => setPassword(evt.currentTarget.value)}
                />
                <span
                  className="icon_pw"
                  onClick={togglePasswordVisibility}
                ></span>
              </div>
              <div className="itemmodal" style={{ borderBottom: "none" }}>
                <span id="LoginMess"></span>
              </div>
              <br />
              <div className="itemmodal1">
                <a href="/Home/Register">
                  <button className="btnitem">Đăng ký</button>
                </a>
                <a href="#">
                  <button
                    className="btn btn-outline-primary"
                    onClick={onClickLogin}
                  >
                    Đăng nhập
                  </button>
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
