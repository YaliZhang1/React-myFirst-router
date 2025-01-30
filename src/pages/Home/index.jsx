import React from "react";
import MyNavLink from "../../components/MyNavLink";
import { Route, Routes, Outlet } from "react-router-dom";

import News from "./News";
import Message from "./Message";

const Home = () => {
  return (
    <div>
      <h3>I'm home</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">News</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">Message</MyNavLink>
          </li>
        </ul>
        {/* 注册路由 */}
        <Routes>
          <Route path="news" element={<News />} />
          {/* <Route path="message/*"></Route> */}
          <Route path="/message/*" element={<Message />} />
          {/* <Route path="message" element={<Message />} /> */}
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
