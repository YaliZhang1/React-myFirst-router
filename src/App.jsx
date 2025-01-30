import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyNavLink from "./components/MyNavLink";

const App = () => {
  return (
    <div>
      <div className="row">
        {/* offset-2 向右偏移两列。col-xs-8：占用 8 列的宽度。 */}
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 改造成 MyNavLink */}
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/home">Home</MyNavLink>
          </div>
        </div>
        <div className="col-xs-6">
          {/* panel 是 Bootstrap 的面板样式。 */}
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Routes>
              <Route path="/React-myFirst-router" element={<Home />} />
                <Route path="/React-myFirst-router/home/*" element={<Home />} />{/* 子路径 */}
                <Route path="/React-myFirst-router/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
