import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./components/MyNavLink";
import Jump from "./pages/Jump";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          {/*offset-2向右偏移两列。col-xs-8：占用 8 列的宽度。  */}
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 改造成 MyNavLink，这些写成<MyNavLink></MyNavLink>的形式是因为想把标签体内容以children的形式通过变量属性的方式带给MyNavLink那个封装体  */}
              <MyNavLink to="/about">About </MyNavLink>
              <MyNavLink to="/home">Home </MyNavLink>
              <MyNavLink to="/jump">Jump </MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            {/*panel 是 Bootstrap 的面板样式。  */}
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  {/* 必须要设置一个默认的路径，添加 path="/" 或重定向到其他页面 */}
                  <Route path="/" element={<Home />} />
                  {/* 下面这行必须要，这样才可以继续找到其子路径 */}
                  <Route path="/home/*" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/jump" element={<Jump />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
