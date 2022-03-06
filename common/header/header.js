import React, { memo, useCallback, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HeaderWrapper } from './style'
import { Dropdown, message } from 'antd'
// import { withRouter } from "react-router-dom";
import { CaretDownOutlined, MenuFoldOutlined } from '@ant-design/icons'
// import { changeLoginPanelShow } from "@/pages/main/store/actionCreators";
// import { changeLeftVisibleAction } from "@/components/drawer/store/actionCreators";
// import {
//   changMainMoveRight,
//   changeUserName,
// } from "@/pages/main/store/actionCreators";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { SelfSelector } from "@/utils/common";
import { getHeaderRenderIndexByWidth, tabList } from 'utils/constant'
import HeaderMenu from './cpns/head-menu'
import { iconList } from './cpns/head-menu'
import { debounce } from '@/utils/common'
import { changeScreenWidth } from './store/actionCreators'
// import { handleRouterChange } from "@/utils/common";
// import { BlogTheme } from "@/constant";
const antdDropDownStyle = { color: 'white', fontSize: '13px' }
import { SelfSelector } from '@/utils/common'
export default memo(function Header(props) {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [renderIndex, setRenderIndex] = useState(5)
  const dispatch = useDispatch()

  useEffect(() => {
    const resize = debounce(function (e) {
      const width = e.target.innerWidth
      dispatch(changeScreenWidth(width))
    }, 100)
    // dispatch(changMainMoveRight(true));
    window.addEventListener('resize', resize)
    window.dispatchEvent(new Event('resize'))
    // const username = localStorage.getItem("username");
    // dispatch(changeUserName(username));
    // dispatch(getIpAction());
    return (_) => {
      window.removeEventListener('resize', resize)
    }
  }, [dispatch])
  const {
    // isHidden = false,
    // visible,
    // username,
    screenWidth,
    // theme,
  } = SelfSelector({
    header: 'screenWidth',
    // drawer: "visible",
    // main: ["moveRight", "username"],
  })
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.dispatchEvent(new Event("resize"));
  //   });
  // }, []);
  // useEffect(() => {
  //   handleRouterChange(props.location.pathname);
  // }, [props.location]);
  useEffect(() => {
    setRenderIndex(getHeaderRenderIndexByWidth(screenWidth))
  }, [screenWidth])
  // const showLogin = useCallback(() => {
  //   dispatch(changeLoginPanelShow(true));
  // }, [dispatch]);
  // // 这种方式是否会重复声明渲染?
  // const loginOut = useCallback(() => {
  //   localStorage.removeItem("username");
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userId");
  //   localStorage.removeItem("email");
  //   dispatch(changeUserName(null));
  //   message.success("成功退出");
  // }, [dispatch]);
  return (
    <HeaderWrapper className='flex-wrap'>
      <div className='header-box'>
        <div className='left-menu' onClick={() => {
          console.log(2333);
        }}>
          <MenuFoldOutlined />
        </div>
        <div className='blog-info'>
          <div
            className='blog-title'
            title='Loneliness后台管理系统'
            onClick={() => window.open('https://www.dingshiyi.top/control')}
          >
            ElevenDing
            <span role='img' aria-label='图片'>
              🌲
            </span>
          </div>
          <div className='some-sentence'>万水千山，你愿意陪我一起看吗</div>
        </div>
        <div className='header-right'>
          <div className='tab-list'>
            {tabList.slice(0, renderIndex).map((item, index) => {
              return (
                <div className='tab-item' key={item.index}>
                  <div
                    className={'nav-link'}
                    onClick={() => {
                      // dispatch(changMainMoveRight(false));
                      // props.history.push(item.link);
                      // setCurrentIndex(index);
                    }}
                  >
                    <span className='tab-item-icon'>{iconList[item.index]}</span>
                    <span className='tab-item-name'>{item.text}</span>
                  </div>
                </div>
              )
            })}
            <Dropdown
              overlay={
                <HeaderMenu
                  tabList={tabList}
                  renderIndex={renderIndex}
                  username={'丁时一'}
                  loginOut={() => { console.log(2333); }}
                  showLogin={() => { console.log(2333); }}
                  history={props.history}
                />
              }
            >
              <a className='ant-dropdown-link' style={antdDropDownStyle} href='@' onClick={(e) => e.preventDefault()}>
                <CaretDownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
})
