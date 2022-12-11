import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './component/sanpham.js';
import Layout from './component/layout';
import Header from './component/header';
import Damtaybong from './component/damtaybong';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes path="/" element={<Layout />}>
                    <Route path="/trangchu" element={<Product />} />
                    <Route path="/gioithieu" element={<Product />} />
                    <Route path="/sanpham" element={<Product />} />
                    <Route path="/tintuc" element={<Product />} />
                    <Route path="/lienhe" element={<Product />} />
                    <Route path="/damtaybong" element={<Damtaybong />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;