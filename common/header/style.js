import styled from "styled-components";

export const HeaderWrapper = styled.div`
user-select: none;
  z-index: 999;
  transition: all 0.4s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgba(40,54,70,1);
  .header-box {
    width: 73%;
    height: 100%;
      .blog-info {
        display: flex;
        align-items: center;
        .blog-title {
          cursor: pointer;
          font-size: 22px;
          color: yellow;
          font-weight: 700;
        }
        .some-sentence {
          margin-top: 7px;
          margin-left: 10px;
          font-size: 12px;
          color: #ccc;
        }
      }

      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-menu {
        display: none;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      height: 100%;
      width: 50%;
      .tab-list {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .tab-item {
          margin-right: 2%;
          cursor:pointer;
          .nav-link {
            font-size: 13px;
            color: #ccc;
            &:hover {
              color: white;
            }
          }
          .tab-active{
            color:yellow;
          }
          .tab-item-icon {
            margin-right: 8px;
          }
        }
      }
    }
  }

  @media not screen and (min-width: 60em) {
    .header-box {
      width: 100%;
      .blog-info {
        padding-left: 20px;
      }
    }
  }

  /* 以下全是手机样式 */
  @media not screen and (min-width: 820px) {
    .header-box{
      display:flex;
      justify-content: space-around;

      .left-menu{
        display:block;
        cursor: pointer;
        color: "white"
      }
      .some-sentence{
        display:none;
      }
      .header-right{
        width:auto;
      }
    }
  }
`;
