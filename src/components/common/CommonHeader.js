import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Row, Col} from "antd";
import { NavBar, Icon } from 'antd-mobile';

import './CommonHeader.scss'
import 'antd-mobile/dist/antd-mobile.css';

@observer
class CommonHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar className="header" mode="light" icon={<Icon className="icon" type="left" size={"lg"}/>} onLeftClick={() => window.close()}>주차장 상세 정보</NavBar>
      </React.Fragment>
    );
  }
}

export default CommonHeader;
