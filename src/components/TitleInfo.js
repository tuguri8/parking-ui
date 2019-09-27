import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Icon} from "antd";
import './TitleInfo.scss'

@observer
class TitleInfo extends Component {
  render() {
    const {data} = this.props;
    const titleStr = (data.parkingName).includes("주차장") ? data.parkingName : `${data.parkingName} 주차장`;
    return (
      <div className="title-area">
          <Typography.Text type="" className="title">{titleStr}</Typography.Text>
          <Typography.Text type="" className="subtitle">{data.addr}</Typography.Text>
      </div>
    );
  }
}

export default TitleInfo;
