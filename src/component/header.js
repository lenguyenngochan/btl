import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header_style.css'

class Header extends Component {
    render() {
        return (
            <nav className="header">
                {/* <div className="logo">
                    <img src="logo.png" alt="" />
                </div> */}
                <div className="trangchu">
                    <Link to="/trangchu" activeClassName="activeClass">Trang chủ</Link>
                </div>
                <div className="gioithieu">
                    <Link to="/gioithieu" activeClassName="activeClass">Giới thiệu</Link>
                </div>
                <div className="sanpham">
                    <Link to="/sanpham" activeClassName="activeClass">Sản phẩm</Link>
                </div>
                <div className="tintuc">
                    <Link to="/tintuc" activeClassName="activeClass">Tin tức</Link>
                </div>
                <div className="lienhe">
                    <Link to="/lienhe" activeClassName="activeClass">Liên hệ</Link>
                </div>
            </nav>
        );
    }
}
export default Header;
