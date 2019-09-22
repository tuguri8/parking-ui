import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Icon} from "antd";
import './CommonHeader.scss'

@observer
class CommonHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader className="header" title={<Typography.Text className="header-text">주차장 상세 정보</Typography.Text>}/>
      </React.Fragment>
    );
  }
}

export default CommonHeader;
