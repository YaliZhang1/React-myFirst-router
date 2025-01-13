import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    /* 方法一
    // const { to, title } = this.props;
    // return (
    //   <NavLink activeClassName="clickStyle" className="list-group-item" to={to}>
    //     {title}
    //   </NavLink>
    // );*/
    /* 方法二，这种方法前面不需要通过解构赋值拿到props里面属性，因为这里需要那标签体内容，Home和About，所以这里直接将标签体内容也作为了属性值，通过props拿到了*/
    //标签体也是特殊的属性值，只不过它的key是系统默认的children.
    return (
      <NavLink
        className={
          ({ isActive }) => (isActive ? "clickStyle" : "list-group-item") //如果当前路由激活，设置 clickStyle；如果未激活，设置默认的 list-group-item。
        }
        {...this.props}
      /> //这里由于全部拿过来了，所以使用自闭合标签
    );
  }
}
