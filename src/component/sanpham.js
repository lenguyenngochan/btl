import React, { Component } from "react";
import Header from "./header.js";
import { Link } from "react-router-dom";
import './sanpham_style.css';
import sanpham from './sanpham.png';
import damthietke from './damthietke.png';
import damtaybong from './damtaybong.png';
import somihoatiet from './somihoatiet.png';
import damsuonghoa from './damsuonghoa.png';
import damthietke2 from './damthietke2.png';
import damphoike from './damphoike.png';
import somichambi from './somichambi.png';
import cobe from './cobe.png';
import xanh from './xanh.png';

console.log(sanpham);
console.log(damthietke);
console.log(damtaybong);
console.log(somihoatiet);
console.log(damsuonghoa);
console.log(damthietke2);
console.log(damphoike);
console.log(somichambi);
console.log(cobe);
console.log(xanh);

class Product extends Component {
    render() {
        return (
            <div>
                <div className="head"><Header></Header></div>
                <div className="row">
                    <img src={sanpham} alt="" />
                </div>
                <div className="col1">
                    <h1>Danh mục</h1>
                    <h2>Tất cả sản phẩm</h2>
                    <div className="prod">
                        <a href="#">Đầm</a>
                    </div>
                    <div className="sub">
                        <a href="#">Đầm suông</a>
                    </div>
                    <div className="sub">
                        <a href="#">Đầm dáng A</a>
                    </div>
                    <div className="sub">
                        <a href="#">Đầm ôm</a>
                    </div>
                    <div className="prod">
                        <a href="#">Áo sơ mi</a>
                    </div>
                    <div className="sub">
                        <a href="#">Dài tay</a>
                    </div>
                    <div className="sub">
                        <a href="#">Ngắn tay</a>
                    </div>
                    <div className="sub">
                        <a href="#">Tay lỡ</a>
                    </div>
                    <div className="sub">
                        <a href="#">Áo kiểu</a>
                    </div>
                    <div className="prod">
                        <a href="#">Áo dài</a>
                    </div>
                    <div className="prod">
                        <a href="#">Quần</a>
                    </div>
                    <div className="sub">
                        <a href="#">Quần dài</a>
                    </div>
                    <div className="sub">
                        <a href="#">Quần Jeans</a>
                    </div>
                    <div className="sub">
                        <a href="#">Quần short</a>
                    </div>
                    <div className="prod">
                        <a href="#">Chân váy</a>
                    </div>
                    <div className="sub">
                        <a href="#">Chân váy xếp li</a>
                    </div>
                    <div className="sub">
                        <a href="#">Chân váy bút chì</a>
                    </div>
                    <div className="sub">
                        <a href="#">Chân váy chữ A</a>
                    </div>
                </div>
                <div className="col2">
                    <div className="h1">
                        <img src={damthietke} alt="" />
                        <Link to="/damtaybong">
                            <img src={damtaybong} alt="" />
                        </Link>
                        <img src={damphoike} alt="" />
                    </div>
                    <div className="h2">
                        <img src={somihoatiet} alt="" />
                        <img src={damsuonghoa} alt="" />
                        <img src={somichambi} alt="" />
                    </div>
                    <div className="h3">
                        <img src={damthietke2} alt="" />
                        <img src={xanh} alt="" />
                        <img src={cobe} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;