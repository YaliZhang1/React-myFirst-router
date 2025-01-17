import React from "react";
// 在 React Router v6 中，Route 中的 element 属性直接渲染组件，组件不能通过 props 接收到路由参数（与 v5 不同).需要使用 useParams 来获取参数。
import { useParams } from "react-router-dom";

// 数据定义
const DetailData = [
  { id: 1, title: "article 1", content: "Beautiful CITY" },
  { id: 2, title: "article 2", content: "The winter is coming" },
  { id: 3, title: "article 3", content: "The summer is so wonderful" },
];

const Detail = () => {
  const { id, title } = useParams(); // 获取路由参数
  const numericId = parseInt(id, 10); // 将 id 转为数字

  // 查找对应数据
  const findResult = DetailData.find((detailObj) => detailObj.id === numericId);

  if (!findResult) {
    return <p>Error: No matching data found.</p>;
  }

  return (
    <ul>
      <li>ID: {id}</li>
      <li>Title: {title}</li>
      <li>Content: {findResult.content}</li>
    </ul>
  );
};

export default Detail;
