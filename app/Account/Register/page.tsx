"use client";
import { useState } from "react";
import Link from "next/link";
import "../styles/register.scss";
import axios from "axios";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
    password2: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const cleanedValue = value
      .replace(/\s+/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    setForm({
      ...form,
      [name]: cleanedValue,
    });
  };

  const handleSubmit = async () => {
    const { name, password, password2, phone } = form;
    if (name && password && password2 && phone) {
      if (password !== password2) {
        setMessage("Mật khẩu đăng nhập và mật khẩu rút tiền phải khác nhau");
        return;
      }
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "https://portal.lin99.club/api/Account/CreateAccount",
          {
            LoginType: 1,
            UserName: name,
            Password: password,
            DeviceId: "7c944afc-0c76-4266-9051-042ee3eb0f8e",
            DeviceType: 1,
            IsLanding: false,
          }
        );

        console.log(response);
        if (response.data.ResponseCode === 1) {
          window.open(window.location.origin, "_self");
        } else {
          setMessage(response.data.Message);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setMessage("Vui lòng nhập đầy đủ dữ liệu");
    }
  };

  const togglePasswordVisibility = (id: string) => {
    const passwordField = document.getElementById(id) as HTMLInputElement;
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  };

  return (
    <div className="App">
      <div className="bg_header">
        <Link href="/" className="btn_back"></Link>
        <h1 className="bg_header_username">ĐĂNG KÝ HỘI VIÊN</h1>
      </div>
      <div className="login">
        <div className="form">
          <div className="input">
            <div className="form_T">Tài khoản</div>
            <input
              type="text"
              name="name"
              className="ip-lg"
              placeholder="4 ~ 10 ký tự chữ và số, không có ký tự đặc biệt"
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input">
            <div className="form_T">Số điện thoại</div>
            <input
              type="text"
              name="phone"
              className="ip-lg"
              placeholder="10 chữ số"
              value={form.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input">
            <div className="form_T">Mật khẩu</div>
            <input
              type="password"
              className="ip-lg"
              name="password"
              placeholder="Mật khẩu tối đa 10 ký tự!"
              value={form.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input">
            <div className="form_T">Mật khẩu rút tiền</div>
            <input
              type="password"
              name="password2"
              className="ip-lg"
              placeholder="Mật khẩu dành riêng cho Rút tiền"
              value={form.password2}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="term">
            <div className="btn_confirm on"></div>
            <div className="termText">
              Nhận thông tin khuyến mãi qua tin nhắn điện thoại
            </div>
          </div>
          <div className="term">
            <div className="btn_confirm on"></div>
            <div className="termText">
              Tôi đã 18 tuổi, đồng thời đã đọc và đồng ý quy tắc cá cược{" "}
              <Link href="/terms" className="terms_yellow_word t_blue">
                Điều khoản
              </Link>
            </div>
          </div>
          <div>
            <span id="message">{message}</span>
          </div>
          <button
            type="submit"
            className="btn_register"
            id="btnDangky"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
