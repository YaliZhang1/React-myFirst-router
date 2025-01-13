import React, { Component } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./components/MyNavLink";

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
              {/* 在react中靠 路由链接实现切换组件，想有高亮效果时，使用NavLink.否则就使用Link就行 */}
              {/* <NavLink
                activeClassName="clickStyle"
                className="list-group-item"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="clickStyle"
                className="list-group-item"
                to="/home"
              >
                Home
              </NavLink> */}
              {/* 改造成 MyNavLink，这些写成<MyNavLink></MyNavLink>的形式是因为想把标签体内容以children的形式通过变量属性的方式带给MyNavLink那个封装体  */}
              <MyNavLink to="/about">About </MyNavLink>
              <MyNavLink to="/home">Home </MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            {/*panel 是 Bootstrap 的面板样式。  */}
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
