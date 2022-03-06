import { Menu } from "antd";
import React, { memo } from "react";
import {
  BankOutlined,
  EditOutlined,
  BarChartOutlined,
  WechatOutlined,
  UserOutlined,
  QqOutlined,
} from "@ant-design/icons";
export const iconList = [
  <BankOutlined />,
  <EditOutlined />,
  <BarChartOutlined />,
  <WechatOutlined />,
  <UserOutlined />,
  <BarChartOutlined />,
  <WechatOutlined />,
  <UserOutlined />,
];
import useRouter from "next/router";
export default memo(function HeaderMenu({
  tabList,
  renderIndex,
  history,
  username,
  loginOut,
  showLogin,
}) {
  return (
    <Menu>
      {tabList.slice(renderIndex).map((tab, index) => {
        return (
          <Menu.Item
            key={index}
            onClick={() => () => {
              console.log(tab.link);
            }}
          >
            {iconList[tab.index]}
            <span>
              {tab.text}
            </span>
          </Menu.Item>
        );
      })}
      <Menu.Item key={10} onClick={() => {
        console.log(233);
      }}>
        <QqOutlined />
        <span>{username ? "退出登录" : "QQ邮箱登录"}</span>
      </Menu.Item>
    </Menu>
  );
});
