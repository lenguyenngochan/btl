import React, { Component } from "react";
import Header from "./header.js";
import bong from './bong.png';
import './taybong.css';
import mau from './mau.png';
import add from './add.png';

console.log(bong);
console.log(mau);
console.log(add);

class Damtaybong extends Component {
    render() {
        return (
            <div>
                <Header></Header><br></br>
                <div className="a">TRANG CHỦ/ĐẦM/ĐẦM THIẾT KẾ TAY BỒNG</div>
                <div className="col1">
                    <img src={bong} alt="" />
                </div>
                <div className="col2">
                    ĐẦM THIẾT KẾ TAY BỒNG
                    <p>1 299 000</p>
                    <p>Kích thước
                        <select className="size">
                            <option>
                                Size 4
                            </option>
                            <option>
                                Size 6
                            </option>
                            <option>
                                Size 8
                            </option>
                        </select>
                    </p>
                    <p>
                        Màu sắc <br></br>
                        <img src={mau} alt="" />
                    </p>
                    <p>Số lượng
                        <input tpye="number" />
                    </p>
                    <button>
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        );
    }
} 
export default Damtaybong;