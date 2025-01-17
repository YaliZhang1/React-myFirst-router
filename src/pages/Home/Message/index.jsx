import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    //先定义一个数组
    messageArr: [
      { id: "01", title: "Message1" },
      { id: "02", title: "Message2" },
      { id: "03", title: "Message3" },
    ],
  };
  render() {
    const { messageArr } = this.state; //从你的状态里面拿到这个数组
    return (
      <div>
        <ul>
          {/* 遍历这个数组 */}
          {messageArr.map((msgObj) => {
            return (
              <li key={msgObj.id}>
                {/* 但凡是变量，在外面都要加一个{}.这里不能使用a标签了，要使用Link并且把herf改成to */}
                {/* 如果你不需要高亮效果则直接使用Link,需要高亮效果使用NavLink.向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
                  {msgObj.title}
                </Link>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 注册路由,并且声明接收params参数 */}
        <Routes>
          <Route path="detail/:id/:title" element={<Detail />}></Route>
        </Routes>
      </div>
    );
  }
}
